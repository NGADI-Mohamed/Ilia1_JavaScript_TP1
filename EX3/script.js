/*function trier(list){
    return list.sort((a,b) => a - b); // (a,b) => a - b : pour trier les nombres dans l'ordre croissant
}

var numbers = new Array(10);

numbers = [2, 5, 3, 1, 9, 4, 8, 7, 10, 6];

document.write(trier(numbers));*/


// fonction pour entrer les valeurs du tableau
function enter(){

    // obtenir la taille du tableau tapée par l'utilisateur
    var size = document.getElementById("size").value ;

    // l'espace qu'on va ajouter les inputs
    var table = document.getElementById("table");

    for(var i=1 ; i<=size ; i++){

        // ajouter à chaque fois =>  <input type="number" name="in1" id="in1" placeholder="number 1">
        table.innerHTML += "<input type='number' name='in"+ i +"' id='in"+ i +"' placeholder='number "+ i +"'>";
    }
}

function trier(){
    var size = document.getElementById("size").value ;

    // creation d'un tableau numbers[] et le remplir avec les nombres entrée par l'utilisateur
    var numbers = [];
    for(var i=1 ; i<=size ; i++ ){
        numbers[i] = document.getElementById("in"+ i +"").value ;
    }

    // trier et afficher le tableau dans l'espace resultat
    numbers.sort((a,b) => a - b);
    var resultat = document.getElementById("resultat");
    resultat.innerHTML = "Le tableaux triée est : [" + numbers.join(" < ") + "]" ;

}
