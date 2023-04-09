// const fs = require('fs');

// fs.copyFileSync("source.txt","destination.txt");
const supervillains = require('supervillains');
var superheroes = require('superheroes');

var superVillains = supervillains.random();
var superVillains = supervillains.all;
var superHeroList = superheroes.all;

var superHeroesNames = superheroes.random();


console.log(superHeroesNames);
console.log(superHeroList);
console.log(superVillains);