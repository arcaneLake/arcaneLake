"use strict";

function favoriteAnimal(animal) {
    document.write(animal + " is my favorite animal!");
}

favoriteAnimal("Goat");

function add7(num) {
    console.log(num + 7);
}
add7(10);

function capitalize(string1) {
    let string2 = string1.charAt(0).toUpperCase() + string1.slice(1).toLowerCase();
    console.log(string2);
}
capitalize("tesTing");

function lastLetter(sometext)  {
    let modifiedtext = sometext.slice(-1);
    console.log(modifiedtext);
}
lastLetter("Geisner");