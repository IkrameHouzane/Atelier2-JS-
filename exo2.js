var Etudiant={
    nom : "Tazi" ,
    prenom : "Wafae" ,
    age : 20 ,
    cne : "E13456432",
     etudier: function(){
        console.log(`${this.prenom} ${this.nom} étudie.`);
     }
}
var Professeur={
    nom : "Amini"  , 
    age : 55 , 
    cin :"T123454" , 
    enseigner: function(){
       console.log(`${this.nom} enseigne.`);
     }
}
let listeEtudiants = [
    {nom : "Naji", prenom:"Kamal",age:21,cne:"R123445" },
    {nom : "Allali", prenom:"Safae",age:22,cne:"E567829" },
    {nom : "Malki", prenom:"Doha",age:20,cne:"F2433454" },
    {nom : "Naji", prenom:"Mina",age:20,cne:"F2433454" }
];
//Affichage des etudiants avant tri 
console.log("Affichage avant tri:")
for(let i=0;i<listeEtudiants.length;i++){
    console.log(`
                 nom: ${listeEtudiants[i].nom}
                 prenom: ${listeEtudiants[i].prenom}
                 age:${listeEtudiants[i].age}
                 cne:${listeEtudiants[i].cne}
        `); 
        console.log("---------------------------------");
}
//tri des étudiants(nom et prenom)
listeEtudiants.sort((etud1,etud2)=>{
    if(etud1.nom===etud2.nom){
        return etud1.prenom.localeCompare(etud2.prenom);
    }
        return etud1.nom.localeCompare(etud2.nom);
}
);
//affichage des étudiants après tri
console.log("Affichage après tri:");
for(let i=0;i<listeEtudiants.length;i++){
    console.log(`
                nom:${listeEtudiants[i].nom}
                prenom:${listeEtudiants[i].prenom}
                age:${listeEtudiants[i].age}
                cne:${listeEtudiants[i].cne}`);
    console.log("-------------------------");
}
//Etudiant.etudier();
//Professeur.enseigner();


