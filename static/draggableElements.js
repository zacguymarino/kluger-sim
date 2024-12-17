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
    let variableValue;
    let trueValue;
    let falseValue;
    let minValue;
    let maxValue;
    let runsValue;
    switch(functionType) {
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
        case "AV":
            variableValue = element.querySelector(".variableElement").value;
            valueValue = element.querySelector(".valueElement").value;
            object = {
                type: "AV",
                variable: variableValue,
                value: valueValue
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
    let variableChoiceLabel;
    let variableChoiceInput;
    let minLabel;
    let maxLabel;
    let minInput;
    let maxInput;

    let runAmountLabel;
    let runAmountInput;
    switch(droppedItemData) {
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
        case "PF_addToVariable":
            //Function choice container
            functionChoiceContainer = document.createElement("div");
            functionChoiceContainer.setAttribute("data-type", "AV");
            //Function choice title
            functionChoiceTitle = document.createElement("span");
            functionChoiceTitle.textContent = "AV: ";
            functionChoiceTitle.classList.add("font-bold");
            //Variable choice label
            variableChoiceLabel = document.createElement("label");
            variableChoiceLabel.textContent = "Variable: ";
            //Variable choice input
            variableChoiceInput = document.createElement("input");
            variableChoiceInput.setAttribute("type", "text");
            variableChoiceInput.classList.add("variableElement");
            variableChoiceInput.classList.add("w-100px");
            //Value label
            valueLabel = document.createElement("label");
            valueLabel.textContent = "Value: ";
            //Value input
            valueInput = document.createElement("input");
            valueInput.setAttribute("type", "number");
            valueInput.classList.add("valueElement");
            valueInput.classList.add("w-50px");
            //Put it all together and assign to chosenFunction
            functionChoiceContainer.appendChild(functionChoiceTitle);
            functionChoiceContainer.appendChild(variableChoiceLabel);
            functionChoiceContainer.appendChild(variableChoiceInput);
            functionChoiceContainer.appendChild(valueLabel);
            functionChoiceContainer.appendChild(valueInput);
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