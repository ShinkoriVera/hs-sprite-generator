var selectedchar = selectchar.characters;
var charlist = [];
for (character of selectedchar) {
    charlist.push(character)
};

const compareRandom = ( ) => Math.random() - 0.5;
const randomInteger = (min, max) => Math.round(min - 0.5 + Math.random() * (max - min + 1));

function generatepair() {
    var choice = selectedchar.options[selectedchar.selectedIndex];
    var randchar = charlist.filter(c => c !== choice);
    randchar.sort(compareRandom);
    document.querySelector('#resultpair').textContent = choice.text + "+" + randchar[0].text;
};

function generatecolor() {
    var randH = randomInteger(0,360);
    var randS = randomInteger(60,100);
    var randL = randomInteger(35,70);
    document.getElementById("randcolor").style.backgroundColor = "hsl(" + randH + "," + randS + "%," + randL + "%)";
};

function generatesprite() {
    generatepair();
    generatecolor();
};

document.querySelector('#startgen').addEventListener('click', generatesprite);
