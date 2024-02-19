myArray = [12,9,14,16];

function moyenne (tableau) {
    let x = 0;
    let nbrElements = 0;

    for(let i = 0; i < tableau.length; i++){
        // x += array[i];
        x = x + tableau[i];
        nbrElements ++;
    }

    return x / nbrElements;
}

console.log(moyenne(myArray));

myArray2 = ['a', 12, 'e'];
myArray3 = 3;

console.log(moyenne(myArray2));
console.log(moyenne(myArray3));

// Fonction avec vérification
function moyenneAvecVerification (tableau) {
    
    if(Array.isArray(tableau)){
        let x = 0;
        let nbrElements = 0;
    
        for(let i = 0; i < tableau.length; i++){
            if(!isNaN(tableau[i])){
                // x += array[i];
                x = x + tableau[i];
                nbrElements ++;
            }else {
                return 'Le tableau doit contenir uniquement des chiffres'
            }
        }
    
        return x / nbrElements;
    }
    else return 'Attention, la fonction attend un tableau !'
}

console.log('_____________________________')
console.log(moyenneAvecVerification(myArray3))
console.log(moyenneAvecVerification(myArray))
console.log(moyenneAvecVerification(myArray2))

// Fonction avec vérification
function moyenneAvecTryCatch (tableau) {
    
    if(Array.isArray(tableau)){
        let x = 0;
        let nbrElements = 0;
    
        for(let i = 0; i < tableau.length; i++){
           try {
                // x += array[i];
                x = x + tableau[i];
                nbrElements ++;
           }   
            catch {
                return 'Le tableau doit contenir uniquement des chiffres'
            }
        }
    
        return x / nbrElements;
    }
    else return 'Attention, la fonction attend un tableau !'
}

console.log('____________Avec Try catch_________________')
console.log(moyenneAvecTryCatch(myArray3))
console.log(moyenneAvecTryCatch(myArray))

// Avec un try / catch on aura un retour de type 'Nan', qui n'est pas considéré comme une 'erreur' par JS, donc on ne passe pas dans le 'catch'
// Dans notre cas, il faudra donc utiliser la fonction avec une vérif '!isNaN()' , comme sur l'exemple précédent

console.log(moyenneAvecTryCatch(myArray2))


// Les fonctions fléchées
console.log('_________Fonctions fléchées_____________');

function somme (a, b){
    return a + b;
}

// return implicite
const sommeFlechee = (a, b) => a + b;

// Quand on utilise des acolades, on a besoin d'utiliser un 'return' si l'on souhaite un retour
const sommeFlechee2 = (a, b = 10) => {
    return a + b
}

console.log(somme(1,2));
console.log(sommeFlechee(1,2));
console.log(sommeFlechee2(1,2));

console.log('_________Valeurs pas défaut_____________');

console.log(sommeFlechee2(1));
console.log(sommeFlechee2(1,15));
