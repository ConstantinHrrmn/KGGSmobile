function DisplayStaff(){
    var staff = kggsStaff;

    staff.forEach(staff =>{
        console.log(staff);

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

        document.getElementById("table-staff-content").appendChild(tr);
    });
}