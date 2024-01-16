let pokemon={
    nom:"",
    type:"",
    pointsDeVie:0,
    attaque:0,
    defense:0,
    image:""
}
function affichage (pokemon){
    let newP = document.createElement("p");
    document.body.appendChild(newP);
    newP.textContent = `nom: ${pokemon.nom}, type: ${ pokemon.type}, points de vie: ${pokemon.pointsDeVie} HP , attaque: ${pokemon.attaque}, defense: ${pokemon.defense}`;
    let image = document.createElement("img");
    image.src = pokemon.image;
    document.body.appendChild(image);
}
class Pixelmon{
    constructor(nom,type,pointsDeVie,attaque,defense,image){
        this.nom=nom;
        this.type=type;
        this.pointsDeVie=pointsDeVie;
        this.attaque=attaque;
        this.defense=defense;
        this.image=image;
    }
}
let evoli =new Pixelmon("Évoli","Normal",55,55,50,"https://assets.pokemon.com/assets/cms2/img/pokedex/full/133.png")
let psykokwak = new Pixelmon("Psykokwak","Eau",50,52,48,"https://assets.pokemon.com/assets/cms2/img/pokedex/full/054.png")
let triopikeur = new Pixelmon("Triopikeur","Sol",35,100,50,"https://www.pokemontrash.com/images/pokemon/lolwtf.jpg")
let mimiqui = new Pixelmon("Mimiqui","Spectre/Fée",55,90,80,"https://assets.pokemon.com/assets/cms2/img/pokedex/full/778.png")

let tableau = [evoli,psykokwak,triopikeur,mimiqui];

for (let i = 0; i<tableau.length; i++){
    affichage(tableau[i])
}

tableau.forEach((pokemon)=>{
    affichage(pokemon)
})

for (let pokemon in tableau){
    affichage(tableau[pokemon])
}

// function affichage (){
//     let newPi = document.createElement("p");
//     document.body.appendChild(newPi);
//     newPi.textContent = `nom: ${Pixelmon.nom}, type: ${Pixelmon.type}, points de vie: ${Pixelmon.pointsDeVie} HP , attaque: ${Pixelmon.attaque}, defense: ${Pixelmon.defense}`;
//     let image = document.createElement("img");
//     image.src = Pixelmon.image;
//     document.body.appendChild(image);
// }
// affichage();
