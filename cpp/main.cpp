#include <iostream>
#include <random>
#include <vector>
#include <time.h>
#include <algorithm>
#include <map>
#include <string>
#include "math.h"
#include <emscripten/bind.h>

struct PoolData {
    //Pool elements
    std::vector<std::string> elements;
    //Connected Lookup Table
    std::string table;
};

struct SimStruct {
    //pools: poolName: {attributes}
    std::map<std::string, PoolData> pools;
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

int randomInt(int max) {
    // Seed with a random device for true randomness.
    static std::random_device rd;  
    static std::mt19937 gen(rd()); // Mersenne Twister generator seeded with rd.
    
    // Create a uniform distribution in the range [0, max].
    std::uniform_int_distribution<int> dist(0, max);
    
    return dist(gen); // Generate a random number.
}

double randomDouble(double min, double max) {
    // Seed with a random device for true randomness.
    static std::random_device rd;  
    static std::mt19937 gen(rd()); // Mersenne Twister generator seeded with rd.

    // Create a uniform distribution in the range [0, max].
    std::uniform_real_distribution<double> dist(min, max);

    return dist(gen); // Generate a random decimal
}

SimStruct pipelineFunctions(std::map<std::string, std::string> function, SimStruct copyStruct, SimStruct simStruct) {
    std::map<std::string, int> functionTable = {
        {"RPE", 0},
        {"SPE", 1},
        {"RP", 2},
        {"AS", 3},
        {"GFE", 4},
        {"GLE", 5},
        {"GNE", 6},
        {"IfSV", 7},
        {"AV", 8},
        {"RDB", 9}
    };
    int type = functionTable[function["type"]];

    std::string poolName;
    //std::vector<std::string> pool;
    std::map<std::string, PoolData>& pools = copyStruct.pools;
    std::string replace;
    std::string poolElement;
    std::string storageName;
    std::string storageElement;
    int randomIndex;
    int foundIndex;
    std::string truePipelineName;
    std::string falsePipelineName;
    std::string variableName;
    std::string variableValue;
    double minValue;
    double maxValue;
    std::vector<std::string> numList;
    std::string value;
    std::vector<std::string>::iterator it;
    switch (type) {
        case 0:
            poolName = function["pool"];
            replace = function["replace"];
            randomIndex = randomInt(pools[poolName].elements.size() - 1);
            copyStruct.staged = pools[poolName].elements[randomIndex];
            if (replace == "false") pools[poolName].elements.erase(pools[poolName].elements.begin() + randomIndex);
            break;
        case 1:
            poolName = function["pool"];
            replace = function["replace"];
            poolElement = function["element"];
            it = std::find(pools[poolName].elements.begin(), pools[poolName].elements.end(), poolElement);
            if (it != pools[poolName].elements.end()) {
                foundIndex = std::distance(pools[poolName].elements.begin(), it);
                copyStruct.staged = pools[poolName].elements[foundIndex];
                if (replace == "false") pools[poolName].elements.erase(pools[poolName].elements.begin() + foundIndex);
            } else {
                copyStruct.error = "Specific element not found in specified pool.";
            }
            break;
        case 2:
            poolName = function["pool"];
            pools[poolName] = simStruct.pools[poolName];
            break;
        case 3:
            storageName = function["storage"];
            if (copyStruct.staged != "") {
                copyStruct.storage[storageName].push_back(copyStruct.staged);
            } else {
                copyStruct.error = "The staged value is empty - you cannot store an empty value in storage.";
            }
            break;
        case 4:
            storageName = function["storage"];
            if (copyStruct.storage[storageName].size() > 0) {
                copyStruct.staged = copyStruct.storage[storageName][0];
            } else {
                copyStruct.error = "The storage you selected is empty - there is no first element.";
            }
            break;
        case 5:
            storageName = function["storage"];
            if (copyStruct.storage[storageName].size() > 0) {
                copyStruct.staged = copyStruct.storage[storageName][copyStruct.storage[storageName].size() - 1];
            } else {
                copyStruct.error = "The storage you selected is empty - there is no last element.";
            }
            break;
        case 6:
            storageName = function["storage"];
            storageElement = function["element"];
            if (copyStruct.storage[storageName].size() - 1 >= std::stoi(storageElement)) {
                copyStruct.staged = copyStruct.storage[storageName][std::stoi(storageElement)];
            } else {
                copyStruct.error = "The storage you selected is smaller than the element you want from it - there is no Nth element.";
            }
            break;
        case 7:
            truePipelineName = function["true"];
            falsePipelineName = function["false"];
            value = function["value"];
            if (copyStruct.staged == value) {
                for (int i = 0; i < copyStruct.pipelines[truePipelineName].size(); i++) {
                    copyStruct = pipelineFunctions(copyStruct.pipelines[truePipelineName][i], copyStruct, simStruct);
                }
            } else {
                for (int i = 0; i < copyStruct.pipelines[falsePipelineName].size(); i++) {
                    copyStruct = pipelineFunctions(copyStruct.pipelines[falsePipelineName][i], copyStruct, simStruct);
                }
            }
            break;
        case 8:
            variableName = function["variable"];
            variableValue = copyStruct.variables[variableName]["value"];
            value = function["value"];
            numList.clear();
            numList.push_back(variableValue);
            numList.push_back(value);
            copyStruct.variables[variableName]["value"] = addSubtract(numList, false);
            break;
        case 9:
            minValue = std::stod(function["min"]);
            maxValue = std::stod(function["max"]);
            copyStruct.staged = std::to_string(randomDouble(minValue, maxValue));
            std::cout << copyStruct.staged << std::endl;
            break;
        default:
            copyStruct.error = "An invalid function was found in the pipeline.";
            break;
    }
    return copyStruct;
}

Output constructOutputStruct(SimStruct simStruct) {
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

SimStruct resetVariables(SimStruct copySimStruct, SimStruct simStruct) {
    for (std::map<std::string, std::map<std::string, std::string>>::iterator it = simStruct.variables.begin(); it != simStruct.variables.end(); ++it) {
        if (it -> second["persists"] == "false") {

            copySimStruct.variables[it -> first]["value"] = it -> second["value"];
        }
    }
    return copySimStruct;
}

bool checkEndCondition(EndConditionProperties endProps, std::map<std::string, std::string> endCondition) {
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

Output runSimulation(SimStruct simStruct) {
    SimStruct copySimStruct = simStruct;
    EndConditionProperties endProps;
    bool endSimulation = false;

    std::vector<std::map<std::string, std::string>> mainPipeline = copySimStruct.pipelines["main"];
    std::map<std::string, std::string> endCondition = copySimStruct.endCondition;

    while (!endSimulation) {
        for (int i = 0; i < mainPipeline.size(); i++) {
            copySimStruct = pipelineFunctions(mainPipeline[i], copySimStruct, simStruct);
        }
        //Reset variables (if not persistent)
        copySimStruct = resetVariables(copySimStruct, simStruct);
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
    emscripten::register_map<std::string, PoolData>("MapStringPoolData");

    emscripten::class_<PoolData>("PoolData")
        .constructor<>()
        .property("elements", &PoolData::elements)
        .property("table", &PoolData::table);
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