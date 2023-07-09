var charselection = selectchar.characters; // указываю выпадающий список
var charlist = []; // задаю список персонажей
for (character of charselection) {
    charlist.push(character)
}; // помещаю в список персонажей варианты выпадающего списка

const compareRandom = ( ) => Math.random() - 0.5; // прописываю рандом для генерации второго персонажа
const randomInteger = (min, max) => Math.round(min - 0.5 + Math.random() * (max - min + 1)); // прописываю рандом для значений цвета

function generatepair() {
    var choice = charselection.options[charselection.selectedIndex]; // даю знать, какой персонаж выбран пользователем в списке
    var randchar = charlist.filter(c => c !== choice); // создаю список персонажей для рандома, исключая из него выбранного
    randchar.sort(compareRandom); // сортирую список в случайном порядке
    document.querySelector('#resultpair').textContent = choice.text + "+" + randchar[0].text; // вывожу текст с именем выбранного персонажа и первого в рандомном списке
};

function generatecolor() {
    var randH = randomInteger(0,360); // случайное значение оттенка
    var randS = randomInteger(60,100); // случайное значение насыщенности
    var randL = randomInteger(35,70); // случайное значение светлоты
    document.getElementById("randcolor").style.backgroundColor = "hsl(" + randH + "," + randS + "%," + randL + "%)"; // вставка рандомного цвета из значений выше
};

function generatesprite() {
    generatepair();
    generatecolor();
}; //общая функция

document.querySelector('#startgen').addEventListener('click', generatesprite); // запуск генерации по нажатию кнопки
