
// Deux façon de créer un tableau

myArray = [];
myArray2 = ['Riri','Fifi', 'Loulou'];

let myArray3 = new Array(5);

console.log(myArray);
console.log(myArray2);
console.log(myArray3);

console.log("élément d'index 1: " + myArray2[1]);

// Ajouter un élément:
myArray.push('toto');
console.log(myArray);

// Supprimer un élément: utilisation de 'splice()'. Le premier paramètre est l'index du premier élément à supprimer, 
// le 2nd est le nomnbre d'éléments à supprimer
myArray2.splice(1,1);
console.log(myArray2);

// Parcourir un tableau
console.log('Parcourir un tableau: ');

// Avec un for
for(element of myArray2){
    console.log(element);
}

console.log('_____________________');

// Avec un .forEach
let x = 0
myArray2.forEach( element => {
    console.log(x + ": " + element);
    x ++;
});

// Exemple: fonction qui compte le nombre d'éléments d'un tableau
const nbrElement = (array) => {
    let y = 0;
    array.forEach(() => y++);
    return y;
}

console.log("nombre d'éléments dans mon tableau " + nbrElement(myArray2));

// La fonction map():
// Permet de dupliquer un tableau en appliquant la meme opération sur chacun des éléments du tableau

console.log(' _________________fonction map _________________');

const nombres = [1,2,3,4,5,6];

const nombresAuCarres = nombres.map(function(nombre) {
    return nombre * nombre;
})

const nombresAuCarres2 = nombres.map(nombre => nombre * nombre);

console.log(nombresAuCarres);
console.log(nombresAuCarres2);

// La fonction filter():
// Permet de dupliquer un tableau en appliquant un filtre lié à une condition 

console.log(' _________________fonction filter() _________________');

const words = ['spray', 'elite', 'exuberant', 'destruction', 'present'];

const wordsFilter = words.filter(function (word) {
    return word.length > 6;
});

const wordsFilter2 = words.filter(word => word.length > 6);

console.log(wordsFilter)
console.log(wordsFilter2)

const filtreTexte = (entreeUtilisateur) => {
    return words.filter (
        element => element.indexOf(entreeUtilisateur) !== -1
    );
};
console.log(filtreTexte('es'))

// Fonction reduce() -> Réduire un tableau à une seule valeur
console.log(' _________________fonction reduce() _________________');

const arrayToReduce = [1,2,3,4]

const sumArray = arrayToReduce.reduce((accumulator, currentValue) => 
    accumulator + currentValue, 0
);

console.log(sumArray)

// Somme de tous les chiffres au carré
const reduce = arrayToReduce.reduce(
    (accumulator, currentValue, index) => {
        console.log(`Index: ${index}, Carré: ${currentValue * currentValue}`)
        return accumulator + currentValue * currentValue;
    }, 0
);

console.log(reduce)
