let personne;
let utilisateurs = [];
let nombre = 0 ;
let compteurVictoire = 0;
let compteurEgalite = 0;
let compteurDefaite = 0;
let random = 0;
let choixOrdi ;

function initialiserPage(){
    utilisateurs=[];
    document.getElementById("tableau").innerHTML = " \n " +
        "<table class='bordur'> \n " +
        "<thead> \n " +
        "<th>Nom</th> \n " +
        "<th>Victoire</th>" +
        "<th>Egaliter</th>" +
        "<th>Perdu</th>" +
        "</thead> \n " +
        "<tbody id='resultat'></tbody>" +
        "</table> \n "
}


class Personnes {
    constructor(nom) {
        this.nom = nom;
    }
}



function ajouterPersonnes(formulaire){ // cete fonction permet le récuperation du pseudo encoder dans le formulaire
    personne = new Personnes(formulaire.pseudo.value);
    utilisateurs.push(personne);
    document.getElementById("resultat").innerHTML += "<tr id=" + personne.nom + "><td>" + personne.nom + "</td></tr>";
    console.log(utilisateurs);
    return false;
}

function points(){ // affiche les résultats du jouer quand il choisi de finir le jeux et affcihe le résultat sur la page HTML dans des <td></td> et l'affiche à coté du nom du jouer
    document.getElementById(personne.nom).innerHTML += "<td id='vert'>" + compteurVictoire + "</td><td id='jaune'>" + compteurEgalite + "</td><td id='rouge'>" + compteurDefaite + "</td>";
    compteurDefaite =0;
    compteurEgalite =0;
    compteurVictoire =0;
}

function choix(nombre){
    random = Math.random() * 3;
    if (random <= 1){
        choixOrdi = 1;
    }
    else if (random <= 2) {
        choixOrdi = 2;
    }
    else if (random <= 3) {
        choixOrdi = 3;
    }

    switch (nombre){
        case choixOrdi :
            console.log("dommage egalité" );
            compteurEgalite ++;
            break;

        case 2 :
            if (choixOrdi == 1) {
                console.log("gagner");
                compteurVictoire ++;
            }
            else if (choixOrdi == 3){
                console.log("perdu");
                compteurDefaite ++;
            }
            break;

        case 3 :
            if (choixOrdi == 2){
                console.log("gagner");
                compteurVictoire ++;
            }
            else if (choixOrdi == 1){
                console.log("perdu");
                compteurDefaite ++;
            }
            break;

        case 1 :
            if (choixOrdi == 3) {
                console.log("gagner");
                compteurVictoire++;
            }
            else if (choixOrdi == 2){
                console.log("perdu");
                compteurDefaite ++;
            }
            break;

        /*case 4 :
            console.log("Tu as fini");
            console.log(compteurVictoire);
            console.log(compteurDefaite);
            console.log(compteurEgalite);*/

            return 0;
            break;

    }
}

