// 3 types -> const, var ou let

const myConst = 6;
let myLet = 4;
var myVar = 9;

console.log(myConst, myLet, myVar)

function example(){

    if(true){
        var varaibaleVar = "Je suis une variable var";
        let varaibaleLet = "Je suis une variable let";
        const varaibaleConst = "Je suis une constante";

        console.log("A l'intérieur du bloc");
        console.log("variable var" + varaibaleVar);
        console.log("variable let" + varaibaleLet);
    }

    // A l'extérieur du bloc:
    console.log("A l'extérieur du bloc: ");
    console.log("variable var" + varaibaleVar);
   
    // Ici j'ai une erreur car la variable LET a une portée de bloc, elle ne sera disponible que dans le bloc ou elle a été créée (dans notre cas, uniquement disponible dans le bloc IF)
    console.log("variable let" + varaibaleLet);

    // Erreur, le 'const' a la meme portée qu'un 'let'
    // console.log("const" + varaibaleConst);

}

example()