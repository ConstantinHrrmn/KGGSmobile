function DisplayStaff(){
    var staff = kggsStaff;

    staff.forEach(staff =>{

        var tr = document.createElement('tr');

        var nom = document.createElement('td');
        var prenom = document.createElement('td');
        var privilege = document.createElement('td');
        var equipe = document.createElement('td');

        var text1 = document.createTextNode(staff['prenom']);
        var text2 = document.createTextNode(staff['nom']);
        var text3 = document.createTextNode(staff['privileges']);

        if(staff['numEquipe'] == null){
            staff['numEquipe'] = "-";
        }
        var text4 = document.createTextNode("N° " + staff['numEquipe']);

        nom.appendChild(text1);
        prenom.appendChild(text2);
        privilege.appendChild(text3);
        equipe.appendChild(text4);

        tr.appendChild(nom);
        tr.appendChild(prenom);
        tr.appendChild(privilege);
        tr.appendChild(equipe);

        if(user != null && user['seclevel'] == "1"){
            var edit = document.createElement('td');
            var text5 = document.createTextNode("Edit");
            var link = document.createElement('a');
            link.setAttribute('class', 'button');
            link.setAttribute('href', "/editS/"+staff['IdUser']);
            link.appendChild(text5);
            edit.appendChild(link);
            tr.appendChild(edit);
        }

        document.getElementById("table-staff-content").appendChild(tr);
    });
}