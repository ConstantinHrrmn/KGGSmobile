/*
File name : stats.js
Description : Display the stats of a character with various graphs
 */

const GRAPH_CONTAINER_CHAR_GR_ID = "container-char-gr";
let actualCharId;

function createTableOfStats() {
    const stats = feData.stats;
    stats.forEach(stat => {
        const th = $$(`<th>${stat.shortName}</th>`);
        const td = $$(`<td id="stat-${stat.id}"></td>`);
        $$("#table-gr-header").append(th);
        $$("#table-gr-content").append(td);
    });
}

function displayCharGrowthRates() {
    const charGrowthRates = feData.charGrowthRates.map(x => (x.idCharacter == actualCharId) ? x : null).filter(x => x != null);
    displayTableOfGrowthRates(charGrowthRates, displayGraphOfGrowthRatesForChar);
}


function displayTableOfGrowthRates(growthRates, callback) {
    growthRates.forEach(gr => {
        $$("#stat-" + gr.idStat).text(gr.value);
    });
    $$("td:empty").text(0);
    callback();
}

function createListOfAvailableClasses() {
    const char = feData.characters.find(x => x.id == actualCharId);
    // Get all available classes for the character
    const availableClasses = getAvailableClassesForCharacter(char);

    // Create the select of available classes
    const select = $$("#select-classes");
    const defaultOption = $$("<option value='-1'>None</option>");
    select.append(defaultOption);

    availableClasses.forEach(feClass => {
        const option = $$("<option>");
        option.val(feClass.id);
        option.text(feClass.name);
        select.append(option);
    });

    // select the first element
    select.val(-1);

    select.on("change", (e) => {
        char.idClassSelected = Number($$(e.target).val());
        displayGraphOfGrowthRatesForChar();
    });
}

function displayGraphOfGrowthRatesForChar() {
    if ($$("#btn-graph-column-chart").hasClass("button-active")) {
        displayColumnChartOfCharGrowthRates();
    } else {
        displayPolarSpiderOfCharGrowthRates();
    }
}

function displayColumnChartOfCharGrowthRates() {
    const char = feData.characters.find(x => x.id == actualCharId);
    const statsNames = feData.stats.map(x => x.name);
    const charData = [computeCharacterGrowthRatesWithClass(char)]; // The data must be an array

    displayColumnChart(GRAPH_CONTAINER_CHAR_GR_ID, statsNames, charData);
}

function displayPolarSpiderOfCharGrowthRates() {
    const char = feData.characters.find(x => x.id == actualCharId);
    const statsNames = feData.stats.map(x => x.name);
    const charData = [computeCharacterGrowthRatesWithClass(char)]; // The data must be an array

    displayPolarSpider(GRAPH_CONTAINER_CHAR_GR_ID, statsNames, charData);
}
