import { createDraggableElements } from './draggableElements.js';

///////////////////////////////
/////Setup draggable stuff/////
///////////////////////////////

let draggedItem = null;

const handleDragStart = function(event) {
    draggedItem = event.target.getAttribute("data-info");
    event.dataTransfer.setData("text/plain", draggedItem);
}

const handleDragOver = function(event) {
    event.preventDefault();
}

const handleDrop = function(event) {
    event.preventDefault();
    const droppedItemData = event.dataTransfer.getData("text/plain");
    //Determine if drop occurred in the right place
    if (droppedItemData.match(/^([^_]+)_/)[1] == "PF" && !event.currentTarget.classList.contains("pipelineFunctions")) {
        return;
    }
    if (droppedItemData.match(/^([^_]+)_/)[1] == "EC" && !event.currentTarget.classList.contains("endCondition")) {
        return;
    }
    //Remove function button
    let removeFunctionButton = document.createElement("button");
    removeFunctionButton.innerHTML = "&#x78;";
    removeFunctionButton.addEventListener("click", (event) => {
        event.target.parentNode.remove();
    })
    let chosenFunction = createDraggableElements(droppedItemData);
    //Put it all together
    chosenFunction.appendChild(removeFunctionButton);
    if (event.currentTarget.classList.contains("pipelineFunctions")) {
        event.currentTarget.appendChild(chosenFunction);
    }
    if (event.currentTarget.classList.contains("endCondition")) {
        event.currentTarget.innerHTML = "";
        event.currentTarget.appendChild(chosenFunction);
    }
}

//Add endConditionContainer drag/drop event listeners
let endConditionContainer = document.getElementById("endConditionContainer");
endConditionContainer.addEventListener('dragover', handleDragOver);
endConditionContainer.addEventListener('drop', handleDrop);

//Setup draggable items
const draggableItems = document.querySelectorAll('.draggable-item');
draggableItems.forEach(item => {
    item.addEventListener('dragstart', handleDragStart);
})

////////////////////////////
/////Sim Tool Functions/////
////////////////////////////

const addPool = function() {
    //Get unique ID for new pool
    let poolsContainer = document.getElementById("pools");
    let lastChild = poolsContainer.lastElementChild;
    let newIdNumber = 1;
    if (lastChild) {
        let match = lastChild.id.match(/pool-(\d+)/);
        if (match) {
            newIdNumber = parseInt(match[1], 10) + 1;
        }
    }
    //Pool container
    let newPoolContainer = document.createElement("div");
    newPoolContainer.setAttribute("id", `pool-${newIdNumber}`);
    //Pool name container
    let poolNameContainer = document.createElement("div");
    //Pool name label
    let poolNameLabel = document.createElement("label");
    poolNameLabel.textContent = "Pool name: ";
    //Pool name input
    let poolNameInput = document.createElement("input");
    poolNameInput.setAttribute("type", "text");
    poolNameInput.setAttribute("id", `poolName-${newIdNumber}`);
    //Pool size container
    let poolSizeContainer = document.createElement("div");
    //Pool size label
    let poolSizeLabel = document.createElement("label");
    poolSizeLabel.textContent = "Pool size: ";
    //Pool size input
    let poolSizeInput = document.createElement("input");
    poolSizeInput.setAttribute("type", "number");
    poolSizeInput.setAttribute("min", "0");
    poolSizeInput.setAttribute("id", `poolSize-${newIdNumber}`);
    poolSizeInput.addEventListener("change", (event) => {
        updatePoolSize(event, newIdNumber);
    })
    //Remove pool button
    let removeButton = document.createElement('button');
    removeButton.textContent = "Remove Pool";
    removeButton.addEventListener("click", () => {
        document.getElementById(`pool-${newIdNumber}`).remove();
    })
    //Pool element container
    let elementContainer = document.createElement('div');
    elementContainer.setAttribute('id', `poolElements-${newIdNumber}`);
    //Put it all together
    poolNameContainer.appendChild(poolNameLabel);
    poolNameContainer.appendChild(poolNameInput);
    newPoolContainer.appendChild(poolNameContainer);
    poolSizeContainer.appendChild(poolSizeLabel);
    poolSizeContainer.appendChild(poolSizeInput);
    newPoolContainer.appendChild(poolSizeContainer);
    newPoolContainer.appendChild(removeButton);
    newPoolContainer.appendChild(elementContainer);
    poolsContainer.appendChild(newPoolContainer);
}

function updatePoolSize(event, idNumber) {
    let size = event.currentTarget.value;
    let pool = document.getElementById(`poolElements-${idNumber}`);
    let poolInputs = pool.children;
    if (size > poolInputs.length) {
        let difference = size - poolInputs.length;
        for (let i = 0; i < difference; i++) {
            let newElement = document.createElement("input");
            newElement.classList.add("poolElement");
            newElement.classList.add("w-25px");
            newElement.setAttribute("type", "text");
            pool.appendChild(newElement);
        }
    } else if (size < poolInputs.length) {
        let difference = poolInputs.length - size;
        for (let i = 0; i < difference; i++) {
            pool.removeChild(poolInputs[poolInputs.length - 1]);
        }
    }
}

const addStorage = function() {
    //Get unique ID for new storage
    let storageContainer = document.getElementById("storage");
    let lastChild = storageContainer.lastElementChild;
    let newIdNumber = 1;
    if (lastChild) {
        let match = lastChild.id.match(/storage-(\d+)/);
        if (match) {
            newIdNumber = parseInt(match[1], 10) + 1;
        }
    }
    //Storage container
    let newStorageContainer = document.createElement("div");
    newStorageContainer.setAttribute('id', `storage-${newIdNumber}`);
    //Storage name container
    let storageNameContainer = document.createElement("div");
    //Storage name label
    let storageNameLabel = document.createElement("label");
    storageNameLabel.textContent = "Storage name: ";
    //Storage name input
    let storageNameInput = document.createElement("input");
    storageNameInput.setAttribute("type", "text");
    storageNameInput.setAttribute("id", `storageName-${newIdNumber}`);
    //Remove pool button
    let removeButton = document.createElement('button');
    removeButton.textContent = "Remove Storage";
    removeButton.addEventListener("click", () => {
        document.getElementById(`storage-${newIdNumber}`).remove();
    })
    //Put it all together
    storageNameContainer.appendChild(storageNameLabel);
    storageNameContainer.appendChild(storageNameInput);
    newStorageContainer.appendChild(storageNameContainer);
    newStorageContainer.appendChild(removeButton);
    storageContainer.appendChild(newStorageContainer);
}

const addVariable = function() {
    //Get unique ID for new variable
    let variablesContainer = document.getElementById("variables");
    let lastChild = variablesContainer.lastElementChild;
    let newIdNumber = 1;
    if (lastChild) {
        let match = lastChild.id.match(/variable-(\d+)/);
        if (match) {
            newIdNumber = parseInt(match[1], 10) + 1;
        }
    }
    //Variable container
    let newVariableContainer = document.createElement("div");
    newVariableContainer.setAttribute("id", `variable-${newIdNumber}`);
    //Variable name container
    let variableNameContainer = document.createElement("div");
    //Variable name label
    let variableNameLabel = document.createElement("label");
    variableNameLabel.textContent = "Variable name: ";
    //Variable name input
    let variableNameInput = document.createElement("input");
    variableNameInput.setAttribute("type", "text");
    variableNameInput.setAttribute("id", `variableName-${newIdNumber}`);
    //Variable value container
    let variableValueContainer = document.createElement("div");
    //Variable value label
    let variableValueLabel = document.createElement("label");
    variableValueLabel.textContent = "Initial value: ";
    //Variable value input
    let variableValueInput = document.createElement("input");
    variableValueInput.setAttribute("type", "number");
    variableValueInput.setAttribute("id", `variableValue-${newIdNumber}`);
    //Variable persist container
    let variablePersistContainer = document.createElement("div");
    //Variable persist label
    let variablePersistLabel = document.createElement("label");
    variablePersistLabel.textContent = "Persist: ";
    //Variable persist input
    let variablePersistInput = document.createElement("input");
    variablePersistInput.setAttribute("type", "checkbox");
    variablePersistInput.setAttribute("id", `variablePersists-${newIdNumber}`);
    variablePersistInput.checked = true;
    //Remove variable button
    let removeButton = document.createElement('button');
    removeButton.textContent = "Remove Variable";
    removeButton.addEventListener("click", () => {
        document.getElementById(`variable-${newIdNumber}`).remove();
    })
    //Put it all together
    variableNameContainer.appendChild(variableNameLabel);
    variableNameContainer.appendChild(variableNameInput);
    newVariableContainer.appendChild(variableNameContainer);
    variableValueContainer.appendChild(variableValueLabel);
    variableValueContainer.appendChild(variableValueInput);
    newVariableContainer.appendChild(variableValueContainer);
    variablePersistContainer.appendChild(variablePersistLabel);
    variablePersistContainer.appendChild(variablePersistInput);
    newVariableContainer.appendChild(variablePersistContainer);
    newVariableContainer.appendChild(removeButton);
    variablesContainer.appendChild(newVariableContainer);
}

const addStorageOutput = function() {
    //Get unique ID for new storage outputs
    let outputContainer = document.getElementById("storageOutputs");
    let lastChild = outputContainer.lastElementChild;
    let newIdNumber = 1;
    if (lastChild) {
        let match = lastChild.id.match(/storageOutput-(\d+)/);
        if (match) {
            newIdNumber = parseInt(match[1], 10) + 1;
        }
    }
    //Storage output container
    let newOutputContainer = document.createElement("div");
    newOutputContainer.setAttribute("id", `storageOutput-${newIdNumber}`);
    //Storage output label
    let outputLabel = document.createElement("label");
    outputLabel.textContent = "Storage name: ";
    //Storage output input
    let outputInput = document.createElement("input");
    outputInput.setAttribute("type", "text");
    outputInput.classList.add("outputName");
    //Remove output button
    let removeButton = document.createElement("button");
    removeButton.textContent = "Remove Output";
    removeButton.addEventListener("click", () => {
        document.getElementById(`storageOutput-${newIdNumber}`).remove();
    });
    //Put it all together
    newOutputContainer.appendChild(outputLabel);
    newOutputContainer.appendChild(outputInput);
    newOutputContainer.appendChild(removeButton);
    outputContainer.appendChild(newOutputContainer);
}

const addVariableOutput = function() {
    //Get unique ID for new storage outputs
    let outputContainer = document.getElementById("variableOutputs");
    let lastChild = outputContainer.lastElementChild;
    let newIdNumber = 1;
    if (lastChild) {
        let match = lastChild.id.match(/variableOutput-(\d+)/);
        if (match) {
            newIdNumber = parseInt(match[1], 10) + 1;
        }
    }
    //Variable output container
    let newOutputContainer = document.createElement("div");
    newOutputContainer.setAttribute("id", `variableOutput-${newIdNumber}`);
    //Variable output label
    let outputLabel = document.createElement("label");
    outputLabel.textContent = "Variable name: ";
    //Variable output input
    let outputInput = document.createElement("input");
    outputInput.setAttribute("type", "text");
    outputInput.classList.add("outputName");
    //Remove output button
    let removeButton = document.createElement("button");
    removeButton.textContent = "Remove Output";
    removeButton.addEventListener("click", () => {
        document.getElementById(`variableOutput-${newIdNumber}`).remove();
    });
    //Put it all together
    newOutputContainer.appendChild(outputLabel);
    newOutputContainer.appendChild(outputInput);
    newOutputContainer.appendChild(removeButton);
    outputContainer.appendChild(newOutputContainer);
}

const addPipeline = function() {
    //Get unique ID for new pipeline
    let pipelinesContainer = document.getElementById("pipelines");
    let lastChild = pipelinesContainer.lastElementChild;
    let newIdNumber = 1;
    if (lastChild) {
        let match = lastChild.id.match(/pipeline-(\d+)/);
        if (match) {
            newIdNumber = parseInt(match[1], 10) + 1;
        }
    }
    //Pipeline container
    let newPipelineContainer = document.createElement("div");
    newPipelineContainer.setAttribute("id", `pipeline-${newIdNumber}`);
    //Pipeline name container
    let pipelineNameContainer = document.createElement("div");
    //Pipeline name label
    let pipelineNameLabel = document.createElement("label");
    pipelineNameLabel.textContent = "Pipeline name: ";
    //Pipeline name input
    let pipelineNameInput = document.createElement("input");
    pipelineNameInput.setAttribute("type", "text");
    pipelineNameInput.setAttribute("id", `pipelineName-${newIdNumber}`);
    //Remove pipeline button
    let removeButton = document.createElement("button");
    removeButton.textContent = "Remove Pipeline";
    removeButton.addEventListener("click", () => {
        document.getElementById(`pipeline-${newIdNumber}`).remove();
    })
    //Step-container container
    let stepContainerContainer = document.createElement("div");
    //Step container label
    let stepContainerLabel = document.createElement("label");
    stepContainerLabel.textContent = "Drag/Drop Functions Zone: ";
    //Step container
    let stepContainer = document.createElement('div');
    stepContainer.setAttribute('id', `pipelineSteps-${newIdNumber}`);
    stepContainer.addEventListener('dragover', handleDragOver);
    stepContainer.addEventListener('drop', handleDrop);
    stepContainer.classList.add('mh-50px');
    stepContainer.classList.add('border');
    stepContainer.classList.add("pipelineFunctions");
    //Put it all together
    newPipelineContainer.appendChild(removeButton);
    pipelineNameContainer.appendChild(pipelineNameLabel);
    pipelineNameContainer.appendChild(pipelineNameInput);
    newPipelineContainer.appendChild(pipelineNameContainer);
    stepContainerContainer.appendChild(stepContainerLabel);
    stepContainerContainer.appendChild(stepContainer);
    newPipelineContainer.appendChild(stepContainerContainer);
    pipelinesContainer.appendChild(newPipelineContainer);
}

export {
    addPool,
    addStorage,
    addVariable,
    addPipeline,
    addStorageOutput,
    addVariableOutput
}