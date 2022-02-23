console.log("Задача №1 Абсолютное значение");

let a;
function absValue(a){
    if (a >= 0) return a;
    else return a*(-1);
}

console.log(`absValue(${-2})`);
console.log(absValue(-2));

console.log(`absValue(${100})`);
console.log(absValue(100));

console.log(`absValue(${0})`);
console.log(absValue(0));


console.log("");
console.log("Задача №2 Палиндром");

let word = prompt('Введите слово:', 'довод');
let arrWord = [];
arrWord = word.slice('');  //разбиение строки по букве в массив
let lastIndex = arrWord.length - 1;
let firstIndex = 0;

function isPalindrome(arr){
    while(lastIndex - firstIndex > 1){
        if (arr[firstIndex] == arr[lastIndex]){
            firstIndex ++;
            lastIndex --;
        }else return false;
    }
    return true;
}
console.log(`isPalindrome("${arrWord}")\n`, isPalindrome(arrWord));


console.log("");
console.log("Задача №3 Сложение матриц");

let arr1 = [[1,2],[3,4]];
let arr2 = [[9,8],[7,6]];
let arr3 = [[1,2]];

function matrixAddition(a1, a2){
    let i = 0;
    if (a1.length != a2.length || a1[0].length != a2[0].length || a1[1].length != a2[1].length){ // проверка сообветствия строки и столбцы
        return 'операция невыполнима';
    }else {
        return (`${a1[0][0] + a2[0][0]}\t${a1[0][1] + a2[0][1]}\n${a1[1][0] + a2[1][0]}\t${a1[1][1] + a2[1][1]}`);
    }
}

console.log(`matrixAddition([[${arr1[0]}],[${arr1[1]}]], [[${arr2[0]}],[${arr2[1]}]])\n${matrixAddition(arr1, arr2)}`);
console.log(`matrixAddition([[${arr2[0]}],[${arr2[1]}]], [${arr3[0]}])\n${matrixAddition(arr2, arr3)}`);


console.log("");
console.log("Задача №4 Работа с объектом");

let student = {
    group: 201,
    last_name: "Иванов",
    first_name: "Иван",
    };

let features = ""; // все свойства обьекта
for (let key in student){  //перебов св-тв обьекта
    features = features + key + ", ";
}

console.log('Список свойств: ',features);
console.log(`Студент ${student.first_name} ${student.first_name} учится в ${student.group} группе`);


console.log("");
console.log("Задача №5 Переключение элементов");





