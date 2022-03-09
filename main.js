
console.log("Задача №1 Абсолютное значение");

let a;
function absValue(a){
    if (a >= 0) return a;
    else return a * (-1);
}

console.log(`absValue(${-2})`);
console.log(absValue(-2));

console.log(`absValue(${100})`);
console.log(absValue(100));

console.log(`absValue(${0})`);
console.log(absValue(0));


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


console.log("Задача №3 Сложение матриц");

let arr1 = [[1,2],[3,4]];
let arr2 = [[9,8],[7,6]];
let arr3 = [[1,2]];

let arrRes ="";
let numSrt = 0; 
let elemStr = 0;

function matrixAddition(a1, a2){
    let i = 0;
    if (a1.length != a2.length || a1[0].length != a2[0].length || a1[1].length != a2[1].length){ // проверка сообветствия строки и столбцы
        return 'операция невыполнима';
    }else {
        while ( numSrt < a1.length ){
            while ( elemStr < a1[0].length ){
                arrRes = arrRes + `${a1[numSrt][elemStr] + a2[numSrt][elemStr]}\t`;
                elemStr ++;
            }
            arrRes = arrRes + '\n';
            numSrt ++;
            elemStr = 0;
        }
        return arrRes;
    }
}
console.log(matrixAddition(arr1, arr2));


console.log("Задача №4 Работа с объектом");

let student = {
    group: 201,
    last_name: "Иванов",
    first_name: "Иван",
    };

let features = ""; // все свойства обьекта
for (let key in student){  //перебор св-тв обьекта
    features = features + key + ", ";
}

console.log('Список свойств: ',features);
console.log(`Студент ${student.first_name} ${student.first_name} учится в ${student.group} группе`);


console.log("Задача №5 Переключение элементов");

let arrImg = document.querySelectorAll('.img');// массив картинок
let butPrevious = document.getElementById("previous");
let butNext = document.getElementById("next");
let num = 0;

arrImg[num].style.display = 'flex';

butNext.addEventListener("click", () => {  //кнопла следующий слайд
    if(num < arrImg.length - 1){
        arrImg[num].style.display = 'none';
        num++;
        arrImg[num].style.display = 'flex';
    }else {
        arrImg[num].style.display = 'none';
        num = 0;
        arrImg[num].style.display = 'flex';
    }
})

butPrevious.addEventListener("click", () => { // кнопка предыдущий слайд
    if(num > 0){
        arrImg[num].style.display = 'none';
        num--;
        arrImg[num].style.display = 'flex';
    }else {
        arrImg[num].style.display = 'none';
        num = arrImg.length - 1;
        arrImg[num].style.display = 'flex';
    }
})

