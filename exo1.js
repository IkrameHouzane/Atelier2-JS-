//la classe principale(mère)
function Voiture(model,marque,année,type,carburant){
    this.model=model; 
    this.marque=marque;
    this.année=année;
    this.type=type;
    this.carburant=carburant;
}
Voiture.prototype.afficher = function(){
    console.log(`Infos de Voiture : model :${this.model}
                                    marque :${this.marque}
                                    année : ${this.année}
                                    type : ${this.type}
                                    carburant : ${this.carburant}`);
}
//liste des voitures
var listeCars = [
 new Voiture("Civic","Honda",2018,"Berline","Essence"),
 new Voiture("Corolla","Toyota",2022,"Berline","Hybride"),
 new Voiture("Model 3","Tesla",2023,"Berline","Electrique"),
 new Voiture("A4","Audi",2016,"Berline","Essence")
];
//classe Hyndai
function Hyndai (model,marque,année,type,carburant,série,hybride){
          Voiture.call(this,model,marque,année,type,carburant);
          this.série=série;
          this.hybride=hybride;
    
}
Hyndai.prototype = Object.create(Voiture.prototype);
Hyndai.prototype.constructor = Hyndai;
Hyndai.prototype.alarmer=function(){
    console.log(`${this.model} série ${this.série} émet une alarme !`);
    };
 //class Ford   
function Ford(model,marque,année,type,carburant,options){
          Voiture.call(this,model,marque,année,type,carburant);
          this. options=options;
}
Ford.prototype = Object.create(Voiture.prototype);
Ford.prototype.constructor = Ford;
Ford.prototype.afficher=function(){
    Voiture.prototype.afficher.call(this);
    console.log(`les options: ${this.options}`);
}
//ajout des voitures de marque Ford et Hyndai pour tester l'héritage
listeCars.push(new Hyndai("Tucson", "Hyndai", 2021, "SUV", "Essence", "NX4", true));
listeCars.push(new Ford("F-150", "Ford", 2017, "Pickup", "Diesel", ["4x4", "Caméra recul"]));

// affichage avant le tri 
console.log("Affichage avant le tri :");
for (let i=0; i<listeCars.length; i++) {
    listeCars[i].afficher();
    console.log("--------------------------------");
}

listeCars.sort((voiture1,voiture2)=>voiture1.année-voiture2.année);
// affichage après le tri 
console.log("Affichage après le tri :");
for (let i=0; i<listeCars.length; i++) {
    listeCars[i].afficher();
    console.log("--------------------------------");
}


//Tester la fct alarmer
/*
var hyndaiCar = new Hyndai("Ioniq 5", "Hyndai", 2023, "SUV", "Electrique", "Premium", true);
hyndaiCar.afficher();
hyndaiCar.alarmer();
*/