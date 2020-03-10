/*
File name : comparator.js
Description : Allow the user to compare multiple characters
 */

const GRAPH_CONTAINER_COMPARATOR_ID = "container-comparator";
const ID_GENDER_NON_RESTRICTED = 1;
const BUTTON_ACTIVE_CLASS_NAME = "button-active";
let smartComparator;
let selectedCharacters = [];

function configureSmartSelectOfCharacters() {
    const characters = feData.characters;
    const houses = feData.houses;

    // Create the options of the select
    houses.forEach(house => {
        const optgroup = "<optgroup id='optgroup-house-" + house.id + "' label='" + house.name + "'>";
        $$("#select-compare").append(optgroup);
    });
    characters.forEach(char => {
        const option = "<option id='" + char.id + "'>" + char.firstName + "</option>";
        $$("#optgroup-house-" + char.idHouse).append(option);
    });

    // Configure the smartselect
    smartComparator = app.smartSelect.create({
        el: '.smart-select',
    });
    smartComparator.open();

    smartComparator.on("close", () => {
        displayComparedCharacters();
    });

    $$("#btn-compare").on("click", () => {
        smartComparator.open();
    });
}

function displayComparedCharacters() {
    const selectedCharactersName = smartComparator.getValue();

    selectedCharacters = [];
    selectedCharactersName.forEach(name => {
        selectedCharacters.push(feData.characters.find(x => x.firstName == name));
    });

    $$("#table-comparator-content").empty();

    selectedCharacters.forEach(char => {
        const availableClasses = getAvailableClassesForCharacter(char);

        // Create the select of available classes
        const selectContainer = $$("<div class='item-input-wrap input-dropdown-wrap'></div>");
        const select = $$("<select>");
        const defaultOption = $$("<option value='-1'>None</option>");
        select.append(defaultOption);

        availableClasses.forEach(feClass => {
            const option = $$("<option>");
            option.val(feClass.id);
            option.text(feClass.name);
            select.append(option);
        });
        selectContainer.append(select);

        if (char.idClassSelected != null) {
            // select the previous class selected
            select.val(char.idClassSelected);
        } else {
            // select the first element
            select.val(-1);
        }

        select.on("change", (e) => {
            char.idClassSelected = Number($$(e.target).val());
            displayCurrentGraph();
        });

        // Fill the table
        const tr = $$("<tr>");
        const tdName = $$("<td>" + char.firstName + "</td>");
        const tdClass = $$("<td>");
        tdClass.append(selectContainer);
        tr.append(tdName);
        tr.append(tdClass);
        $$("#table-comparator-content").append(tr);
    });

    displayCurrentGraph();
}

function displayCurrentGraph() {
    if ($$("#btn-graph-column-chart").hasClass("button-active")) {
        compareWithColumnGraph();
    } else {
        compareWithPolarSpider();
    }
}

function compareWithColumnGraph() {
    const statsNames = feData.stats.map(x => x.name);
    const charactersData = [];

    selectedCharacters.forEach(char => {
        const charData = computeCharacterGrowthRatesWithClass(char);
        charactersData.push(charData);
    });

    displayColumnChart(GRAPH_CONTAINER_COMPARATOR_ID, statsNames, charactersData);
}

function compareWithPolarSpider() {
    const charactersData = [];
    const statsNames = feData.stats.map(x => x.name);

    selectedCharacters.forEach(char => {
        const charData = computeCharacterGrowthRatesWithClass(char);
        charactersData.push(charData);
    });

    displayPolarSpider(GRAPH_CONTAINER_COMPARATOR_ID, statsNames, charactersData);
}

function computeCharacterGrowthRatesWithClass(char) {
    const charGrowthRates = feData.charGrowthRates.map(x => (x.idCharacter == char.id) ? x : null).filter(x => x != null);
    const statsValues = [];
    const charData = {
        stack: char.id,
    };

    let charName = char.firstName;
    let classGrowthRates = null;
    if (char.idClassSelected != null && char.idClassSelected > 0) {
        // Get the selected class of the character
        classGrowthRates = feData.classGrowthRates.map(x => (x.idClass == char.idClassSelected) ? x : null).filter(x => x != null);
        charName += " (" + feData.classes.find(x => x.id == char.idClassSelected).name + ")";
    }
    charData.name = charName;

    charGrowthRates.forEach(gr => {
        let grValue = Number(gr.value);
        if (classGrowthRates != null) {
            // Compute the growth rates of the character with the growth rates of the class
            let classGr = classGrowthRates.find(x => x.idStat == gr.idStat);
            if (classGr != null) {
                grValue += Number(classGr.value);
            }
        }
        statsValues.push(grValue);
    });

    charData.data = statsValues;
    return charData;
}

/**
 * Change the style of the buttons used to choose the graph displayed and call the method to display the graph
 */
function switchGraph(event, callback) {
    $$("." + BUTTON_ACTIVE_CLASS_NAME).removeClass(BUTTON_ACTIVE_CLASS_NAME);
    $$(event.target).addClass(BUTTON_ACTIVE_CLASS_NAME);
    callback();
}
