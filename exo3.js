//classe Vecteur2D
class Vecteur2D{
    constructor(x=0,y=0){
        this.x=x;
        this.y=y;
    }
    Afficher(){
      console.log (`Vecteur(x: ${this.x}, y: ${this.y})`);
    }
    Addition(vect){
            return new Vecteur2D(this.x + vect.x, this.y + vect.y);
          }
}
let Vect1= new Vecteur2D();
let Vect2= new Vecteur2D(2,3);
let Vect3=new Vecteur2D(1,2);
Vect1.Afficher();
Vect2.Afficher();
Vect3.Afficher();
let somme= Vect2.Addition(Vect3);
somme.Afficher();
//classe Rectangle
class Rectangle{
    constructor(largeur=0,longueur=0,nom="Rectangle"){
              this.largeur=largeur;
              this.longueur=longueur;
              this.nom=nom;
    }
    Afficher(){
        console.log(`
                  ${this.nom}: 
                  largeur= ${this.largeur}
                  longueur= ${this.longueur}`);
    }
    Surface(){
        return this.largeur*this.longueur;
    }
}
let rect1=new Rectangle();
let rect2=new Rectangle(2,3);
rect2.Afficher();
console.log("La surface du rectangle : "+rect2.Surface());
//classe 
class Carre extends Rectangle{
    constructor(cote=0,nom="Carre"){
        super(cote,cote,nom);
        
}
}
let carre1= new Carre ();
let carre2= new Carre (2);
carre2.Afficher();
console.log("la surface du carré:" +carre2.Surface());

//classe Point
class Point{
    constructor(x=0.0,y=0.0){
        this.x=x;
        this.y=y;
    }
}
//classe Segment
class Segment{
    constructor(x1,x2,y1,y2){
      this.orig=new Point(x1,y1);
      this.extrem=new Point(x2,y2);
    }
    Afficher(){
        console.log("Les coordonnées de ce segment : origine : x = " + this.orig.x + " et y = " + this.orig.y + " et extrémité : x = " + this.extrem.x + " et y = " + this.extrem.y);
    } 
}
let segm=new Segment(1,2,3,4);
segm.Afficher();