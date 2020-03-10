/*
File name : feclass.js
Description : Methods related to the classes of characters
 */

const NB_STATS = 9;

function getAvailableClassesForCharacter(char) {
    const availableClasses = [];

    feData.classes.forEach(feClass => {
        if (feClass.isAvailableForAll && (feClass.idGender == ID_GENDER_NON_RESTRICTED || feClass.idGender == char.idGender)) {
            availableClasses.push(feClass);
        } else {
            if (feData.restrictedClasses.find(x => x.idClass == feClass.id && x.idCharacter == char.id)) {
                availableClasses.push(feClass);
            }
        }
    });
    return availableClasses;
}

function displayAllClasses() {
    feData.classes.forEach(feClass => {
        const tr = $$(`<tr></tr>`)
        const td = $$(`<td id="feclass-${feClass.id}">${feClass.name}</td>`);
        tr.append(td);
        $$("#table-classes-content").append(tr);

        td.on("click", (event) => {
            const feclassId = event.target.id // Get the string who contains the id of the class
                .match(/\d/g) // Extract all digits
                .join(""); // Join the digits to get the id number

            app.views.main.router.navigate("/class/" + feclassId);
        });
    });
}

function getClassGrowthRates(idClass) {
    const classGrowthRates = [];
    const partialClassGrowthRates = feData.classGrowthRates.map(x => (x.idClass == idClass) ? x : null).filter(x => x != null);

    for (let i = 0; i < NB_STATS; i++) {
        let gr = partialClassGrowthRates.find(x => (x.idStat == i + 1) ? x : null);
        if (gr == null) {
            gr = {
                idClass: idClass,
                idStat: i + 1,
                value: 0,
            }
        }
        classGrowthRates.push(gr);
    }
    return classGrowthRates;
}