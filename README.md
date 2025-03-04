# Rapport de l'Atelier 2 : JavaScript et Programmation Orientée Objet (POO)

## Introduction
Ce rapport présente les travaux réalisés lors de l'Atelier 2, qui avait pour objectif de se familiariser avec les concepts de la Programmation Orientée Objet (POO) en JavaScript. Les exercices ont permis de mettre en pratique les notions de classes, d'héritage, de méthodes, et de manipulation d'objets en JavaScript.

## Exercice 1 : Gestion des Voitures

### Objectif
L'objectif de cet exercice était de créer une classe `Voiture` avec des attributs spécifiques, d'implémenter l'héritage avec deux sous-classes (`Hyundai` et `Ford`), et de trier les voitures par année.

### Réalisation
1. Classe Voiture : Nous avons défini une classe `Voiture` avec les attributs `model`, `marque`, `année`, `type`, et `carburant`.
2. Liste de voitures : Une liste de voitures a été créée pour stocker plusieurs instances de la classe `Voiture`.
3. Héritage : Nous avons créé deux sous-classes `Hyundai` et `Ford` qui héritent de la classe `Voiture`. La classe `Hyundai` a un attribut supplémentaire `hybride` et une méthode `alarmer()`, tandis que la classe `Ford` a un attribut `options` (un tableau).
4. Tri des voitures : Les voitures ont été triées par ordre croissant selon leur année.

## Exercice 2 : Gestion des Étudiants et des Professeurs
### Objectif
Cet exercice consiste à créer des objets Étudiant et Professeur, à leur ajouter des méthodes spécifiques, et à trier les étudiants par ordre alphabétique.

### Réalisation
1. Objets Étudiant et Professeur : Nous avons créé deux objets natifs Étudiant et Professeur avec des attributs tels que nom, prenom, age, cne pour l'étudiant, et cin pour le professeur.

2. Méthodes : Une méthode étudier() a été ajoutée à l'objet Étudiant, et une méthode enseigner() a été ajoutée à l'objet Professeur.

3. Tri des étudiants : Les étudiants ont été triés par ordre alphabétique selon leur nom et prénom.

## Exercice 3 : Manipulation des Classes en JavaScript (ES6)
### Objectif
Cet exercice vise à manipuler des classes en JavaScript en utilisant le standard ECMAScript 6 (ES6). Nous devions créer des classes pour représenter des vecteurs, des rectangles, des carrés, des points et des segments.

### Réalisation
1. Classe Vecteur2D : Nous avons défini une classe Vecteur2D avec des coordonnées par défaut x et y. Une méthode d'affichage et une méthode pour additionner deux vecteurs ont été ajoutées.

2. Classe Rectangle et Carré : Nous avons créé une classe Rectangle avec des attributs longueur et largeur, et une méthode pour calculer la surface. La classe Carré hérite de Rectangle et surcharge l'attribut nom.

3.Classe Point et Segment : Nous avons défini une classe Point pour représenter un point dans le plan, et une classe Segment composée de deux instances de Point.

## Exercice 4 : Mini Blog avec POO
### Objectif
L'objectif de cet exercice était de créer un mini blog en utilisant les concepts de POO. Nous devions implémenter des fonctionnalités pour ajouter des posts, lister les posts, et gérer les utilisateurs.

### Réalisation
1. home.html : Page principale qui permet d'afficher les blogs et les ajouter .
2. sign_up.html : Page d'inscription
3. login.html: Page de connexion
4. blog.html : Page affichant les blogs de l'utilisateur connecté et lui permet le logout .


### Conclusion
Cet atelier a été une excellente opportunité pour approfondir les concepts de la Programmation Orientée Objet en JavaScript. Nous avons appris à créer des classes, à utiliser l'héritage, à manipuler des objets, et à implémenter des fonctionnalités complexes en utilisant des tableaux JSON. 

