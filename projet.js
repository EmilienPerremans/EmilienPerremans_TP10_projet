let utilisateurs = [];
class Personnes {
    constructor(nom,age) {
        this.nom = nom;
        this.age = age;
    }
   printMyNam(){
        console.log(this.nom, this.age + "ans");
}
}

function ajouterPersonnes(formulaire){
    let personne = new Personnes(formulaire.pseudo.value, formulaire.age.value);
    personne.printMyNam()
    utilisateurs.push(personne);
    console.log(utilisateurs);
    return false;
}