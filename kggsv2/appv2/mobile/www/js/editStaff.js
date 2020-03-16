function StaffToEdit(user){
    console.log(user);
    document.getElementById('iPrenom').value = user['prenom'];
    document.getElementById('iNom').value = user['nom'];
    document.getElementById('imail').value = user['mail'];
    document.getElementById('idate').value = user['date'];
    document.getElementById('iduser').value = user['IdUser'];
}