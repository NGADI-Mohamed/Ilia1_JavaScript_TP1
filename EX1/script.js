function initialiser(form){
    form.reset();
}

function afficherCorrige(){

    // ouvrir une fenetre dans la page html
    var fenetre = window.open("","", "width=800,height=600");
    fenetre.document.write(`
        <html>
        <head>
            <title>Corrigé du QCM</title>
            <style>
                body {
                    font-family: Arial;
                    padding: 20px;
                }
                .correct {
                    color: black;
                    background-color: greenyellow;
                    width: 200px;
                    margin-top: 5px;
                    padding-left: 5px;
                    border-radius:10px;
                    font-weight: bold;
                }
            </style>
        </head>
        <body>
            <h1>Corrigé du QCM</h1>

            <h3>Q1. Quels éléments sont des balises HTML ?</h3>
            <ul>
                <li class="correct"> p </li>
                <li class="correct"> h1 </li>
                <li> style </li>
            </ul>

            <h3>Q2. Quelles instructions JavaScript permettent d'afficher des informations dans la console ?</h3>
            <ul>
                <li class="correct"> console.log() </li>
                <li class="correct"> console.error() </li>
                <li> document.write() </li>
            </ul>

            <h3>Q3. Quelles propriétés sont des propriétés CSS ?</h3>
            <ul>
                <li class="correct"> color </li>
                <li class="correct"> margin </li>
                <li> onclick </li>
            </ul>

            <h3>Q4. Quelle balise HTML permet d'insérer une image ?</h3>
            <ul>
                <li> image </li>
                <li class="correct"> img </li>
                <li> br </li>
            </ul>

            <h3>Q5. Quel langage permet de styliser une page Web ?</h3>
            <ul>
                <li> HTML </li>
                <li class="correct"> CSS </li>
                <li> JavaScript </li>
            </ul>
        </body>
    `);

    fenetre.document.close();
}

function afficherResultat(){
    // Stocker les bonnes Reponses dans un objet contient des tableaux
    var bonnesReponses = {
        q1: ["p", "h1"],
        q2: ["console.log", "console.error"],
        q3: ["color", "margin"],
        q4: ["img"],
        q5: ["css"]
    }
    
    // selectionner le formulaire
    var form = document.querySelector("form");

    // initialiser resultat et score
    var resultat = "";
    var score = 0;
    // boucle for pour parcourir tout les questions
    for(var i=1 ; i<=5 ; i++ ){
    
        // le nom du question (à chaque fois q1 q2 ...)
        var question = "q" + i ;

        // selectionner les inputs d'utulisateur
        var getInput = form.querySelectorAll("input[name=" + question + "]:checked");
        
        // tableaux pour stocker les inputs d'utulisateur
        var userInputs = [];

        getInput.forEach(function(i){
            userInputs.push(i.value);
        });

        // récuperer les bonnes reponses de chaque question 
        var bonnes = bonnesReponses[question];

        // comparer les tailles des tableaux inputs avec bonnes reponses 
        // et verifier que les bonnes reponses inclus dans inputs
        var correcte = userInputs.length === bonnes.length &&
            bonnes.every(function(reponse){
                return userInputs.includes(reponse);
            });
        
        // verifier si correcte recoit true ou false
        if(correcte){
            // on ajoute la balise <p> pour afficher les resultat ligne par ligne
            resultat += "<p style='color: green;'>La reponse de la question " + i + " est correcte.</p>" ;
            score ++;
        }else{
            resultat += "<p style='color: red;'>La reponse de la question " + i + " est incorrecte.</p>" ;
        }
    }

    var fenetre = window.open("", "", "width=600,height=400");

    fenetre.document.write(`
            <html>
                <head>
                    <title>Résultat du QCM</title>
                    <style>
                        body{
                            font-family: Arial;
                            padding: 20px;
                        }
                    </style>
                </head>
                <body>
                    <h1>Le résultat du QCM</h1>

                    ${resultat}

                    <h2>Score : ${score}/5</h2>
                </body>
            </html>
        `);
    fenetre.document.close();
}