//const URL_TEAMS_FOR_MATCH = "http://myviewvision.ch/other/kggsmobile/program/match/?needTeams&id=";

function NewDay(day){
    var h2 = document.createElement('h2');
    var text = document.createTextNode(day);
    h2.appendChild(text);
    document.getElementById('content').appendChild(h2);
}

function GetProgram(){
    var data = kggsProgram;
    var lastday = null;

    data.forEach(element => {

        if(lastday == null || lastday != element['jour']){
            lastday = element['jour'];
            NewDay(lastday);
        }

        var teams = JSON.parse(localStorage.getItem(element['IdMatch']));
        var teamLabel = "";

        if(teams != null){
            teamLabel += "Eq. n°" + teams[0]['Number'] + " (" + teams[0]['Name']+ ") ";
            for (i = 1; i < teams.length; i++) {
                teamLabel += " | VS. | Eq. n°" + teams[i]['Number'] + " (" + teams[i]['Name']+ ") ";
            }
        }else{
            teamLabel = "AUCUNE EQUIPE POUR CE MATCH"
        }
        
        // Creation de la div principale du match
        var card = document.createElement('div');
        card.setAttribute('class', 'card');

        var header = document.createElement('div');
        header.setAttribute('class','card-header');

        var content = document.createElement('div');
        content.setAttribute('class','card-content card-content-padding');

        var footer = document.createElement('div');
        footer.setAttribute('class','card-footer');

        var titre = document.createTextNode(element['debut'].substring(0,element['debut'].length-3) + " - " + element['fin'].substring(0,element['fin'].length-3) + " (Terrain : " + element['terrain']+" / arbitré par : "+element['arbitre']+")");
        header.appendChild(titre);

        var teams = document.createTextNode(teamLabel);
        content.appendChild(teams);


        //var url = "/?match="+element['IdMatch'];
        var link = document.createElement('a');
        var text = document.createTextNode("Infos");
        
        link.setAttribute('href', "/match/"+element['IdMatch']);
        link.appendChild(text);
        footer.appendChild(link);

        card.appendChild(header);
        card.appendChild(content);
        card.appendChild(footer);

        document.getElementById('content').appendChild(card);
    });

    
}