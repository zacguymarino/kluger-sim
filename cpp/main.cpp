#include <iostream>
#include <random>
#include <vector>
#include <time.h>
#include <algorithm>
#include <map>
#include <string>
#include <cmath>
#include <emscripten/bind.h>

struct SimStruct {
    //pools: poolName: {attributes}
    std::map<std::string, std::vector<std::string>> pools;
    //tables: tableName: {values}
    std::map<std::string, std::map<std::string, std::vector<std::string>>> tables;
    //storage: storageName: {values}
    std::map<std::string, std::vector<std::string>> storage;
    //variables: variableName: {attributes}
    std::map<std::string, std::map<std::string, std::string>> variables;
    //pipelines: pipelineName: vector( {attributes} )
    std::map<std::string, std::vector<std::map<std::string, std::string>>> pipelines;
    //endCondition: {attributes}
    std::map<std::string, std::string> endCondition;
    //output: typeName: vector<output>
    std::map<std::string, std::vector<std::string>> output;
    //staged: string
    std::string staged;
    //error: string
    std::string error;
};

struct Output {
    std::map<std::string, std::vector<std::string>> storageOutputs;
    std::map<std::string, std::string> variableOutputs;
};

struct EndConditionProperties {
    int mainRuns;
    EndConditionProperties() {
        mainRuns = 0;
    }
};

std::mt19937& getGenerator() {
    static std::random_device rd;              // Seed only once.
    static std::mt19937 gen(rd());             // Shared generator.
    return gen;
}

int randomInt(int max) {    
    // Create a uniform distribution in the range [0, max].
    std::uniform_int_distribution<int> dist(0, max);
    
    return dist(getGenerator()); // Generate a random number.
}

double randomDouble(double min, double max) {
    // Create a uniform distribution in the range [0, max].
    std::uniform_real_distribution<double> dist(min, max);

    return dist(getGenerator()); // Generate a random decimal
}

std::string getMathInputOne(int caseNumber, std::map<std::string, std::string>& function, SimStruct& copyStruct) {
    std::string input1;
    switch (caseNumber) {
        case 0:
            input1 = function["inputOneInput"];
            break;
        case 1:
            input1 = copyStruct.staged;
            break;
        case 2:
            input1 = copyStruct.variables[function["inputOneVariable"]]["value"];
            break;
        case 3:
            input1 = copyStruct.storage[function["inputOneStorage"]].at(std::stoi(function["inputOneStorageIndex"]));
            break;
        default:
            input1 = "0";
            break;
    }
    return input1;
}

std::string getMathInputTwo(int caseNumber, std::map<std::string, std::string>& function, SimStruct& copyStruct) {
    std::string input2;
    switch (caseNumber) {
        case 0:
            input2 = function["inputTwoInput"];
            break;
        case 1:
            input2 = copyStruct.staged;
            break;
        case 2:
            input2 = copyStruct.variables[function["inputTwoVariable"]]["value"];
            break;
        case 3:
            input2 = copyStruct.storage[function["inputTwoStorage"]].at(std::stoi(function["inputTwoStorageIndex"]));
            break;
        default:
            input2 = "0";
            break;
    }
    return input2;
}

void pipelineFunctions(std::map<std::string, std::string>& function, SimStruct& copyStruct, SimStruct& simStruct) {
    std::map<std::string, int> functionTable = {
        {"RPE", 0},
        {"SPE", 10},
        {"RP", 20},
        {"GTE", 25},
        {"AS", 30},
        {"GFE", 40},
        {"GLE", 50},
        {"GNE", 60},
        {"IfET", 70},
        {"IfNET", 71},
        {"IfGT", 72},
        {"IfLT", 73},
        {"IfGE", 74},
        {"IfLE", 75},
        {"RDB", 80},
        {"AV", 82},
        {"RPL", 90},
        {"ADD", 100},
        {"SUB", 110},
        {"MUL", 120},
        {"DIV", 130},
        {"EXP", 140},
        {"ROOT", 150}
    };
    std::map<std::string, int> inputTargets = {
        {"input", 0},
        {"staged", 1},
        {"variable", 2},
        {"storage", 3}
    };
    std::map<std::string, int> targetTargets = {
        {"staged", 0},
        {"variable", 1},
        {"storage", 2}
    };

    int type = functionTable[function["type"]];

    std::string pipelineName;
    std::string poolName;
    std::string tableName;
    std::string replace;
    std::string poolElement;
    std::string storageName;
    std::string storageElement;
    int randomIndex;
    int foundIndex;
    int valueIndex;
    std::string truePipelineName;
    std::string falsePipelineName;
    std::string variableName;
    std::string variableValue;
    double minValue;
    double maxValue;
    std::string value;
    std::vector<std::string>::iterator it;
    std::string inputOneTarget;
    std::string inputTwoTarget;
    std::string targetTarget;
    std::string input1;
    std::string input2;
    switch (type) {
        case 0:
            poolName = function["pool"];
            replace = function["replace"];
            randomIndex = randomInt(copyStruct.pools[poolName].size() - 1);
            copyStruct.staged = copyStruct.pools[poolName][randomIndex];
            if (replace == "false") copyStruct.pools[poolName].erase(copyStruct.pools[poolName].begin() + randomIndex);
            break;
        case 10:
            poolName = function["pool"];
            replace = function["replace"];
            poolElement = function["element"];
            it = std::find(copyStruct.pools[poolName].begin(), copyStruct.pools[poolName].end(), poolElement);
            if (it != copyStruct.pools[poolName].end()) {
                foundIndex = std::distance(copyStruct.pools[poolName].begin(), it);
                copyStruct.staged = copyStruct.pools[poolName][foundIndex];
                if (replace == "false") copyStruct.pools[poolName].erase(copyStruct.pools[poolName].begin() + foundIndex);
            } else {
                copyStruct.error = "Specific element not found in specified pool.";
            }
            break;
        case 20:
            poolName = function["pool"];
            copyStruct.pools[poolName] = simStruct.pools[poolName];
            break;
        case 25:
            tableName = function["tableName"];
            valueIndex = std::stoi(function["valueIndex"]);
            inputOneTarget = function["inputOneTarget"];
            targetTarget = function["targetTarget"];
            input1 = getMathInputOne(inputTargets[inputOneTarget], function, copyStruct);
            value = copyStruct.tables[tableName][input1][valueIndex];
            switch (targetTargets[targetTarget]) {
                case 0:
                    copyStruct.staged = value;
                    break;
                case 1:
                    copyStruct.variables[function["targetVariable"]]["value"] = value;
                    break;
                case 2:
                    copyStruct.storage[function["targetStorage"]].at(std::stoi(function["targetStorageIndex"])) = value;
                    break;
                default:
                    copyStruct.staged = value;
                    break;
            }
            break;
        case 30:
            storageName = function["storage"];
            if (copyStruct.staged != "") {
                copyStruct.storage[storageName].push_back(copyStruct.staged);
            } else {
                copyStruct.error = "The staged value is empty - you cannot store an empty value in storage.";
            }
            break;
        case 40:
            storageName = function["storage"];
            if (copyStruct.storage[storageName].size() > 0) {
                copyStruct.staged = copyStruct.storage[storageName][0];
            } else {
                copyStruct.error = "The storage you selected is empty - there is no first element.";
            }
            break;
        case 50:
            storageName = function["storage"];
            if (copyStruct.storage[storageName].size() > 0) {
                copyStruct.staged = copyStruct.storage[storageName][copyStruct.storage[storageName].size() - 1];
            } else {
                copyStruct.error = "The storage you selected is empty - there is no last element.";
            }
            break;
        case 60:
            storageName = function["storage"];
            storageElement = function["element"];
            if (copyStruct.storage[storageName].size() - 1 >= std::stoi(storageElement)) {
                copyStruct.staged = copyStruct.storage[storageName][std::stoi(storageElement)];
            } else {
                copyStruct.error = "The storage you selected is smaller than the element you want from it - there is no Nth element.";
            }
            break;
        case 70:
            truePipelineName = function["true"];
            falsePipelineName = function["false"];
            inputOneTarget = function["inputOneTarget"];
            inputTwoTarget = function["inputTwoTarget"];
            input1 = getMathInputOne(inputTargets[inputOneTarget], function, copyStruct);
            input2 = getMathInputTwo(inputTargets[inputTwoTarget], function, copyStruct);
            if (std::stod(input1) == std::stod(input2)) {
                for (int i = 0; i < copyStruct.pipelines[truePipelineName].size(); i++) {
                    pipelineFunctions(copyStruct.pipelines[truePipelineName][i], copyStruct, simStruct);
                }
            } else {
                for (int i = 0; i < copyStruct.pipelines[falsePipelineName].size(); i++) {
                    pipelineFunctions(copyStruct.pipelines[falsePipelineName][i], copyStruct, simStruct);
                }
            }
            break;
        case 71:
            truePipelineName = function["true"];
            falsePipelineName = function["false"];
            inputOneTarget = function["inputOneTarget"];
            inputTwoTarget = function["inputTwoTarget"];
            input1 = getMathInputOne(inputTargets[inputOneTarget], function, copyStruct);
            input2 = getMathInputTwo(inputTargets[inputTwoTarget], function, copyStruct);
            if (std::stod(input1) != std::stod(input2)) {
                for (int i = 0; i < copyStruct.pipelines[truePipelineName].size(); i++) {
                    pipelineFunctions(copyStruct.pipelines[truePipelineName][i], copyStruct, simStruct);
                }
            } else {
                for (int i = 0; i < copyStruct.pipelines[falsePipelineName].size(); i++) {
                    pipelineFunctions(copyStruct.pipelines[falsePipelineName][i], copyStruct, simStruct);
                }
            }
            break;
        case 72:
            truePipelineName = function["true"];
            falsePipelineName = function["false"];
            inputOneTarget = function["inputOneTarget"];
            inputTwoTarget = function["inputTwoTarget"];
            input1 = getMathInputOne(inputTargets[inputOneTarget], function, copyStruct);
            input2 = getMathInputTwo(inputTargets[inputTwoTarget], function, copyStruct);
            if (std::stod(input1) > std::stod(input2)) {
                for (int i = 0; i < copyStruct.pipelines[truePipelineName].size(); i++) {
                    pipelineFunctions(copyStruct.pipelines[truePipelineName][i], copyStruct, simStruct);
                }
            } else {
                for (int i = 0; i < copyStruct.pipelines[falsePipelineName].size(); i++) {
                    pipelineFunctions(copyStruct.pipelines[falsePipelineName][i], copyStruct, simStruct);
                }
            }
            break;
        case 73:
            truePipelineName = function["true"];
            falsePipelineName = function["false"];
            inputOneTarget = function["inputOneTarget"];
            inputTwoTarget = function["inputTwoTarget"];
            input1 = getMathInputOne(inputTargets[inputOneTarget], function, copyStruct);
            input2 = getMathInputTwo(inputTargets[inputTwoTarget], function, copyStruct);
            if (std::stod(input1) < std::stod(input2)) {
                for (int i = 0; i < copyStruct.pipelines[truePipelineName].size(); i++) {
                    pipelineFunctions(copyStruct.pipelines[truePipelineName][i], copyStruct, simStruct);
                }
            } else {
                for (int i = 0; i < copyStruct.pipelines[falsePipelineName].size(); i++) {
                    pipelineFunctions(copyStruct.pipelines[falsePipelineName][i], copyStruct, simStruct);
                }
            }
            break;
        case 74:
            truePipelineName = function["true"];
            falsePipelineName = function["false"];
            inputOneTarget = function["inputOneTarget"];
            inputTwoTarget = function["inputTwoTarget"];
            input1 = getMathInputOne(inputTargets[inputOneTarget], function, copyStruct);
            input2 = getMathInputTwo(inputTargets[inputTwoTarget], function, copyStruct);
            if (std::stod(input1) >= std::stod(input2)) {
                for (int i = 0; i < copyStruct.pipelines[truePipelineName].size(); i++) {
                    pipelineFunctions(copyStruct.pipelines[truePipelineName][i], copyStruct, simStruct);
                }
            } else {
                for (int i = 0; i < copyStruct.pipelines[falsePipelineName].size(); i++) {
                    pipelineFunctions(copyStruct.pipelines[falsePipelineName][i], copyStruct, simStruct);
                }
            }
            break;
        case 75:
            truePipelineName = function["true"];
            falsePipelineName = function["false"];
            inputOneTarget = function["inputOneTarget"];
            inputTwoTarget = function["inputTwoTarget"];
            input1 = getMathInputOne(inputTargets[inputOneTarget], function, copyStruct);
            input2 = getMathInputTwo(inputTargets[inputTwoTarget], function, copyStruct);
            if (std::stod(input1) <= std::stod(input2)) {
                for (int i = 0; i < copyStruct.pipelines[truePipelineName].size(); i++) {
                    pipelineFunctions(copyStruct.pipelines[truePipelineName][i], copyStruct, simStruct);
                }
            } else {
                for (int i = 0; i < copyStruct.pipelines[falsePipelineName].size(); i++) {
                    pipelineFunctions(copyStruct.pipelines[falsePipelineName][i], copyStruct, simStruct);
                }
            }
            break;
        case 80:
            minValue = std::stod(function["min"]);
            maxValue = std::stod(function["max"]);
            copyStruct.staged = std::to_string(randomDouble(minValue, maxValue));
            break;
        case 82:
            targetTarget = function["targetTarget"];
            inputOneTarget = function["inputOneTarget"]; 
            input1 = getMathInputOne(inputTargets[inputOneTarget], function, copyStruct);
            switch (targetTargets[targetTarget]) {
                case 0:
                    copyStruct.staged = input1;
                    break;
                case 1:
                    copyStruct.variables[function["targetVariable"]]["value"] = input1;
                    break;
                case 2:
                    copyStruct.storage[function["targetStorage"]].at(std::stoi(function["targetStorageIndex"])) = input1;
                    break;
                default:
                    copyStruct.staged = input1;
                    break;
            }
            break;
        case 90:
            pipelineName = function["pipeline"];
            value = function["runs"];
            for (int i = 0; i < std::stoi(value); i++) {
                for (int j = 0; j < copyStruct.pipelines[pipelineName].size(); j++) {
                    pipelineFunctions(copyStruct.pipelines[pipelineName][j], copyStruct, simStruct);
                }
            }
            break;
        case 100:
            inputOneTarget = function["inputOneTarget"];
            inputTwoTarget = function["inputTwoTarget"];
            targetTarget = function["targetTarget"];
            input1 = getMathInputOne(inputTargets[inputOneTarget], function, copyStruct);
            input2 = getMathInputTwo(inputTargets[inputTwoTarget], function, copyStruct);
            value = std::to_string(std::stod(input1) + std::stod(input2));
            switch (targetTargets[targetTarget]) {
                case 0:
                    copyStruct.staged = value;
                    break;
                case 1:
                    copyStruct.variables[function["targetVariable"]]["value"] = value;
                    break;
                case 2:
                    copyStruct.storage[function["targetStorage"]].at(std::stoi(function["targetStorageIndex"])) = value;
                    break;
                default:
                    copyStruct.staged = value;
                    break;
            }
            break;
        case 110:
            inputOneTarget = function["inputOneTarget"];
            inputTwoTarget = function["inputTwoTarget"];
            targetTarget = function["targetTarget"];
            input1 = getMathInputOne(inputTargets[inputOneTarget], function, copyStruct);
            input2 = getMathInputTwo(inputTargets[inputTwoTarget], function, copyStruct);
            value = std::to_string(std::stod(input1) - std::stod(input2));
            switch (targetTargets[targetTarget]) {
                case 0:
                    copyStruct.staged = value;
                    break;
                case 1:
                    copyStruct.variables[function["targetVariable"]]["value"] = value;
                    break;
                case 2:
                    copyStruct.storage[function["targetStorage"]].at(std::stoi(function["targetStorageIndex"])) = value;
                    break;
                default:
                    copyStruct.staged = value;
                    break;
            }
            break;
        case 120:
            inputOneTarget = function["inputOneTarget"];
            inputTwoTarget = function["inputTwoTarget"];
            targetTarget = function["targetTarget"];
            input1 = getMathInputOne(inputTargets[inputOneTarget], function, copyStruct);
            input2 = getMathInputTwo(inputTargets[inputTwoTarget], function, copyStruct);
            value = std::to_string(std::stod(input1) * std::stod(input2));
            switch (targetTargets[targetTarget]) {
                case 0:
                    copyStruct.staged = value;
                    break;
                case 1:
                    copyStruct.variables[function["targetVariable"]]["value"] = value;
                    break;
                case 2:
                    copyStruct.storage[function["targetStorage"]].at(std::stoi(function["targetStorageIndex"])) = value;
                    break;
                default:
                    copyStruct.staged = value;
                    break;
            }
            break;
        case 130:
            inputOneTarget = function["inputOneTarget"];
            inputTwoTarget = function["inputTwoTarget"];
            targetTarget = function["targetTarget"];
            input1 = getMathInputOne(inputTargets[inputOneTarget], function, copyStruct);
            input2 = getMathInputTwo(inputTargets[inputTwoTarget], function, copyStruct);
            value = std::to_string(std::stod(input1) / std::stod(input2));
            switch (targetTargets[targetTarget]) {
                case 0:
                    copyStruct.staged = value;
                    break;
                case 1:
                    copyStruct.variables[function["targetVariable"]]["value"] = value;
                    break;
                case 2:
                    copyStruct.storage[function["targetStorage"]].at(std::stoi(function["targetStorageIndex"])) = value;
                    break;
                default:
                    copyStruct.staged = value;
                    break;
            }
            break;
        case 140:
            inputOneTarget = function["inputOneTarget"];
            targetTarget = function["targetTarget"];
            input1 = getMathInputOne(inputTargets[inputOneTarget], function, copyStruct);
            input2 = function["expRoot"];
            value = std::to_string(pow(std::stod(input1), std::stod(input2)));
            switch (targetTargets[targetTarget]) {
                case 0:
                    copyStruct.staged = value;
                    break;
                case 1:
                    copyStruct.variables[function["targetVariable"]]["value"] = value;
                    break;
                case 2:
                    copyStruct.storage[function["targetStorage"]].at(std::stoi(function["targetStorageIndex"])) = value;
                    break;
                default:
                    copyStruct.staged = value;
                    break;
            }
            break;
        case 150:
            inputOneTarget = function["inputOneTarget"];
            targetTarget = function["targetTarget"];
            input1 = getMathInputOne(inputTargets[inputOneTarget], function, copyStruct);
            input2 = function["expRoot"];
            value = std::to_string(pow(std::stod(input1), 1.0 / std::stod(input2)));
            switch (targetTargets[targetTarget]) {
                case 0:
                    copyStruct.staged = value;
                    break;
                case 1:
                    copyStruct.variables[function["targetVariable"]]["value"] = value;
                    break;
                case 2:
                    copyStruct.storage[function["targetStorage"]].at(std::stoi(function["targetStorageIndex"])) = value;
                    break;
                default:
                    copyStruct.staged = value;
                    break;
            }
            break;
        default:
            copyStruct.error = "An invalid function was found in the pipeline.";
            break;
    }
}

Output constructOutputStruct(SimStruct& simStruct) {
    Output simOutput;
    std::vector<std::string> storageOutputs = simStruct.output["storage"];
    std::vector<std::string> variableOutputs = simStruct.output["variables"];
    for (int i = 0; i < storageOutputs.size(); i++) {
        simOutput.storageOutputs[storageOutputs[i]] = simStruct.storage[storageOutputs[i]];
    }
    for (int i = 0; i < variableOutputs.size(); i++) {
        simOutput.variableOutputs[variableOutputs[i]] = simStruct.variables[variableOutputs[i]]["value"];
    }
    return simOutput;
}

void resetVariables(SimStruct& copySimStruct, SimStruct& simStruct) {
    for (std::map<std::string, std::map<std::string, std::string>>::iterator it = simStruct.variables.begin(); it != simStruct.variables.end(); ++it) {
        if (it -> second["persists"] == "false") {
            copySimStruct.variables[it -> first]["value"] = it -> second["value"];
        }
    }
}

bool checkEndCondition(EndConditionProperties& endProps, std::map<std::string, std::string>& endCondition) {
    std::map<std::string, int> endConditionTable = {
        {"MPR", 0}
    };
    int endType = endConditionTable[endCondition["type"]];

    switch (endType) {
        case 0:
            if (endProps.mainRuns >= std::stoi(endCondition["runs"])) return true;
            break;
        default:
            break;
    }
    return false;
}

Output runSimulation(SimStruct& simStruct) {
    SimStruct copySimStruct = simStruct;
    EndConditionProperties endProps;
    bool endSimulation = false;

    std::vector<std::map<std::string, std::string>> mainPipeline = copySimStruct.pipelines["main"];
    std::map<std::string, std::string> endCondition = copySimStruct.endCondition;

    while (!endSimulation) {
        for (int i = 0; i < mainPipeline.size(); i++) {
            pipelineFunctions(mainPipeline[i], copySimStruct, simStruct);
        }
        //Reset variables (if not persistent)
        resetVariables(copySimStruct, simStruct);
        //Add 1 to main pipeline runs
        endProps.mainRuns++;
        //Update endSimulation properties
        endSimulation = checkEndCondition(endProps, endCondition);
    }
    return constructOutputStruct(copySimStruct);
}


EMSCRIPTEN_BINDINGS(SimModule) {
    //Reusable Types
    emscripten::register_vector<std::string>("VectorString");
    emscripten::register_map<std::string, std::string>("MapStringString");
    emscripten::register_map<std::string, std::vector<std::string>>("MapStringVectorString");
    emscripten::register_map<std::string, std::map<std::string, std::string>>("MapStringMapStringString");
    emscripten::register_vector<std::map<std::string, std::string>>("VectorMapStringString");
    emscripten::register_map<std::string, std::vector<std::map<std::string, std::string>>>("MapStringVectorMapStringString");
    emscripten::register_map<std::string, std::map<std::string, std::vector<std::string>>>("MapStringMapStringVectorString");

    emscripten::class_<SimStruct>("SimStruct")
        .constructor<>()
        .property("pools", &SimStruct::pools)
        .property("tables", &SimStruct::tables)
        .property("storage", &SimStruct::storage)
        .property("variables", &SimStruct::variables)
        .property("pipelines", &SimStruct::pipelines)
        .property("endCondition", &SimStruct::endCondition)
        .property("output", &SimStruct::output);
    emscripten::class_<Output>("Output")
        .constructor<>()
        .property("storageOutputs", &Output::storageOutputs)
        .property("variableOutputs", &Output::variableOutputs);
    emscripten::function("runSimulation", &runSimulation);
}