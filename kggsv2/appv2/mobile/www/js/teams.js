function DisplayAllTeams(){
    var data = kggsTeams;
    data.forEach(item => {
        var tr = document.createElement('tr');

        var numero = document.createElement('td');
        var nom = document.createElement('td');
        var coach = document.createElement('td');

        var text1 = document.createTextNode(item.Number);
        var text2 = document.createTextNode(item.Name);
        var text3 = document.createTextNode(item.Coach == null ? "-" : item.Coach);

        numero.appendChild(text1);
        nom.appendChild(text2);
        coach.appendChild(text3);

        tr.appendChild(numero);
        tr.appendChild(nom);
        tr.appendChild(coach);

        if(user != null && user['seclevel'] == "1"){
            var edit = document.createElement('td');
            var text5 = document.createTextNode("Edit");
            var link = document.createElement('a');
            link.setAttribute('class', 'button');
            link.setAttribute('href', "/editT/"+item['IdTeam']);
            link.appendChild(text5);
            edit.appendChild(link);
            tr.appendChild(edit);
        }

        document.getElementById("table-teams-content").appendChild(tr);
    });
}

