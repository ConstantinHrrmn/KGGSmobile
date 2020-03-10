/*
File name : feclass-stats.js
Description : Display the stats of a class with various graphs
 */

const GRAPH_CONTAINER_CLASS_GR_ID = "container-class-gr";
let actualClassId;

function displayClassGrowthRates() {
    const classGrowthRates = feData.classGrowthRates.map(x => (x.idClass == actualClassId) ? x : null).filter((x) => x != null);
    displayTableOfGrowthRates(classGrowthRates, displayGraphOfGrowthRatesForClass);
}

function displayGraphOfGrowthRatesForClass() {
    if ($$("#btn-graph-column-chart").hasClass("button-active")) {
        displayColumnChartOfClassGrowthRates();
    } else {
        displayPolarSpiderOfClassGrowthRates();
    }
}

function displayColumnChartOfClassGrowthRates() {
    const className = feData.classes.find(x => x.id == actualClassId).name;
    const classGrowthRates = getClassGrowthRates(actualClassId);
    const statsNames = feData.stats.map(x => x.name);
    const statsValues = [];
    const classData = {
        name: className
    };

    classGrowthRates.forEach(gr => {
        statsValues.push(Number(gr.value));
    });
    classData.data = statsValues;

    displayColumnChart(GRAPH_CONTAINER_CLASS_GR_ID, statsNames, [classData]);
}

function displayPolarSpiderOfClassGrowthRates() {
    const classGrowthRates = getClassGrowthRates(actualClassId);
    const statsNames = feData.stats.map(x => x.name);
    const statsValues = classGrowthRates.map(x => Number(x.value));

    const classData = [{
        name: feData.classes.find(x => x.id == actualClassId).name,
        data: statsValues,
    }];

    displayPolarSpider(GRAPH_CONTAINER_CLASS_GR_ID, statsNames, classData);
}

