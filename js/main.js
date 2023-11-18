
// Робота з консолю

// console.log("Mашина");
// console.info("Mашина");
// console.error("Mашина");
// console.warn("Mашина"); 

// Зміні

// var num1 = 5;
// num1 = 6;
// const num2 = 5;
// let num3 = 7;
// num3 = 9;

// Типи даних

// let number1 = 1; //Число, Number
// let number2 = "2"; // Cтрока, String
// let number3 = true; // Булев, Boolean
// let number4; // Невизначений тип, Undefined
// let block = document.querySelector("Mашина");// Null
//console.log(block);
// BigInt,Symbol,Null,Object,function

//Mатематичні дії

// let cherry = 5;
// console.log("Результат:" + (cherry + cherry - cherry * cherry/ cherry % cherry));
// cherry += 7;
// console.log("Результат:" + cherry);
// cherry++;
// console.log("Результат:" + cherry);
// let cherry1 = "Вишня";
// let cherry2 = "Черешня";
// console.log("Результат:" + (cherry + cherry1 + cherry2));
// console.log("Math:" + Math.Pi);
// console.log("Math:" + Math.E);
// console.log("Math:" + Math.min(2,3,5,0,-1,7,8,9));

// Умовні оператори

// let number = 15;
// let num = true;
// if(number == 5 && num == true){
//     console.log("1");
// }else if(number > 5 || num == false){
//     console.log("2");
// }else if(number < 5){
//     console.log("3");
// }else{
//     console.log("Erorr");
// }

// let stroka = "word";
// switch(stroka){
//     case "1":
//         console.log("Результат: 1");
//         break;
//     case "2":
//         console.log("Результат: 2");
//         break;
//     case "word":
//         console.log("Результат: word");
//         break;
//     case "4":
//         console.log("Результат: 4");  
//         break;
//     default:
//         console.log("Erorr");  
//         break;
// }

// Масиви даних, одновимірні та багатовимірні масиви

// var arr = [12,true,false,"Cтрока",-11];
// console.log(arr);
// arr[2] = 9;
// console.log(arr[2]);
// console.log(arr.length);
// var matrix = [[6,7,8],[5,3,4],[9,1,2]];
// console.log(matrix[1][2]);

//Цикли і оператори Циклів

// for (var i = 0; i < 3; i++) { 
//     console.log(i);
// }

// var j = 8;
// while (j > 3) { 
//   console.log(j);
//   j-=1;
// }

// var x = 0;
// do {
//     console.log(x);
//     x++;
// } while (x > 3);

// for (var y = 10; y <= 20; y++) { 
//     if(y > 15)
//         break;
//     console.log(y);
// }

// for (var h = 10; h <= 20; h++) { 
//     if(h % 2 == 0)
//         continue;
//     console.log(h);
// }

// var arr = [12,2,5,7,9];

// for(var f = 0; f < arr.length; f++){
//     arr[f] *=2;
//     console.log(+ (f + 1) + arr[f]);
// }

// Спливаючі вікна (alert,prompt,confirm)

// alert("Привіт");
// var data = confirm("Хочете зареєструватися?");
// console.log(data);
// if(data){
//     alert("Дякую!");
// }
// var data1 = prompt("Cкільки вам років?", 18);
// console.log(data1);
// var person = null;
// if(confirm("Хочете зареєструватися?")){
//     person = prompt("Як вас звати?");
//     alert("Дякую"+ person);
// }else{
//     alert("Помилка!")
// }

// Функції

// function info(name){
//     console.log("Привіт "+ name);
// }
// info("Роман");

// function summa(a,b){
//     var res = a + b;
//     info(res);
// }
// summa(7,4);

// function summaarr(arr){
//     var sum = 0;
//     for(var i = 0; i < arr.length;i++){
//         sum += arr[i];
//     }
//     console.log(sum);
//     return sum;
// }
// var array =[1,2,3];
// var sumres = summaarr(array);
// console.log(sumres);

// var num = 10;
// function infonum(){
//     console.log(num);
// }
// infonum();

// Події та обробник подій у JavaScript

// var counter = 0;
// function onclickButton(element) {
//     counter++;
//     console.log(counter);
//     element.innerHTML = "Рахунок:" + counter;
//     element.style.background = "red"; 
//     element.style.color = "green";
//     element.style.cssText = "border-radius: 17 px;font-size: 20px";
//     console.log(element.name);
// }
// function onInput(element){
//     if(element.value == "Hello")
//         alert("Привіт");
//     console.log(element.value);
// }

// Управління HTML і обробка форм

// var text = document.getElementById('text');
// text.title = "New text";
// console.log(text.title);
// text.style.color = "red";
// text.style.backgroundColor = "green";
// document.getElementById('text').style.color = "blue";
// var spans = document.getElementsByClassName('simple-text');
// for(i = 0; i <spans.length; i++){
//     console.log(spans[i].innerHTML);
// }

// document.getElementById('main-form').addEventListener("submit",checkForm);
// function checkForm(event){
//     event.preventDefault();
//     var element = document.getElementById('main-form');
//     var name = element.name.value;
//     var pass = element.pass.value;
//     var repass  = element.repass.value;
//     var state = element.state.value;
//     console.log(name + pass + repass + state);
//     var fail ="";
//     if(name == "" || pass == "" || state ==""){
//         fail ="Заповніть всі поля:";
//     }else if(name.length <=2 || name.length > 50){
//         fail ="Введіть коректне ім'я:";
//     }else if(pass != repass){
//         fail ="Паролі повинні збігатися:";
//     }else if(pass.split("&").length > 1){
//         fail ="Некоректний пароль:";
//     }
//     if(fail != ""){
//         document.getElementById('error').innerHTML = fail;
//         return false;
//     }else{
//         alert("Надіслано");
//         window.location = 'https://google.com';
//         return false;
//     }
// }

// Створення таймерів та інтервалів

// var id = setInterval(my_func,1000)
// var counter = 0;
// function my_func(){
//     counter++;
//     console.log("Counter:" +  counter);
//     if(counter == 3)
//         clearInterval(id);
// }
// var counter1 = 0;
// setInterval(function(){
//     counter1++;
//     console.log("Counter:" +  counter1);
// },1500);
// setTimeout(function(){
//     console.log("Timer is working!");
// },2000);
// setTimeout(my_func1,2000);
// function my_func1(){
//     console.log("Timer is working!");
// }

// Створення об'єктів і вбудовані функції

// var date = new Date();
// console.log(date.getFullYear());
// console.log(date.getMonth());
// console.log("Час зара:" + date.getHours() + ":" + date.getMinutes() + ":" + date.getSeconds());
// date.setHours(15);
// date.setMinutes(21);
// date.setSeconds(46)
// console.log("Час створений:" + date.getHours() + ":" + date.getMinutes() + ":" + date.getSeconds());
// var arr = [7,3,-5,2,7,3,2,7,9];
// console.log(arr.join(", "));
// console.log(arr.sort());
// console.log(arr.reverse());
// console.log(arr.reverse().join(", "));
// var stroka = arr.reverse().join(", ");
// console.log(stroka.split(", "));
// class Person{
//     constructor(name,age,email){
//         this.name = name;
//         this.age = age;
//         this.email = email;
//     }
//     info(){
//         console.log(this.name + this.age + this.email)
//     }
// }
// var andrew = new Person("Andrew",34,true);
// console.log(andrew.name);
// console.log(andrew);
// andrew.info();

// const fruits = ["Banana", "Orange", "Apple", "Mango"];
// let text2 = fruits;
// console.log(text2);
// let text = fruits.reverse().join();
// console.log(text);
// let text1 = fruits;
// console.log(text1);


    // const canFormString = function (S, P1, P2) {
    //   let ptrS = 0; // Вказівник для рядка S
    //   let ptrP1 = 0; // Вказівник для рядка P1
    //   let ptrP2 = 0; // Вказівник для рядка P2
  
    //   // Перевірка, чи можливо сформувати рядок S з рядків P1 та P2
    //   while (ptrS < S.length) {
    //     // Перевіряємо, чи символ з рядка P1 збігається зі символом з рядка S
    //     if (ptrP1 < P1.length && P1[ptrP1] === S[ptrS]) {
    //       ptrP1++;
    //     }
    //     // Перевіряємо, чи символ з рядка P2 збігається зі символом з рядка S
    //     else if (ptrP2 < P2.length && P2[ptrP2] === S[ptrS]) {
    //       ptrP2++;
    //     }
    //     // Якщо символ не збігається ні з одним рядком, то не можна сформувати рядок S
    //     else {
    //       return false;
    //     }
  
    //     ptrS++; // Переходимо до наступного символу в рядку S
    //   }
  
    //   // Перевірка, чи всі символи з P1 та P2 були використані
    //   if (ptrP1 === P1.length && ptrP2 === P2.length) {
    //     return true;
    //   } else {
    //     return false;
    //   }
    // };
    // const s = 'radency';
    // const p1 = 'rdnc';
    // const p2 = 'aey';
    // // Викликаємо внутрішню функцію для перевірки можливості сформувати рядок s з p1 та p2
    // //return canFormString(s, p1, p2);
    // const result = canFormString(s, p1, p2);
    // console.log(result); // Виведе: true
 
  
  // Приклад використання функції
  //const S = 'radency';
 // const P1 = 'rdnc';
  //const P2 = 'aey';
  
  //const result = stringChecker(S, P1, P2);
  //console.log(result); // Виведе: true
// const readline = require('readline-sync');

  // const stringChecker = function (s, p1, p2) {
  //   let pointerS = 0; // Вказівник для рядка s
  //   let pointerP1 = 0; // Вказівник для рядка p1
  //   let pointerP2 = 0; // Вказівник для рядка p2
  
  //   // Перевірка, чи можливо сформувати рядок s з рядків p1 та p2
  //   while (pointerS < s.length) {
  //     // Перевіряємо, чи символ з рядка p1 збігається зі символом з рядка s
  //     if (pointerP1 < p1.length && p1[pointerP1] === s[pointerS]) {
  //       pointerP1++;
  //     }
  //     // Перевіряємо, чи символ з рядка p2 збігається зі символом з рядка s
  //     else if (pointerP2 < p2.length && p2[pointerP2] === s[pointerS]) {
  //       pointerP2++;
  //     }
  //     // Якщо символ не збігається ні з одним рядком, то не можна сформувати рядок s
  //     else {
  //       return false;
  //     }
  
  //     pointerS++; // Переходимо до наступного символу в рядку s
  //   }
  
  //   // Перевірка, чи всі символи з p1 та p2 були використані
  //   if (pointerP1 === p1.length && pointerP2 === p2.length) {
  //     return true;
  //   } else {
  //     return false;
  //   }
  // };
  function stringChecker (s, p1, p2) {
    if (p1.length + p2.length !== s.length) {
      return false;
  }

  const сhecker = Array.from({ length: p1.length + 1 }, () => Array(p2.length + 1).fill(false));

  for (let i = 0; i <= p1.length; i++) {
      for (let j = 0; j <= p2.length; j++) {
          if (i === 0 && j === 0) {
            сhecker[i][j] = true;
          } else if (i === 0) {
            сhecker[i][j] = сhecker[i][j - 1] && p2[j - 1] === s[i + j - 1];
          } else if (j === 0) {
            сhecker[i][j] = сhecker[i - 1][j] && p1[i - 1] === s[i + j - 1];
          } else {
            сhecker[i][j] = (сhecker[i][j - 1] && p2[j - 1] === s[i + j - 1]) || (сhecker[i - 1][j] && p1[i - 1] === s[i + j - 1]);
          }
      }
  }

  return сhecker[p1.length][p2.length];
};

console.log(stringChecker('radency', 'rdnc', 'aey'));
  
  
console.log(stringChecker('w27y7', '27', 'w7y')); // Виведе: true
console.log(stringChecker('J8ipW8T7MqFjWB5rfpw', 'J8ipW8T7M', 'qjfFrWwpB5')); // Виведе: true
console.log(stringChecker('6SCZl 6vT ssssGX1ym', '6Zl TCSv6', 'ssssGX1ym')); // Виведе: true
console.log(stringChecker('z0Zm6vHG2xLcV07W6E', '0m zHGZv6', 'LxEV7c0W62')); // Виведе: true
console.log(stringChecker('radency', 'rade', 'nyc')); // Виведе: true
  // const S = prompt('Enter the value for S: ');
  // const P1 = prompt('Enter the value for P1: ');
  // const P2 = prompt('Enter the value for P2: ');
  // const result = stringChecker(S, P1, P2);
  // alert(result); // Виведе: true

//   (async function () {
//     // Введення рядків S, P1 та P2 з консолі
//     const S = await promptInput('Enter the value for S: ');
//     const P1 = await promptInput('Enter the value for P1: ');
//     const P2 = await promptInput('Enter the value for P2: ');
  
//     console.log('S:', S);
//     console.log('P1:', P1);
//     console.log('P2:', P2);
  
//     const result = stringChecker(S, P1, P2);
//     console.log('Result:', result);
//   })();
  
// const S = prompt('Enter the value for S: ');
// const P1 = prompt('Enter the value for P1: ');
// const P2 = prompt('Enter the value for P2: ');

// console.log('S:', S);
// console.log('P1:', P1);
// console.log('P2:', P2);

// const S = readline.question("What is your name?");

// console.log(S);

//   const result = stringChecker(S, P1, P2);
//   console.log(result); // Виведе: true