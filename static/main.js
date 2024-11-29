import SimModule from './sim.js'
import { constructDraggableObjects } from './draggableElements.js';
import { addPool, addStorage, addVariable, addPipeline, addStorageOutput, addVariableOutput } from './domConstructor.js';

SimModule().then((simModule) => {

let simObj = {};
const simStruct = new simModule.SimStruct();

///////////////////////////////////
/////Top level event listeners/////
///////////////////////////////////

//Simulate button
const simulateButton = document.getElementById("simulate");
simulateButton.addEventListener('click', () => {
    let loading = document.getElementById("loadAnimation");
    loading.style.display = "flex";
    setTimeout(() => {
        buildSimObject();
        loading.style.display = "none";
    }, 0);
})

//Add pool button
const addPoolButton = document.getElementById("addPool");
addPoolButton.addEventListener("click", () => {
    addPool();
})

//Add storage button
const addStorageButton = document.getElementById("addStorage");
addStorageButton.addEventListener("click", () => {
    addStorage();
})

//Add variable button
const addVariableButton = document.getElementById("addVariable");
addVariableButton.addEventListener("click", () => {
    addVariable();
})

//Add pipeline button
const addPipelineButton = document.getElementById("addPipeline");
addPipelineButton.addEventListener("click", () => {
    addPipeline();
})

//Add storage output button
const addStorageOutputButton = document.getElementById("addStorageOutput");
addStorageOutputButton.addEventListener("click", () => {
    addStorageOutput();
})

//Add variable output button
const addVariableOutputButton = document.getElementById("addVariableOutput");
addVariableOutputButton.addEventListener("click", () => {
    addVariableOutput();
})

////////////////////////////////////////
/////Build/Run Simulation Functions/////
////////////////////////////////////////
const buildOutputObject = function(outputStruct) {
    let outputObject = {};
    let storageOutputMap = outputStruct.storageOutputs;
    let variableOutputMap = outputStruct.variableOutputs;
    let storageKeys = storageOutputMap.keys();
    let variableKeys = variableOutputMap.keys();
    //Add storage outputs to object
    for (let i = 0; i < storageKeys.size(); i++) {
        let key = storageKeys.get(i);
        let valueVector = storageOutputMap.get(key);
        let valueArray = [];
        for (let j = 0; j < valueVector.size(); j++) {
            valueArray.push(valueVector.get(j));
        }
        outputObject[key] = valueArray;
    }
    //Add variable outputs to object
    for (let i = 0; i < variableKeys.size(); i++) {
        let key = variableKeys.get(i);
        let variableValue = variableOutputMap.get(key);
        outputObject[key] = variableValue;
    }
    return outputObject;
}

const runSimulation = function() {
    return simModule.runSimulation(simStruct);
}

const buildSimStruct = function() {
    //Pools conversion
    let poolsObject = simObj.pools;
    let poolMap = new simModule.MapStringVectorString;
    Object.keys(poolsObject).forEach(key => {
        let poolVector = new simModule.VectorString;
        for (let i = 0; i < poolsObject[key].elements.length; i++) {
            poolVector.push_back(poolsObject[key].elements[i]);
        }
        poolMap.set(key, poolVector);
    });
    simStruct.pools = poolMap;

    //Storage conversion
    let storageObject = simObj.storage;
    let storageMap = new simModule.MapStringVectorString;
    Object.keys(storageObject).forEach(key => {
        let storageVector = new simModule.VectorString;
        storageMap.set(key, storageVector);
    })
    simStruct.storage = storageMap;

    //Variables conversion
    let variablesObject = simObj.variables;
    let variablesMap = new simModule.MapStringMapStringString;
    Object.keys(variablesObject).forEach(key => {
        let innerMap = new simModule.MapStringString;
        innerMap.set("value", variablesObject[key]["value"]);
        innerMap.set("persists", variablesObject[key]["persists"]);
        variablesMap.set(key, innerMap);
    });
    simStruct.variables = variablesMap;

    //Pipelines conversion
    let pipelinesObject = simObj.pipelines;
    let pipelinesMap = new simModule.MapStringVectorMapStringString;
    Object.keys(pipelinesObject).forEach(key => {
        let innerVector = new simModule.VectorMapStringString;
        for (let i = 0; i < pipelinesObject[key].length; i++) {
            let innerMap = new simModule.MapStringString;
            Object.keys(pipelinesObject[key][i]).forEach(attribute => {
                innerMap.set(attribute, pipelinesObject[key][i][attribute]);
            });
            innerVector.push_back(innerMap);
        }
        pipelinesMap.set(key, innerVector);
    });
    simStruct.pipelines = pipelinesMap;

    //endCondition conversion
    let endConditionObject = simObj.endCondition;
    let endConditionMap = new simModule.MapStringString;
    Object.keys(endConditionObject).forEach(key => {
        endConditionMap.set(key, endConditionObject[key]);
    });
    simStruct.endCondition = endConditionMap;

    //output conversion
    let outputObject = simObj.output;
    let outputMap = new simModule.MapStringVectorString;
    let storageVector = new simModule.VectorString;
    let variableVector = new simModule.VectorString;
    for (let i = 0; i < outputObject.storage.length; i++) {
        storageVector.push_back(outputObject.storage[i]);
    }
    for (let i = 0; i < outputObject.variables.length; i++) {
        variableVector.push_back(outputObject.variables[i]);
    }

    outputMap.set("storage", storageVector);
    outputMap.set("variables", variableVector);

    simStruct.output = outputMap;

    //Run the simulation
    let output = new simModule.Output();
    output = runSimulation();
    
    //Convert output map to js object and print
    console.log(buildOutputObject(output));
}

const buildSimObject = function() {
    simObj = {
        pools: {},
        storage: {},
        variables: {},
        pipelines: {},
        endCondition: {},
        output: {
            storage: [],
            variables: []
        }
    };

    //Add pools to sim object
    let pools = document.getElementById("pools").children;
    for (let i = 0; i < pools.length; i++) {
        let poolIdNumber = pools[i].id.match(/^[a-zA-Z]+-(\d+)$/)[1];
        let poolName = pools[i].querySelector(`#poolName-${poolIdNumber}`).value;
        let poolSize = pools[i].querySelector(`#poolSize-${poolIdNumber}`).value;
        let poolElements = document.getElementById(`poolElements-${poolIdNumber}`).children;
        simObj.pools[poolName] = {
            size: poolSize,
            elements: []
        }
        for (let j = 0; j < poolElements.length; j++) {
            simObj.pools[poolName].elements.push(poolElements[j].value);
        }
    }
    //Add storage to sim object
    let storage = document.getElementById("storage").children;
    for (let i = 0; i < storage.length; i++) {
        let storageIdNumber = storage[i].id.match(/^[a-zA-Z]+-(\d+)$/)[1];
        let storageName = storage[i].querySelector(`#storageName-${storageIdNumber}`).value;
        simObj.storage[storageName] = [];
    }
    //Add variables to sim object
    let variables = document.getElementById("variables").children;
    for (let i = 0; i < variables.length; i++) {
        let variableIdNumber = variables[i].id.match(/^[a-zA-Z]+-(\d+)$/)[1];
        let variableName = variables[i].querySelector(`#variableName-${variableIdNumber}`).value;
        let variableValue = variables[i].querySelector(`#variableValue-${variableIdNumber}`).value;
        let variablePersists = variables[i].querySelector(`#variablePersists-${variableIdNumber}`).checked ? "true" : "false";
        if (variableValue == "") variableValue = "0";
        simObj.variables[variableName] = {
            value: variableValue,
            persists: variablePersists
        }
    }
    //Add pipelines to sim object
    let pipelines = document.getElementById("pipelines").children;
    for (let i = 0; i < pipelines.length; i++) {
        let pipelineIdNumber = pipelines[i].id.match(/^[a-zA-Z]+-(\d+)$/)[1];
        let pipelineName = pipelines[i].querySelector(`#pipelineName-${pipelineIdNumber}`).value;
        let pipelineSteps = pipelines[i].querySelector(`#pipelineSteps-${pipelineIdNumber}`).children;
        simObj.pipelines[pipelineName] = [];
        for (let j = 0; j < pipelineSteps.length; j++) {
            simObj.pipelines[pipelineName][j] = constructDraggableObjects(pipelineSteps[j]);
        }
    }
    //Add end condition to sim object
    let endCondition = document.getElementById("endConditionContainer").children[0];
    simObj.endCondition = constructDraggableObjects(endCondition);

    //Add outputs to sim object
    let storageOutputs = document.getElementById("storageOutputs").children;
    let variableOutputs = document.getElementById("variableOutputs").children;
    for (let i = 0; i < storageOutputs.length; i++) {
        let storageName = storageOutputs[i].querySelector(".outputName").value;
        simObj.output.storage.push(storageName);
    }
    for (let i = 0; i < variableOutputs.length; i++) {
        let variableName = variableOutputs[i].querySelector(".outputName").value;
        simObj.output.variables.push(variableName);
    }

    console.log(simObj);
    buildSimStruct();
}

})
