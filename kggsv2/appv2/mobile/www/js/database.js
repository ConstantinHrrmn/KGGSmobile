/*
File name : database.js
Description : Communicates with the server to ensure that the data is up to date.
 */

const BASE_URL_TEAMS = "http://myviewvision.ch/other/kggsmobile/team/";
const BASE_URL_PROGRAM = "http://myviewvision.ch/other/kggsmobile/program/";
const URL_TEAMS_FOR_MATCH = "http://myviewvision.ch/other/kggsmobile/program/match/?needTeams&id=";

let kggsTeams = JSON.parse(localStorage.getItem("kggsTeams"));
let kggsProgram = JSON.parse(localStorage.getItem("kggsProgram"));

if (kggsTeams == null){
    $.getJSON(BASE_URL_TEAMS + "get/?all", function(result) {
        updateData("kggsTeams",result)
        kggsTeams = result;
    });
}

if (kggsProgram == null){
    $.getJSON(BASE_URL_PROGRAM + "match/?needProgram", function(result) {
        updateData("kggsProgram",result)
        kggsProgram = result;
        result.forEach(element => {
            GetTeamsForMatchs(element['IdMatch']);
        });  
    });
}

function updateData(table ,data) {
    if (data != null && Object.keys(data).length > 0) {
        localStorage.setItem(table, JSON.stringify(data));
    }
}

function GetTeamsForMatchs(id){
    $.getJSON(URL_TEAMS_FOR_MATCH + id, function(result) {    
        updateData(id, result);
    });
}