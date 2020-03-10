/*
File name : database.js
Description : Communicates with the server to ensure that the data is up to date.
 */

const BASE_URL_TEAMS = "http://myviewvision.ch/other/kggsmobile/team/";
let kggsTeams = JSON.parse(localStorage.getItem("kggsTeams"));

if (kggsTeams == null){
    $.getJSON(BASE_URL_TEAMS + "get/?all", function(result) {
        updateData("kggsTeams",result)
    });
}

function updateData(table ,data) {
    if (data != null && Object.keys(data).length > 0) {
        localStorage.setItem(table, JSON.stringify(data));
        kggsTeams = data;
    }
}