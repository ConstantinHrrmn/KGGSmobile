/*
File name : index.js
Description : Display the content of the home page
 */

document.addEventListener("deviceready", onDeviceReady, false);

function onDeviceReady() {

} 

var urlParams = new URLSearchParams(window.location.search);
var entries = urlParams.entries();

var data = [];
var i = 0;

for(pair of entries) { 
    data[i] = pair[1];
    i++;
}

if(data.length>0 && data[2] == "connexion"){
    Connect(data[0], data[1]);
}else if(data[0] == "logout"){
    Disconnect();
}else if(data[0] == "edit" && user['seclevel'] == 1){
    UpdateStaff(data[1], data[2], data[3], data[4], data[5], data[6]);
}else if(data[0] == "newTeam" && user['seclevel'] == 1){
    CreateTeam(data[1], data[2], data[3]);
}else if(data[0] == "newstaff" && user['seclevel'] == 1){
    prenom = data[1];
    nom = data[2];
    mail = data[3];
    date = data[4];
    idPrivileges = data[5];
    CreateStaff(prenom, nom, mail, date, idPrivileges);
}else if(data[0] == "newMatch" && user['seclevel'] == 1){
    day = data[1];
    time = data[2];
    field = data[3];
    sport = data[4];
    staff = data[5];
    t1 = data[6];
    t2 = data[7];
    t3 = data[8];
    CreateGame(day,time,field,sport,staff,t1,t2,t3);
}else if(data[0] == "updateScore" && user['seclevel'] == 1){
    UpdateScore(data[1], data[2], data[3], data[4]);
}