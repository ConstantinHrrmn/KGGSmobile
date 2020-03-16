/*
File name : database.js
Description : Communicates with the server to ensure that the data is up to date.
 */

const BASE_URL_TEAMS = "http://myviewvision.ch/other/kggsmobile/team/";
const BASE_URL_PROGRAM = "http://myviewvision.ch/other/kggsmobile/program/";
const URL_TEAMS_FOR_MATCH = "http://myviewvision.ch/other/kggsmobile/program/match/?needTeams&id=";
const BASE_URL_STAFF = "http://myviewvision.ch/other/kggsmobile/user/";
const BASE_LOGIN_URL = "http://myviewvision.ch/other/kggsmobile/user/get/index.php/?login&";
const BASE_MATCH_URL = "http://myviewvision.ch/other/kggsmobile/match/set/";

const BASE_DAYS_URL = "http://myviewvision.ch/other/kggsmobile/data/days/";
const BASE_TIMES_URL = "http://myviewvision.ch/other/kggsmobile/data/times/";
const BASE_FIELDS_URL = "http://myviewvision.ch/other/kggsmobile/data/fields/";
const BASE_TYPE_URL = "http://myviewvision.ch/other/kggsmobile/data/type/";

let kggsTeams = JSON.parse(localStorage.getItem("kggsTeams"));
let kggsProgram = JSON.parse(localStorage.getItem("kggsProgram"));
let kggsStaff = JSON.parse(localStorage.getItem('kggsStaff'));
var user = JSON.parse(localStorage.getItem("user"));

var fields = JSON.parse(localStorage.getItem("fields"));
var times = JSON.parse(localStorage.getItem("fields"));
var days = JSON.parse(localStorage.getItem("days"));
var types = JSON.parse(localStorage.getItem("types"));

console.log(user);

if(user != null){
    IsConnected();
}

GetTeams();
GetProgram();
GetStaff();
GetTimes();
GetDays();
GetFields();
GetSports();

setInterval(GetTeams, 10000);
setInterval(GetProgram, 10000);
setInterval(GetStaff, 10000);

/*
if (kggsTeams == null){
    GetTeams();
}

if (kggsProgram == null){
    GetProgram();
}

if(kggsStaff == null){
    GetStaff();
}*/

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

function Connect(name, pwd){
    $.getJSON(BASE_LOGIN_URL + "name=" + name + "&pwd=" + pwd, function(result) {    
        updateData("user", result);
        if(result != false){
            user = result;
            if(user != null){
                IsConnected();
            }
        }
    });
}

function Disconnect(){
    if(user != null){
        localStorage.removeItem("user");
        user = null;
        document.getElementById("mylogin").style.display="block";
        document.getElementById("mylogout").style.display="none";
        document.getElementById("myadmin").style.display="none";
    }
}

function IsConnected(){
    document.getElementById("mylogin").style.display="none";
    document.getElementById("mylogout").style.display="block";
    if(user['seclevel'] == "1"){
        document.getElementById("myadmin").style.display="block";
    }
}

// Met à jour un membre du staff
function UpdateStaff(id, prenom, nom, mail, date, privilege){
    url = BASE_URL_STAFF + "set/?id=" + id + "&name=" + prenom + "&lastname=" + nom + "&date=" + date + "&mail=" + mail + "&security=" + privilege;
    $.getJSON(url, function(result) {
        GetStaff();
    });
}

// Va chercher dans la base de données les membres du staff et les gardes dans la variable globale
function GetStaff(){
    $.getJSON(BASE_URL_STAFF + "get/?all", function(result) {
        updateData("kggsStaff",result);
        kggsStaff = result;
        console.log("Staff updated");
    });
}

// Récupère le programme (donc la liste des matchs par jour)
function GetProgram(){
    $.getJSON(BASE_URL_PROGRAM + "match/?needProgram", function(result) {
        updateData("kggsProgram",result)
        kggsProgram = result;
        result.forEach(element => {
            GetTeamsForMatchs(element['IdMatch']);
        });  
        console.log("Program updated");
    });
}

function GetTeams(){
    $.getJSON(BASE_URL_TEAMS + "get/?all", function(result) {
        updateData("kggsTeams",result);
        kggsTeams = result;
    });
}

function GetTimes(){
    $.getJSON(BASE_TIMES_URL, function(result) {
        updateData("times",result);
        times = result;
    });
}

function GetFields(){
    $.getJSON(BASE_FIELDS_URL, function(result) {
        updateData("fields",result);
        fields = result;
    });
}

function GetDays(){
    $.getJSON(BASE_DAYS_URL, function(result) {
        updateData("days",result);
        days = result;
    });
}

function GetSports(){
    $.getJSON(BASE_TYPE_URL, function(result) {
        updateData("types",result);
        types = result;
    });
}

// Création d'une équipe
function CreateTeam(nom, numero, idCoach){
    var url = BASE_URL_TEAMS + "set/?name=" + nom + "&number=" + numero + "&idCoach=" + idCoach;
    $.getJSON(url, function(result) {
        GetTeams();
    });
}

// Création d'un membre du staff
function CreateStaff(prenom, nom, mail, date, idprivilege){
    var url = BASE_URL_STAFF + "create/?prenom="+prenom+"&nom="+nom+"&mail="+mail+"&date="+date+"&sec="+idprivilege;
    $.getJSON(url, function(result) {
        GetStaff();
    });
}

function CreateGame(day, time, field, sport, staff, t1, t2, t3){
    var url = BASE_MATCH_URL + "?day=" + day + "&time=" + time + "&field=" + field + "&sport=" + sport + "&staff=" + staff + "&t1=" + t1 + "&t2=" + t2 + "&t3=" + t3;
    $.getJSON(url, function(result) {
        GetProgram();
    });
}