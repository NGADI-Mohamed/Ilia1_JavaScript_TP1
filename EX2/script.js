function verifierEmail(){
    var email = document.getElementById("email").value;
    var resultat = document.getElementById("resultat");

    var arobas_index = email.indexOf("@");
    var point_index = email.lastIndexOf(".");

    if( arobas_index > 0 && point_index > arobas_index + 1 && point_index < email.length - 1 ){
        resultat.innerHTML = "Email valid";
    }else {
        resultat.innerHTML = "Email not valid !";
    }

}