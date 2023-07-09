var betaKone = "Джон Эгберт";
var betaKtwo = "Дейв Страйдер";
var betaKthree = "Роуз Лалонд";
var betaKfour = "Джейд Харли";
var alphaKone = "Джейн Крокер";
var alphaKtwo = "Джейк Инглиш";
var alphaKthree = "Рокси Лалонд";
var alphaKfour = "Дирк Страйдер";
var betaTone = "Арадия Мегидо";
var betaTtwo = "Таврос Нитрам";
var betaTthree = "Соллукс Каптор";
var betaTfour = "Каркат Вантас";
var betaTfive = "Непета Лейжон";
var betaTsix = "Канайя Марьям";
var betaTseven = "Терези Пайроп";
var betaTeight = "Вриска Серкет";
var betaTnine = "Эквиус Заххак";
var betaTten = "Гамзии Макара";
var betaTeleven = "Эридан Ампора";
var betaTtvelve = "Фефери Пейшес";
var alphaTone = "Дамара Мегидо";
var alphaTtwo = "Руффио Нитрам";
var alphaTthree = "Митуна Каптор";
var alphaTfour = "Канкри Вантас";
var alphaTfive = "Меулин Лейжон";
var alphaTsix = "Поррим Марьям";
var alphaTseven = "Латула Пайроп";
var alphaTeight = "Аранея Серкет";
var alphaTnine = "Хоррус Заххак";
var alphaTten = "Курлоз Макара";
var alphaTeleven = "Кронус Ампора";
var alphaTtvelve = "Миинна Пейшес";


var selectedchar = selectchar.characters;
var charlist = document.getElementById('chars').value;
var choice = selectedchar.options[selectedchar.selectedIndex];

var randcharlist = charlist != choice;

const compareRandom = ( ) => Math.random() - 0.5;
const randomInteger = ( min, max ) => Math.round(min - 0.5 + Math.random() * (max - min + 1));

function generatepair() {
    var randchar = [];
    randchar = randchar.concat(randcharlist);
    randchar.sort(compareRandom);
    document.querySelector('#resultpair').textContent = choice.text + "+" + randchar.text;
}

document.querySelector('#startgen').addEventListener('click', generatepair);