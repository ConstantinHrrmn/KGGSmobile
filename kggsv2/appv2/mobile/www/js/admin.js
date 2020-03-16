function LoadStaff(){
    kggsStaff.forEach(staff => {
        var option = document.createElement('option');
        option.setAttribute('value', staff['IdUser']);
        var text = document.createTextNode(staff['prenom'] + " " + staff['nom']);
        option.appendChild(text);
        document.getElementById('iselecNewTeam').appendChild(option);
        document.getElementById('iselecNewMatchStaff').appendChild(option);
    });
}

function LoadData(){
    fields.forEach(field => {
        var option = document.createElement('option');
        option.setAttribute('value', field['id']);
        var text = document.createTextNode(field['nom']);
        option.appendChild(text);
        document.getElementById('iselecNewMatchField').appendChild(option);
    });
    times.forEach(time => {
        var option = document.createElement('option');
        option.setAttribute('value', time['id']);
        var text = document.createTextNode(time['debut'] + " - " + time['fin']);
        option.appendChild(text);
        document.getElementById('iselecNewMatchTime').appendChild(option);
    });
    days.forEach(day => {
        var option = document.createElement('option');
        option.setAttribute('value', day['id']);
        var text = document.createTextNode(day['nom']);
        option.appendChild(text);
        document.getElementById('iselecNewMatchDay').appendChild(option);
    });
    types.forEach(type => {
        var option = document.createElement('option');
        option.setAttribute('value', type['id']);
        var text = document.createTextNode(type['name']);
        option.appendChild(text);
        document.getElementById('iselecNewMatchSport').appendChild(option);
    });
    kggsTeams.forEach(team => {
        console.log(team);
        var option = document.createElement('option');
        option.setAttribute('value', team['IdTeam']);
        var text = document.createTextNode(team['Name'] + " (" + team['Number'] + ")");
        option.appendChild(text);
        document.getElementById('t1').appendChild(option);
    });
    kggsTeams.forEach(team => {
        console.log(team);
        var option = document.createElement('option');
        option.setAttribute('value', team['IdTeam']);
        var text = document.createTextNode(team['Name'] + " (" + team['Number'] + ")");
        option.appendChild(text);
        document.getElementById('t2').appendChild(option);
    });
    kggsTeams.forEach(team => {
        console.log(team);
        var option = document.createElement('option');
        option.setAttribute('value', team['IdTeam']);
        var text = document.createTextNode(team['Name'] + " (" + team['Number'] + ")");
        option.appendChild(text);
        document.getElementById('t3').appendChild(option);
    });
}

function UpdateView(){
    choosen = document.getElementById("iselecNewMatchSport").selectedIndex;
    amount = types[choosen]['equipes'];
    li = ['t1-li', 't2-li', 't3-li'];

    document.getElementById(li[0]).style.display = "none";
    document.getElementById(li[1]).style.display = "none";
    document.getElementById(li[2]).style.display = "none";

    for(i=0; i < amount; i++){
        document.getElementById(li[i]).style.display = "block";
    }
}
