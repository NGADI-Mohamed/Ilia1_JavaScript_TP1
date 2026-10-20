function somme(){

    var total = 0;

    for(i = 1 ; i <= 3; i++){
        var h = parseInt(document.getElementById("h" + i).value);
        var m = parseInt(document.getElementById("m" + i).value);
        var s = parseInt(document.getElementById("s" + i).value);

        total += (h * 3600) + (m * 60) + s ; // calcul total en secondes
    } 

    var jours = Math.floor(total / 86400);
    total = total % 86400 ;

    var heures = Math.floor(total / 3600);
    total = total % 3600 ;

    var minutes = Math.floor(total / 60);
    total = total % 60 ;

    var secondes = total;

    document.getElementById("jours").value = jours;
    document.getElementById("heures").value = heures;
    document.getElementById("minutes").value = minutes;
    document.getElementById("secondes").value = secondes;
}

function effacer(){
    // select tout les inputs
    var inputs = document.querySelectorAll("input");

    inputs.forEach(function(element){
        element.value = 0;
    });
}