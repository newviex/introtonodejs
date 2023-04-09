// const fs = require('fs');

// fs.copyFileSync("source.txt","destination.txt");

var superheroes = require('superheroes');

var superHeroList = superheroes.all;

var superHeroesNames = superheroes.random();

console.log(superHeroesNames);
console.log(superHeroList);