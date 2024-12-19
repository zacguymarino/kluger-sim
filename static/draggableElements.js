const constructInequalityObject = function(element, functionTitle) {
    let inputOneTarget;
    let inputTwoTarget;
    let inputOneInput;
    let inputOneVariable;
    let inputOneStorage;
    let inputOneStorageIndex;
    let inputTwoInput;
    let inputTwoVariable;
    let inputTwoStorage;
    let inputTwoStorageIndex;
    let truePipeline;
    let falsePipeline;
    let object;
    inputOneTarget = element.querySelector(".inputOne").value;
    inputTwoTarget = element.querySelector(".inputTwo").value;
    truePipeline = element.querySelector(".truePipelineElement").value;
    falsePipeline = element.querySelector(".falsePipelineElement").value;
    switch (inputOneTarget) {
        case "input":
            inputOneInput = element.querySelector(".inputOneContainer").querySelector(".inputInput").value;
            inputOneVariable = "";
            inputOneStorage = "";
            inputOneStorageIndex = "";
            break;
        case "staged":
            inputOneInput = "";
            inputOneVariable = "";
            inputOneStorage = "";
            inputOneStorageIndex = "";
            break;
        case "variable":
            inputOneInput = "";
            inputOneVariable = element.querySelector(".inputOneContainer").querySelector(".variableInput").value;
            inputOneStorage = "";
            inputOneStorageIndex = "";
            break;
        case "storage":
            inputOneInput = "";
            inputOneVariable = "";
            inputOneStorage = element.querySelector(".inputOneContainer").querySelector(".storageInput").value;
            inputOneStorageIndex = element.querySelector(".inputOneContainer").querySelector(".storageIndexInput").value;
            break;
        default:
            break;
    }
    switch (inputTwoTarget) {
        case "input":
            inputTwoInput = element.querySelector(".inputTwoContainer").querySelector(".inputInput").value;
            inputTwoVariable = "";
            inputTwoStorage = "";
            inputTwoStorageIndex = "";
            break;
        case "staged":
            inputTwoInput = "";
            inputTwoVariable = "";
            inputTwoStorage = "";
            inputTwoStorageIndex = "";
            break;
        case "variable":
            inputTwoInput = "";
            inputTwoVariable = element.querySelector(".inputTwoContainer").querySelector(".variableInput").value;
            inputTwoStorage = "";
            inputTwoStorageIndex = "";
            break;
        case "storage":
            inputTwoInput = "";
            inputTwoVariable = "";
            inputTwoStorage = element.querySelector(".inputTwoContainer").querySelector(".storageInput").value;
            inputTwoStorageIndex = element.querySelector(".inputTwoContainer").querySelector(".storageIndexInput").value;
            break;
        default:
            break;
    }
    object = {
        type: functionTitle,
        inputOneTarget: inputOneTarget,
        inputTwoTarget: inputTwoTarget,
        inputOneInput: inputOneInput,
        inputOneVariable: inputOneVariable,
        inputOneStorage: inputOneStorage,
        inputOneStorageIndex: inputOneStorageIndex,
        inputTwoInput: inputTwoInput,
        inputTwoVariable: inputTwoVariable,
        inputTwoStorage: inputTwoStorage,
        inputTwoStorageIndex: inputTwoStorageIndex,
        true: truePipeline,
        false: falsePipeline
    }
    return object;
}

const constructSingleAssignmentObject = function(element, functionTitle) {
    let inputOneValue;
    let inputTwoTarget;
    let inputTwoInput;
    let inputTwoVariable;
    let inputTwoStorage;
    let inputTwoStorageIndex;
    let object;
    inputOneValue = element.querySelector(".inputOne").value;
    inputTwoTarget = element.querySelector(".inputTwo").value;
    switch (inputTwoTarget) {
        case "input":
            inputTwoInput = element.querySelector(".inputTwoContainer").querySelector(".inputInput").value;
            inputTwoVariable = "";
            inputTwoStorage = "";
            inputTwoStorageIndex = "";
            break;
        case "staged":
            inputTwoInput = "";
            inputTwoVariable = "";
            inputTwoStorage = "";
            inputTwoStorageIndex = "";
            break;
        case "variable":
            inputTwoInput = "";
            inputTwoVariable = element.querySelector(".inputTwoContainer").querySelector(".variableInput").value;
            inputTwoStorage = "";
            inputTwoStorageIndex = "";
            break;
        case "storage":
            inputTwoInput = "";
            inputTwoVariable = "";
            inputTwoStorage = element.querySelector(".inputTwoContainer").querySelector(".storageInput").value;
            inputTwoStorageIndex = element.querySelector(".inputTwoContainer").querySelector(".storageIndexInput").value;
            break;
        default:
            break;
    }
    object = {
        type: functionTitle,
        inputOneValue: inputOneValue,
        inputTwoTarget: inputTwoTarget,
        inputTwoInput: inputTwoInput,
        inputTwoVariable: inputTwoVariable,
        inputTwoStorage: inputTwoStorage,
        inputTwoStorageIndex: inputTwoStorageIndex
    }
    return object;
}

const constructExpRootObject = function(element, functionTitle) {
    let inputOneTarget;
    let targetTarget;
    let inputOneInput;
    let inputOneVariable;
    let inputOneStorage;
    let inputOneStorageIndex;
    let targetVariable;
    let targetStorage;
    let targetStorageIndex;
    let expRoot;
    let object;
    inputOneTarget = element.querySelector(".inputOne").value;
    targetTarget = element.querySelector(".target").value;
    expRoot = element.querySelector(".inputTwoContainer").querySelector(".inputInput").value;
    switch (inputOneTarget) {
        case "input":
            inputOneInput = element.querySelector(".inputOneContainer").querySelector(".inputInput").value;
            inputOneVariable = "";
            inputOneStorage = "";
            inputOneStorageIndex = "";
            break;
        case "staged":
            inputOneInput = "";
            inputOneVariable = "";
            inputOneStorage = "";
            inputOneStorageIndex = "";
            break;
        case "variable":
            inputOneInput = "";
            inputOneVariable = element.querySelector(".inputOneContainer").querySelector(".variableInput").value;
            inputOneStorage = "";
            inputOneStorageIndex = "";
            break;
        case "storage":
            inputOneInput = "";
            inputOneVariable = "";
            inputOneStorage = element.querySelector(".inputOneContainer").querySelector(".storageInput").value;
            inputOneStorageIndex = element.querySelector(".inputOneContainer").querySelector(".storageIndexInput").value;
            break;
        default:
            break;
    }
    switch (targetTarget) {
        case "staged":
            targetVariable = "";
            targetStorage = "";
            targetStorageIndex = "";
            break;
        case "variable":
            targetVariable = element.querySelector(".targetContainer").querySelector(".targetVariable").value;
            targetStorage = "";
            targetStorageIndex = "";
            break;
        case "storage":
            targetVariable = "";
            targetStorage = element.querySelector(".targetContainer").querySelector(".targetStorage").value;
            targetStorageIndex = element.querySelector(".targetContainer").querySelector(".targetStorageIndex").value;
            break;
        default:
            break;
    }
    object = {
        type: functionTitle,
        inputOneTarget: inputOneTarget,
        targetTarget: targetTarget,
        inputOneInput: inputOneInput,
        inputOneVariable: inputOneVariable,
        inputOneStorage: inputOneStorage,
        inputOneStorageIndex: inputOneStorageIndex,
        targetVariable: targetVariable,
        targetStorage: targetStorage,
        targetStorageIndex: targetStorageIndex,
        expRoot: expRoot
    };
    return object;
}

const constructArithmeticObject = function(element, functionTitle) {
    let inputOneTarget;
    let inputTwoTarget;
    let targetTarget;
    let inputOneInput;
    let inputOneVariable;
    let inputOneStorage;
    let inputOneStorageIndex;
    let inputTwoInput;
    let inputTwoVariable;
    let inputTwoStorage;
    let inputTwoStorageIndex;
    let targetVariable;
    let targetStorage;
    let targetStorageIndex;
    let object;
    inputOneTarget = element.querySelector(".inputOne").value;
    inputTwoTarget = element.querySelector(".inputTwo").value;
    targetTarget = element.querySelector(".target").value;
    switch (inputOneTarget) {
        case "input":
            inputOneInput = element.querySelector(".inputOneContainer").querySelector(".inputInput").value;
            inputOneVariable = "";
            inputOneStorage = "";
            inputOneStorageIndex = "";
            break;
        case "staged":
            inputOneInput = "";
            inputOneVariable = "";
            inputOneStorage = "";
            inputOneStorageIndex = "";
            break;
        case "variable":
            inputOneInput = "";
            inputOneVariable = element.querySelector(".inputOneContainer").querySelector(".variableInput").value;
            inputOneStorage = "";
            inputOneStorageIndex = "";
            break;
        case "storage":
            inputOneInput = "";
            inputOneVariable = "";
            inputOneStorage = element.querySelector(".inputOneContainer").querySelector(".storageInput").value;
            inputOneStorageIndex = element.querySelector(".inputOneContainer").querySelector(".storageIndexInput").value;
            break;
        default:
            break;
    }
    switch (inputTwoTarget) {
        case "input":
            inputTwoInput = element.querySelector(".inputTwoContainer").querySelector(".inputInput").value;
            inputTwoVariable = "";
            inputTwoStorage = "";
            inputTwoStorageIndex = "";
            break;
        case "staged":
            inputTwoInput = "";
            inputTwoVariable = "";
            inputTwoStorage = "";
            inputTwoStorageIndex = "";
            break;
        case "variable":
            inputTwoInput = "";
            inputTwoVariable = element.querySelector(".inputTwoContainer").querySelector(".variableInput").value;
            inputTwoStorage = "";
            inputTwoStorageIndex = "";
            break;
        case "storage":
            inputTwoInput = "";
            inputTwoVariable = "";
            inputTwoStorage = element.querySelector(".inputTwoContainer").querySelector(".storageInput").value;
            inputTwoStorageIndex = element.querySelector(".inputTwoContainer").querySelector(".storageIndexInput").value;
            break;
        default:
            break;
    }
    switch (targetTarget) {
        case "staged":
            targetVariable = "";
            targetStorage = "";
            targetStorageIndex = "";
            break;
        case "variable":
            targetVariable = element.querySelector(".targetContainer").querySelector(".targetVariable").value;
            targetStorage = "";
            targetStorageIndex = "";
            break;
        case "storage":
            targetVariable = "";
            targetStorage = element.querySelector(".targetContainer").querySelector(".targetStorage").value;
            targetStorageIndex = element.querySelector(".targetContainer").querySelector(".targetStorageIndex").value;
            break;
        default:
            break;
    }
    object = {
        type: functionTitle,
        inputOneTarget: inputOneTarget,
        inputTwoTarget: inputTwoTarget,
        targetTarget: targetTarget,
        inputOneInput: inputOneInput,
        inputOneVariable: inputOneVariable,
        inputOneStorage: inputOneStorage,
        inputOneStorageIndex: inputOneStorageIndex,
        inputTwoInput: inputTwoInput,
        inputTwoVariable: inputTwoVariable,
        inputTwoStorage: inputTwoStorage,
        inputTwoStorageIndex: inputTwoStorageIndex,
        targetVariable: targetVariable,
        targetStorage: targetStorage,
        targetStorageIndex: targetStorageIndex
    };
    return object;
}

const constructDraggableObjects = function(element) {
    if (!element) {
        return {};
    }
    let functionType = element.dataset.type;
    let object;
    let poolValue;
    let pipelineValue;
    let valueValue;
    let replaceValue;
    let elementValue;
    let storageValue;
    let trueValue;
    let falseValue;
    let minValue;
    let maxValue;
    let runsValue;
    switch(functionType) {
        case "IfGT":
            object = constructInequalityObject(element, "IfGT");
            break;
        case "AV":
            object = constructSingleAssignmentObject(element, "AV");
            break;
        case "ROOT":
            object = constructExpRootObject(element, "ROOT");
            break;
        case "EXP":
            object = constructExpRootObject(element, "EXP");
            break;
        case "DIV":
            object = constructArithmeticObject(element, "DIV");
            break;
        case "MUL":
            object = constructArithmeticObject(element, "MUL");
            break;
        case "SUB":
            object = constructArithmeticObject(element, "SUB");
            break;
        case "ADD":
            object = constructArithmeticObject(element, "ADD");
            break;
        case "RPL":
            pipelineValue = element.querySelector(".pipelineToRun").value;
            runsValue = element.querySelector(".pipelineRuns").value;
            object = {
                type: "RPL",
                pipeline: pipelineValue,
                runs: runsValue
            };
            break;
        case "RDB":
            minValue = element.querySelector(".randomMin").value;
            maxValue = element.querySelector(".randomMax").value;
            object = {
                type: "RDB",
                min: minValue,
                max: maxValue
            };
            break;
        case "RPE":
            poolValue = element.querySelector(".poolElement").value;
            replaceValue = element.querySelector(".replaceElement").checked ? "true" : "false";
            object = {
                type: "RPE",
                pool: poolValue,
                replace: replaceValue
            };
            break;
        case "SPE":
            poolValue = element.querySelector(".poolElement").value;
            elementValue = element.querySelector(".elementElement").value;
            replaceValue = element.querySelector(".replaceElement").checked ? "true" : "false";
            object = {
                type: "SPE",
                pool: poolValue,
                element: elementValue,
                replace: replaceValue
            };
            break;
        case "RP":
            poolValue = element.querySelector(".poolElement").value;
            object = {
                type: "RP",
                pool: poolValue
            };
            break;
        case "AS":
            storageValue = element.querySelector(".storageElement").value;
            object = {
                type: "AS",
                storage: storageValue
            };
            break;
        case "GFE":
            storageValue = element.querySelector(".storageElement").value;
            object = {
                type: "GFE",
                storage: storageValue
            };
            break;
        case "GLE":
            storageValue = element.querySelector(".storageElement").value;
            object = {
                type: "GLE",
                storage: storageValue
            };
            break;
        case "GNE":
            storageValue = element.querySelector(".storageElement").value;
            elementValue = element.querySelector(".elementElement").value;
            object = {
                type: "GNE",
                storage: storageValue,
                element: elementValue
            };
            break;
        case "IfSV":
            valueValue = element.querySelector(".valueElement").value;
            trueValue = element.querySelector(".truePipelineElement").value;
            falseValue = element.querySelector(".falsePipelineElement").value;
            object = {
                type: "IfSV",
                value: valueValue,
                true: trueValue,
                false: falseValue
            };
            break;
        case "MPR":
            runsValue = element.querySelector(".runsElement").value;
            object = {
                type: "MPR",
                runs: runsValue
            };
            break;
        default:
            object = {};
            break;
    }
    return object;
};

const updateMathTargetSelection = function(choice, parent) {
    let targetElement = document.createElement("div");
    let label1;
    let label2;
    let input1;
    let input2;
    parent.innerHTML = "";
    switch (choice) {
        case "staged":
            label1 = document.createElement("label");
            label1.textContent = "Target: Staged";
            targetElement.appendChild(label1);
            break;
        case "variable":
            label1 = document.createElement("label");
            label1.textContent = "Var: ";
            input1 = document.createElement("input");
            input1.setAttribute("type", "text");
            input1.classList.add("w-100px");
            input1.classList.add("targetVariable");
            targetElement.appendChild(label1);
            targetElement.appendChild(input1);
            break;
        case "storage":
            label1 = document.createElement("label");
            label1.textContent = "Strg: ";
            input1 = document.createElement("input");
            input1.setAttribute("type", "text");
            input1.classList.add("w-100px");
            input1.classList.add("targetStorage");
            label2 = document.createElement("label");
            label2.textContent = "Index: ";
            input2 = document.createElement("input");
            input2.setAttribute("type", "number");
            input2.setAttribute("min", "0");
            input2.value = "0";
            input2.classList.add("w-50px");
            input2.classList.add("targetStorageIndex");
            targetElement.appendChild(label1);
            targetElement.appendChild(input1);
            targetElement.appendChild(label2);
            targetElement.appendChild(input2);
            break;
        default:
            break;
    }
    parent.appendChild(targetElement);
}

const updateMathInputSelection = function(choice, parent) {
    let inputElement = document.createElement("div");
    let label1;
    let label2;
    let input1;
    let input2;
    parent.innerHTML = "";
    switch (choice) {
        case "input":
            label1 = document.createElement("label");
            label1.textContent = "Input: ";
            input1 = document.createElement("input");
            input1.setAttribute("type", "text");
            input1.classList.add("w-50px");
            input1.classList.add("inputInput");
            inputElement.appendChild(label1);
            inputElement.appendChild(input1);
            break;
        case "staged":
            label1 = document.createElement("label");
            label1.textContent ="Input: Staged";
            inputElement.appendChild(label1);
            break;
        case "variable":
            label1 = document.createElement("label");
            label1.textContent = "Var: ";
            input1 = document.createElement("input")
            input1.setAttribute("type", "text");
            input1.classList.add("w-100px");
            input1.classList.add("variableInput");
            inputElement.appendChild(label1);
            inputElement.appendChild(input1);
            break;
        case "storage":
            label1 = document.createElement("label");
            label1.textContent = "Strg: ";
            input1 = document.createElement("input");
            input1.setAttribute("type", "text");
            input1.classList.add("w-100px");
            input1.classList.add("storageInput");
            label2 = document.createElement("label");
            label2.textContent = "Index: ";
            input2 = document.createElement("input");
            input2.setAttribute("type", "number");
            input2.setAttribute("min", "0");
            input2.value = "0";
            input2.classList.add("w-50px");
            input2.classList.add("storageIndexInput");
            inputElement.appendChild(label1);
            inputElement.appendChild(input1);
            inputElement.appendChild(label2);
            inputElement.appendChild(input2);
            break;
        default:
            break;
    }
    parent.appendChild(inputElement);
}

const createMathSelect = function(className) {
    let select = document.createElement("select");
    select.classList.add(className);
    let option1 = document.createElement("option");
    let option2 = document.createElement("option");
    let option3 = document.createElement("option");
    let option4 = document.createElement("option");
    option1.value = "input";
    option1.text = "Input";
    option2.value = "staged";
    option2.text = "Staged";
    option3.value = "variable";
    option3.text = "Variable";
    option4.value = "storage";
    option4.text = "Storage";
    select.appendChild(option1);
    select.appendChild(option2);
    select.appendChild(option3);
    select.appendChild(option4);
    return select;
}

const createTargetSelect = function() {
    let select = document.createElement("select");
    select.classList.add("target");
    let option1 = document.createElement("option");
    let option2 = document.createElement("option");
    let option3 = document.createElement("option");
    option1.value = "staged";
    option1.text = "Staged";
    option2.value = "variable";
    option2.text = "Variable";
    option3.value = "storage";
    option3.text = "Storage";
    select.appendChild(option1);
    select.appendChild(option2);
    select.appendChild(option3);
    return select;
}

const createSingleAssignmentFunction = function(functionTitle) {
    let functionChoiceContainer;
    let functionChoiceTitle;
    let inputOneLabel;
    let inputTwoLabel;
    let inputOne;
    let inputTwo;
    let container1;
    let container2;
    //Function choice container
    functionChoiceContainer = document.createElement("div");
    functionChoiceContainer.setAttribute("data-type", functionTitle);
    //Function choice title
    functionChoiceTitle = document.createElement("span");
    functionChoiceTitle.textContent = `${functionTitle}: `;
    functionChoiceTitle.classList.add("font-bold");
    //Input one label
    inputOneLabel = document.createElement("label");
    switch (functionTitle) {
        case "AV":
            inputOneLabel.textContent = "Variable: ";
            break;
        default:
            break;
    }
    //Input one input
    inputOne = document.createElement("input");
    inputOne.setAttribute("type", "text");
    inputOne.classList.add("inputOne");
    //Assignment label
    inputTwoLabel = document.createElement("label");
    inputTwoLabel.textContent = "Assign from: ";
    //Assignment input
    inputTwo = createMathSelect("inputTwo");
    inputTwo.addEventListener("change", (event) => {
        let targetContainer = functionChoiceContainer.getElementsByClassName("inputTwoContainer")[0];
        updateMathInputSelection(event.target.value, targetContainer);
    })
    //Selections container
    container1 = document.createElement("div");
    container1.classList.add("border");
    container1.classList.add("flex");
    container1.classList.add("justify-around");
    //Input two container
    container2 = document.createElement("div");
    container2.classList.add("inputTwoContainer");
    //Put it all together and assign to chosenFunction
    functionChoiceContainer.appendChild(functionChoiceTitle);
    functionChoiceContainer.appendChild(inputOneLabel);
    functionChoiceContainer.appendChild(inputOne);
    functionChoiceContainer.appendChild(inputTwoLabel);
    functionChoiceContainer.appendChild(inputTwo);
    container1.appendChild(container2);
    functionChoiceContainer.appendChild(container1);
    updateMathInputSelection("input", container2);
    return functionChoiceContainer;
}

const createExpRootFunction = function(functionTitle) {
    let functionChoiceContainer;
    let functionChoiceTitle;
    let inputOneLabel;
    let inputOne;
    let targetLabel;
    let targetInput;
    let container1;
    let container2;
    let container3;
    let container4;
    let expRootLabel;
    let expRootInput;
    //Function choice container
    functionChoiceContainer = document.createElement("div");
    functionChoiceContainer.setAttribute("data-type", functionTitle);
    //Function choice title
    functionChoiceTitle = document.createElement("span");
    functionChoiceTitle.textContent = `${functionTitle}: `;
    functionChoiceTitle.classList.add("font-bold");
    //Input one label
    inputOneLabel = document.createElement("label");
    inputOneLabel.textContent = "Input 1: ";
    //Input one select
    inputOne = createMathSelect("inputOne");
    inputOne.addEventListener("change", (event) => {
        let targetContainer = functionChoiceContainer.getElementsByClassName("inputOneContainer")[0];
        updateMathInputSelection(event.target.value, targetContainer);
    })
    //Target label
    targetLabel = document.createElement("label");
    targetLabel.textContent = "Target: ";
    //Target input
    targetInput = createTargetSelect();
    targetInput.addEventListener("change", (event) => {
        let targetContainer = functionChoiceContainer.getElementsByClassName("targetContainer")[0];
        updateMathTargetSelection(event.target.value, targetContainer);
    })
    //Selections container
    container1 = document.createElement("div");
    container1.classList.add("border");
    container1.classList.add("flex");
    container1.classList.add("justify-around");
    //Input1 container
    container2 = document.createElement("div");
    container2.classList.add("inputOneContainer");
    //Input2 container
    expRootLabel = document.createElement("label");
    switch (functionTitle) {
        case "EXP":
            expRootLabel.textContent = "Exponent: ";
            break;
        case "ROOT":
            expRootLabel.textContent = "Root: ";
            break;
        default:
            break;
    }
    expRootInput = document.createElement("input");
    expRootInput.setAttribute("type", "text");
    expRootInput.classList.add("w-50px");
    expRootInput.classList.add("inputInput");
    expRootInput.value = "2";
    container3 = document.createElement("div");
    container3.classList.add("inputTwoContainer");
    container3.appendChild(expRootLabel);
    container3.appendChild(expRootInput);
    //Target container
    container4 = document.createElement("div");
    container4.classList.add("targetContainer");
    //Put it all together and assign to chosenFunction
    functionChoiceContainer.appendChild(functionChoiceTitle);
    functionChoiceContainer.appendChild(inputOneLabel);
    functionChoiceContainer.appendChild(inputOne);
    functionChoiceContainer.appendChild(targetLabel);
    functionChoiceContainer.appendChild(targetInput);
    container1.appendChild(container2);
    container1.appendChild(container3);
    container1.appendChild(container4);
    functionChoiceContainer.appendChild(container1);
    updateMathInputSelection("input", container2);
    updateMathTargetSelection("staged", container4);
    return functionChoiceContainer;
}

const createInequalityFunction = function(functionTitle) {
    let functionChoiceContainer;
    let functionChoiceTitle;
    let inputOneLabel;
    let inputOne;
    let inputTwoLabel;
    let inputTwo;
    let container1;
    let container2;
    let container3;
    let container4;
    let truePipelineLabel;
    let truePipelineInput;
    let falsePipelineLabel;
    let falsePipelineInput;
    //Function choice container
    functionChoiceContainer = document.createElement("div");
    functionChoiceContainer.setAttribute("data-type", functionTitle);
    //Function choice title
    functionChoiceTitle = document.createElement("span");
    functionChoiceTitle.textContent = `${functionTitle}: `;
    functionChoiceTitle.classList.add("font-bold");
    //Input one label
    inputOneLabel = document.createElement("label");
    inputOneLabel.textContent = "Input 1: ";
    //Input one select
    inputOne = createMathSelect("inputOne");
    inputOne.addEventListener("change", (event) => {
        let targetContainer = functionChoiceContainer.getElementsByClassName("inputOneContainer")[0];
        updateMathInputSelection(event.target.value, targetContainer);
    })
    //Input two label
    inputTwoLabel = document.createElement("label");
    inputTwoLabel.textContent = "Input 2: ";
    //Input two select
    inputTwo = createMathSelect("inputTwo");
    inputTwo.addEventListener("change", (event) => {
        let targetContainer = functionChoiceContainer.getElementsByClassName("inputTwoContainer")[0];
        updateMathInputSelection(event.target.value, targetContainer);
    })
    //Selections container
    container1 = document.createElement("div");
    container1.classList.add("border");
    container1.classList.add("flex");
    container1.classList.add("justify-around");
    //Input1 container
    container2 = document.createElement("div");
    container2.classList.add("inputOneContainer");
    //Input2 container
    container3 = document.createElement("div");
    container3.classList.add("inputTwoContainer");
    //Pipelines container
    container4 = document.createElement("div");
    container4.classList.add("pipelinesContainer");
    //True pipeline label
    truePipelineLabel = document.createElement("label");
    truePipelineLabel.textContent = "True: ";
    //True pipeline input
    truePipelineInput = document.createElement("input");
    truePipelineInput.setAttribute("type", "text");
    truePipelineInput.classList.add("truePipelineElement");
    truePipelineInput.classList.add("w-100px");
    //False pipeline label
    falsePipelineLabel = document.createElement("label");
    falsePipelineLabel.textContent = "False: ";
    //False pipeline input
    falsePipelineInput = document.createElement("input");
    falsePipelineInput.setAttribute("type", "text");
    falsePipelineInput.classList.add("falsePipelineElement");
    falsePipelineInput.classList.add("w-100px");
    //Put it all together and assign to chosenFunction
    functionChoiceContainer.appendChild(functionChoiceTitle);
    functionChoiceContainer.appendChild(inputOneLabel);
    functionChoiceContainer.appendChild(inputOne);
    functionChoiceContainer.appendChild(inputTwoLabel);
    functionChoiceContainer.appendChild(inputTwo);
    container4.appendChild(truePipelineLabel);
    container4.appendChild(truePipelineInput);
    container4.appendChild(falsePipelineLabel);
    container4.appendChild(falsePipelineInput);
    container1.appendChild(container2);
    container1.appendChild(container3);
    container1.appendChild(container4);
    functionChoiceContainer.appendChild(container1);
    updateMathInputSelection("input", container2);
    updateMathInputSelection("input", container3);
    return functionChoiceContainer;
}

const createArithmeticFunction = function(functionTitle) {
    let functionChoiceContainer;
    let functionChoiceTitle;
    let inputOneLabel;
    let inputOne;
    let inputTwoLabel;
    let inputTwo;
    let targetLabel;
    let targetInput;
    let container1;
    let container2;
    let container3;
    let container4;
    //Function choice container
    functionChoiceContainer = document.createElement("div");
    functionChoiceContainer.setAttribute("data-type", functionTitle);
    //Function choice title
    functionChoiceTitle = document.createElement("span");
    functionChoiceTitle.textContent = `${functionTitle}: `;
    functionChoiceTitle.classList.add("font-bold");
    //Input one label
    inputOneLabel = document.createElement("label");
    inputOneLabel.textContent = "Input 1: ";
    //Input one select
    inputOne = createMathSelect("inputOne");
    inputOne.addEventListener("change", (event) => {
        let targetContainer = functionChoiceContainer.getElementsByClassName("inputOneContainer")[0];
        updateMathInputSelection(event.target.value, targetContainer);
    })
    //Input two label
    inputTwoLabel = document.createElement("label");
    inputTwoLabel.textContent = "Input 2: ";
    //Input two select
    inputTwo = createMathSelect("inputTwo");
    inputTwo.addEventListener("change", (event) => {
        let targetContainer = functionChoiceContainer.getElementsByClassName("inputTwoContainer")[0];
        updateMathInputSelection(event.target.value, targetContainer);
    })
    //Target label
    targetLabel = document.createElement("label");
    targetLabel.textContent = "Target: ";
    //Target input
    targetInput = createTargetSelect();
    targetInput.addEventListener("change", (event) => {
        let targetContainer = functionChoiceContainer.getElementsByClassName("targetContainer")[0];
        updateMathTargetSelection(event.target.value, targetContainer);
    })
    //Selections container
    container1 = document.createElement("div");
    container1.classList.add("border");
    container1.classList.add("flex");
    container1.classList.add("justify-around");
    //Input1 container
    container2 = document.createElement("div");
    container2.classList.add("inputOneContainer");
    //Input2 container
    container3 = document.createElement("div");
    container3.classList.add("inputTwoContainer");
    //Target container
    container4 = document.createElement("div");
    container4.classList.add("targetContainer");
    //Put it together and assign to chosenFunction
    functionChoiceContainer.appendChild(functionChoiceTitle);
    functionChoiceContainer.appendChild(inputOneLabel);
    functionChoiceContainer.appendChild(inputOne);
    functionChoiceContainer.appendChild(inputTwoLabel);
    functionChoiceContainer.appendChild(inputTwo);
    functionChoiceContainer.appendChild(targetLabel);
    functionChoiceContainer.appendChild(targetInput);
    container1.appendChild(container2);
    container1.appendChild(container3);
    container1.appendChild(container4);
    functionChoiceContainer.appendChild(container1);
    updateMathInputSelection("input", container2);
    updateMathInputSelection("input", container3);
    updateMathTargetSelection("staged", container4);
    return functionChoiceContainer;
}

const createDraggableElements = function(droppedItemData) {
    //Handle each type of function
    let chosenFunction = document.createElement("div"); //default node - should change in switch statement
    let functionChoiceContainer;
    let functionChoiceTitle;
    let poolChoiceLabel;
    let poolChoiceInput;
    let elementChoiceLabel;
    let elementChoiceInput;
    let storageChoiceLabel;
    let storageChoiceInput;
    let replaceLabel;
    let replaceCheckbox;
    let valueLabel;
    let valueInput;
    let pipelineLabel;
    let pipelineInput;
    let truePipelineLabel;
    let truePipelineInput;
    let falsePipelineLabel;
    let falsePipelineInput;
    let minLabel;
    let maxLabel;
    let minInput;
    let maxInput;
    
    let runAmountLabel;
    let runAmountInput;
    switch(droppedItemData) {
        case "PF_ifGreaterThan":
            chosenFunction = createInequalityFunction("IfGT");
            break;
        case "PF_assignVariable":
            chosenFunction = createSingleAssignmentFunction("AV");
            break;
        case "PF_Root":
            chosenFunction = createExpRootFunction("ROOT");
            break;
        case "PF_Exponentiate":
            chosenFunction = createExpRootFunction("EXP");
            break;
        case "PF_Divide":
            chosenFunction = createArithmeticFunction("DIV");
            break;
        case "PF_Multiply":
            chosenFunction = createArithmeticFunction("MUL");
            break;
        case "PF_Subtract":
            chosenFunction = createArithmeticFunction("SUB");
            break;
        case "PF_Add":
            chosenFunction = createArithmeticFunction("ADD");
            break;
        case "PF_runPipeline":
            //Function choice container
            functionChoiceContainer = document.createElement("div");
            functionChoiceContainer.setAttribute("data-type", "RPL");
            //Function choice title
            functionChoiceTitle = document.createElement("span");
            functionChoiceTitle.textContent = "RPL: ";
            functionChoiceTitle.classList.add("font-bold");
            //Pipeline name label
            pipelineLabel = document.createElement("label");
            pipelineLabel.textContent = "Pipeline: ";
            //Pipeline name input
            pipelineInput = document.createElement("input");
            pipelineInput.setAttribute("type", "text");
            pipelineInput.classList.add("pipelineToRun");
            //Pipeline runs label
            valueLabel = document.createElement("label");
            valueLabel.textContent = "Runs: ";
            //Pipeline runs input
            valueInput = document.createElement("input");
            valueInput.setAttribute("type", "text");
            valueInput.value = "1";
            valueInput.classList.add("pipelineRuns");
            valueInput.classList.add("w-50px");
            //Put it together and assign to chosenFunction
            functionChoiceContainer.appendChild(functionChoiceTitle);
            functionChoiceContainer.appendChild(pipelineLabel);
            functionChoiceContainer.appendChild(pipelineInput);
            functionChoiceContainer.appendChild(valueLabel);
            functionChoiceContainer.appendChild(valueInput);
            chosenFunction = functionChoiceContainer;
            break;
        case "PF_randomDecimalBetween":
            //Function choice container
            functionChoiceContainer = document.createElement("div");
            functionChoiceContainer.setAttribute("data-type", "RDB");
            //Function choice title
            functionChoiceTitle = document.createElement("span");
            functionChoiceTitle.textContent = "RDB: ";
            functionChoiceTitle.classList.add("font-bold");
            //Min label
            minLabel = document.createElement("label");
            minLabel.textContent = "Min: ";
            //Min input
            minInput = document.createElement("input");
            minInput.setAttribute("type", "text");
            minInput.classList.add("w-100px");
            minInput.classList.add("randomMin");
            //Max label
            maxLabel = document.createElement("label");
            maxLabel.textContent = "Max: ";
            //Max Input
            maxInput = document.createElement("input");
            maxInput.setAttribute("type", "text");
            maxInput.classList.add("w-100px");
            maxInput.classList.add("randomMax");
            //Put it together and assign to chosenFunction
            functionChoiceContainer.appendChild(functionChoiceTitle);
            functionChoiceContainer.appendChild(minLabel);
            functionChoiceContainer.appendChild(minInput);
            functionChoiceContainer.appendChild(maxLabel);
            functionChoiceContainer.appendChild(maxInput);
            chosenFunction = functionChoiceContainer;
            break;
        case "PF_randomPoolElement":
            //Function choice container
            functionChoiceContainer = document.createElement("div");
            functionChoiceContainer.setAttribute("data-type", "RPE");
            //Function choice title
            functionChoiceTitle = document.createElement("span");
            functionChoiceTitle.textContent = "RPE: ";
            functionChoiceTitle.classList.add("font-bold");
            //Pool choice label
            poolChoiceLabel = document.createElement("label");
            poolChoiceLabel.textContent = "Pool: ";
            //Pool choice input
            poolChoiceInput = document.createElement("input");
            poolChoiceInput.setAttribute("type", "text");
            poolChoiceInput.classList.add("poolElement");
            poolChoiceInput.classList.add("w-100px");
            //Replace label
            replaceLabel = document.createElement("label");
            replaceLabel.textContent = "Replace: ";
            //Replace checkbox
            replaceCheckbox = document.createElement("input");
            replaceCheckbox.setAttribute("type", "checkbox");
            replaceCheckbox.classList.add("replaceElement");
            //Put it together and assign to chosenFunction
            functionChoiceContainer.appendChild(functionChoiceTitle);
            functionChoiceContainer.appendChild(poolChoiceLabel);
            functionChoiceContainer.appendChild(poolChoiceInput);
            functionChoiceContainer.appendChild(replaceLabel);
            functionChoiceContainer.appendChild(replaceCheckbox);
            chosenFunction = functionChoiceContainer;
            break;
        case "PF_specificPoolElement":
            //Function choice container
            functionChoiceContainer = document.createElement("div");
            functionChoiceContainer.setAttribute("data-type", "SPE");
            //Function choice title
            functionChoiceTitle = document.createElement("span");
            functionChoiceTitle.textContent = "SPE: ";
            functionChoiceTitle.classList.add("font-bold");
            //Pool choice label
            poolChoiceLabel = document.createElement("label");
            poolChoiceLabel.textContent = "Pool: ";
            //Pool choice input
            poolChoiceInput = document.createElement("input");
            poolChoiceInput.setAttribute("type", "text");
            poolChoiceInput.classList.add("poolElement");
            poolChoiceInput.classList.add("w-100px");
            //Element choice label
            elementChoiceLabel = document.createElement("label");
            elementChoiceLabel.textContent = "Element: ";
            //Element choice input
            elementChoiceInput = document.createElement("input");
            elementChoiceInput.setAttribute("type", "text");
            elementChoiceInput.classList.add("elementElement");
            elementChoiceInput.classList.add("w-50px");
            //Replace label
            replaceLabel = document.createElement("label");
            replaceLabel.textContent = "Replace: ";
            //Replace checkbox
            replaceCheckbox = document.createElement("input");
            replaceCheckbox.setAttribute("type", "checkbox");
            replaceCheckbox.classList.add("replaceElement");
            //Put it all together and assign to chosenFunction
            functionChoiceContainer.appendChild(functionChoiceTitle);
            functionChoiceContainer.appendChild(poolChoiceLabel);
            functionChoiceContainer.appendChild(poolChoiceInput);
            functionChoiceContainer.appendChild(elementChoiceLabel);
            functionChoiceContainer.appendChild(elementChoiceInput);
            functionChoiceContainer.appendChild(replaceLabel);
            functionChoiceContainer.appendChild(replaceCheckbox);
            chosenFunction = functionChoiceContainer;
            break;
        case "PF_resetPool":
            //Function choice container
            functionChoiceContainer = document.createElement("div");
            functionChoiceContainer.setAttribute("data-type", "RP");
            //Function choice title
            functionChoiceTitle = document.createElement("span");
            functionChoiceTitle.textContent = "RP: ";
            functionChoiceTitle.classList.add("font-bold");
            //Pool choice label
            poolChoiceLabel = document.createElement("label");
            poolChoiceLabel.textContent = "Pool: ";
            //Pool choice input
            poolChoiceInput = document.createElement("input");
            poolChoiceInput.setAttribute("type", "text");
            poolChoiceInput.classList.add("poolElement");
            poolChoiceInput.classList.add("w-100px");
            //Put it all together and assign to chosenFunction
            functionChoiceContainer.appendChild(functionChoiceTitle);
            functionChoiceContainer.appendChild(poolChoiceLabel);
            functionChoiceContainer.appendChild(poolChoiceInput);
            chosenFunction = functionChoiceContainer;
            break;
        case "PF_appendToStorage":
            //Function choice container
            functionChoiceContainer = document.createElement("div");
            functionChoiceContainer.setAttribute("data-type", "AS");
            //Function choice title
            functionChoiceTitle = document.createElement("span");
            functionChoiceTitle.textContent = "AS: ";
            functionChoiceTitle.classList.add("font-bold");
            //Storage choice label
            storageChoiceLabel = document.createElement("label");
            storageChoiceLabel.textContent = "Storage: ";
            //Storage choice input
            storageChoiceInput = document.createElement("input");
            storageChoiceInput.setAttribute("type", "text");
            storageChoiceInput.classList.add("storageElement");
            storageChoiceInput.classList.add("w-100px");
            //Put it all together and assign to chosenFunction
            functionChoiceContainer.appendChild(functionChoiceTitle);
            functionChoiceContainer.appendChild(storageChoiceLabel);
            functionChoiceContainer.appendChild(storageChoiceInput);
            chosenFunction = functionChoiceContainer;
            break;
        case "PF_getFirstElement":
            //Function choice container
            functionChoiceContainer = document.createElement("div");
            functionChoiceContainer.setAttribute("data-type", "GFE");
            //Function choice title
            functionChoiceTitle = document.createElement("span");
            functionChoiceTitle.textContent = "GFE: ";
            functionChoiceTitle.classList.add("font-bold");
            //Storage choice label
            storageChoiceLabel = document.createElement("label");
            storageChoiceLabel.textContent = "Storage: ";
            //Storage choice input
            storageChoiceInput = document.createElement("input");
            storageChoiceInput.setAttribute("type", "text");
            storageChoiceInput.classList.add("storageElement");
            storageChoiceInput.classList.add("w-100px");
            //Put it all together and assign to chosenFunction
            functionChoiceContainer.appendChild(functionChoiceTitle);
            functionChoiceContainer.appendChild(storageChoiceLabel);
            functionChoiceContainer.appendChild(storageChoiceInput);
            chosenFunction = functionChoiceContainer;
            break;
        case "PF_getLastElement":
            //Function choice container
            functionChoiceContainer = document.createElement("div");
            functionChoiceContainer.setAttribute("data-type", "GLE");
            //Function choice title
            functionChoiceTitle = document.createElement("span");
            functionChoiceTitle.textContent = "GLE: ";
            functionChoiceTitle.classList.add("font-bold");
            //Storage choice label
            storageChoiceLabel = document.createElement("label");
            storageChoiceLabel.textContent = "Storage: ";
            //Storage choice input
            storageChoiceInput = document.createElement("input");
            storageChoiceInput.setAttribute("type", "text");
            storageChoiceInput.classList.add("storageElement");
            storageChoiceInput.classList.add("w-100px");
            //Put it all together and assign to chosenFunction
            functionChoiceContainer.appendChild(functionChoiceTitle);
            functionChoiceContainer.appendChild(storageChoiceLabel);
            functionChoiceContainer.appendChild(storageChoiceInput);
            chosenFunction = functionChoiceContainer;
            break;
        case "PF_getNthElement":
            //Function choice container
            functionChoiceContainer = document.createElement("div");
            functionChoiceContainer.setAttribute("data-type", "GNE");
            //Function choice title
            functionChoiceTitle = document.createElement("span");
            functionChoiceTitle.textContent = "GNE: ";
            functionChoiceTitle.classList.add("font-bold");
            //Storage choice label
            storageChoiceLabel = document.createElement("label");
            storageChoiceLabel.textContent = "Storage: ";
            //Storage choice input
            storageChoiceInput = document.createElement("input");
            storageChoiceInput.setAttribute("type", "text");
            storageChoiceInput.classList.add("storageElement");
            storageChoiceInput.classList.add("w-100px");
            //Element choice label
            elementChoiceLabel = document.createElement("label");
            elementChoiceLabel.textContent = "Element: ";
            //Element choice input
            elementChoiceInput = document.createElement("input");
            elementChoiceInput.setAttribute("type", "number");
            elementChoiceInput.classList.add("elementElement");
            elementChoiceInput.classList.add("w-50px");
            //Put it all together and assign to chosenFunction
            functionChoiceContainer.appendChild(functionChoiceTitle);
            functionChoiceContainer.appendChild(storageChoiceLabel);
            functionChoiceContainer.appendChild(storageChoiceInput);
            functionChoiceContainer.appendChild(elementChoiceLabel);
            functionChoiceContainer.appendChild(elementChoiceInput);
            chosenFunction = functionChoiceContainer;
            break;
        case "PF_ifStagedIsValue":
            //Function choice container
            functionChoiceContainer = document.createElement("div");
            functionChoiceContainer.setAttribute("data-type", "IfSV");
            //Function choice title
            functionChoiceTitle = document.createElement("span");
            functionChoiceTitle.textContent = "IfSV: ";
            functionChoiceTitle.classList.add("font-bold");
            //Value label
            valueLabel = document.createElement("label");
            valueLabel.textContent = "Value: ";
            //Value input
            valueInput = document.createElement("input");
            valueInput.setAttribute("type", "text");
            valueInput.classList.add("valueElement");
            valueInput.classList.add("w-50px");
            //True pipeline label
            truePipelineLabel = document.createElement("label");
            truePipelineLabel.textContent = "True: ";
            //True pipeline input
            truePipelineInput = document.createElement("input");
            truePipelineInput.setAttribute("type", "text");
            truePipelineInput.classList.add("truePipelineElement");
            truePipelineInput.classList.add("w-100px");
            //False pipeline label
            falsePipelineLabel = document.createElement("label");
            falsePipelineLabel.textContent = "False: ";
            //False pipeline input
            falsePipelineInput = document.createElement("input");
            falsePipelineInput.setAttribute("type", "text");
            falsePipelineInput.classList.add("falsePipelineElement");
            falsePipelineInput.classList.add("w-100px");
            //Put it all together and assign to chosenFunction
            functionChoiceContainer.appendChild(functionChoiceTitle);
            functionChoiceContainer.appendChild(valueLabel);
            functionChoiceContainer.appendChild(valueInput);
            functionChoiceContainer.appendChild(truePipelineLabel);
            functionChoiceContainer.appendChild(truePipelineInput);
            functionChoiceContainer.appendChild(falsePipelineLabel);
            functionChoiceContainer.appendChild(falsePipelineInput);
            chosenFunction = functionChoiceContainer;
            break;
        case "EC_mainPipelineRuns":
            //Function choice container
            functionChoiceContainer = document.createElement("div");
            functionChoiceContainer.setAttribute("data-type", "MPR");
            //Function choice title
            functionChoiceTitle = document.createElement("span");
            functionChoiceTitle.textContent = "MPR: ";
            functionChoiceTitle.classList.add("font-bold");
            //Run amount label
            runAmountLabel = document.createElement("label");
            runAmountLabel.textContent = "Runs: ";
            //Run amount input
            runAmountInput = document.createElement("input");
            runAmountInput.setAttribute("type", "number");
            runAmountInput.classList.add("runsElement");
            runAmountInput.classList.add("w-100px");
            //Put it all together and assign to chosenFunction
            functionChoiceContainer.appendChild(functionChoiceTitle);
            functionChoiceContainer.appendChild(runAmountLabel);
            functionChoiceContainer.appendChild(runAmountInput);
            chosenFunction = functionChoiceContainer;
            break;
        default:
            break;
    }
    return chosenFunction;
};

export {
    createDraggableElements,
    constructDraggableObjects
};