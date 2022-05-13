// Візьміть файл template1.html, підключіть до нього скрипт, і працюйте в ньому!
//
//     - Напишіть код,  котрий :
// -- отримує текст з параграфа з id "content"

//  let content_ = document.getElementById('content');
// const content = content_.innerText;
//  console.log(content);
//
// let content2_ = document.querySelector('#content');
// const content2 = content2_.innerText;
//  console.log(content2);




// -- отримує текст з блоку з id "rules"

// let rules = document.getElementById('rules');
// console.log(rules);
//
// let rules2 = document.querySelector('#rules');
// console.log(rules2);


// -- замініть текст параграфа з id 'content' на будь-який інший

// const contentChange = document.getElementById('content');
// contentChange.innerText = 'Some cool text';
//
// const contentChange2 = document.querySelector('#content');
// contentChange2.innerText = 'ZBS Text';



// -- замініть текст параграфа з id 'rules' на будь-який інший

// const rulesChange = document.getElementById('rules');
// rulesChange.innerText = 'Хто розповів тобі про Бійцівський клуб???';
//
// const rulesChange2 = document.querySelector('#rules');
// rulesChange2.innerText = 'Мило?';





// -- змініть кожному елементу колір фону на червоний

// const contentRed = document.getElementById('content');
// contentRed.style.color = 'red';
//
// const contentRed2 = document.querySelector('#content');
// contentRed2.style.color = 'pink';
//
// const rulesRed = document.getElementById('rules');
// rulesRed.style.color = 'red';
//
// const rulesRed2 = document.querySelector('#rules');
// rulesRed2.style.color = 'pink';
//
//
//
//
//
//?????????????????????????????????????????
//
// const changeAllQ = document.querySelector('*'); // чи можна подібне зробити з getElement
// changeAllQ.style.color = 'red';

// const changeAllE = document.getElementsByTagName('body');
// for (const changeAllEElement of changeAllE) {
//  changeAllEElement.style.color = 'red';
// }




// -- змініть кожному елементу колір тексту на синій

// const changeBlueAll = document.querySelector('*');
// changeBlueAll.style.color = 'blue';
//
// const changeBlueContent = document.getElementById('content');
// changeBlueContent.style.color = 'darkBlue';
// const changeBlueRules = document.getElementById('rules');
// changeBlueRules.style.color = 'lightBlue';





// -- отримати весь список класів елемента з id=rules і вивести їх в console.log

const listRules = document.getElementById('rules');

console.log(listRules.classList)


////????????????????????????????????????????????????????????????????????????????????
//
//
// подібна логіка має місце бути?
//
//
// const listRules = document.getElementById('rules');
//
// let a = listRules.innerText;
//
// listRules.innerText = '';
//
// const ul = document.createElement('ul');
// listRules.appendChild(ul);
//
//     let txt = a.split('.')
//     for (let i = 0; i < txt.length; i++) {
//
//         let li = document.createElement('li')
//         li.innerText = `${txt[i]}`
//
//
//         ul.appendChild(li);
//     }









// -- поміняти колір тексту у всіх елементів fc_rules на червоний
//


// const changeColor = document.getElementsByClassName('fc_rules');
//
// for (const changeColorElement of changeColor) {
//     changeColorElement.style.color = 'red';
// }






//
// Взяти файл template_2.html та працювати в ньому
// 1) Напишіть код, який :
// a) додає клас з назвою групи, елементу з ід main_header

// const addClass = document.getElementById('main_header');
// addClass.classList.add('march2020');                    // правильно зрозумів?


// b) робить шириниу елементу ul 400px

// const getUl = document.querySelector('ul');
// getUl.style.width = '400px';

// const getUl2 = document.getElementsByTagName('ul');
//
// for (const ul2Element of getUl2) {
//     ul2Element.style.width = '400px';
// }



// c) робить шириниу всіх елементів з класом linkList шириною 50%

// const widthAllLinkenList = document.getElementsByClassName('linkList');
// for (const item of widthAllLinkenList) {
//     item.style.width = '50%';
// }

// const widthAllLinkenList2 = document.querySelectorAll('.linkList');
// for (const item of widthAllLinkenList2) {
//     item.style.width = '50%';
// }



// d) отримує текст який зберігається в елементі з класом listElement2

// const listElement2 = document.getElementsByClassName('listElement2');
// let txt;
// for (const item of listElement2) {
//      txt = item.innerText;
// }
// console.log(txt);



// e) отримує всі елементи li та змінює ім колір фону на сірий

// const getAllLi = document.getElementsByTagName('li');
// for (const item of getAllLi) {
//     item.style.background = 'grey';
// }

// const getAllli2 = document.querySelectorAll('li');
// for (const item of getAllli2) {
//     item.style.background = 'silver';
// }



// f) отримує всі елементи 'a' та додає їм клас anchor

// const getAllA = document.getElementsByTagName('a');
// for (const item of getAllA) {
//     item.classList.add('anchor');
// }

// const getAllA = document.querySelectorAll('a');
// for (const anchor of getAllA) {
//     anchor.classList.add('anchor');
// }



// g) отримує всі елементи 'a' та у випадку, якщо текстовий контен елементу дорівнює link3,
// змінює йому розмір тексту на 40 пікселів

// let a = document.getElementsByTagName('a');
// for (const aElement of a) {
//     if(aElement.innerText === 'link3'){
//         aElement.style.fontSize = '40px';
//     }
// }

// let aQ = document.querySelectorAll('a');
// for (const aQElement of aQ) {
//     if(aQElement.innerText === 'link3'){
//         aQElement.style.fontSize = '4px';
//     }
// }


// h) отримує всі елементи 'a' та додає їм клас element_XXX. Де XXX - текстовий контент елементу a

// let aXXX = document.getElementsByTagName('a');
// for (const aXXX1 of aXXX) {
//     aXXX1.classList.add(`element_${aXXX1.innerText}`);
// }

// let aXXXQ = document.querySelectorAll('a');
// for (const aXXXQElement of aXXXQ) {
//     aXXXQElement.classList.add(`element_${aXXXQElement.innerText}`);
// }





// i) отримує всі елементи 'sub-header' та змінює колір фону. Фон отримати з prompt()

// const sub = document.getElementsByClassName('sub-header');
// for (const subElement of sub) {
//     subElement.style.background = prompt();
// }

// const subq = document.querySelectorAll('.sub-header');
// for (const s of subq) {
//     s.style.background = prompt();
// }






// j) отримує всі елементи 'sub-header' та змінює колір тексту у видаку якщо текст елемнту = content 2 segment . Колір отримати з prompt()

// const subGet = document.getElementsByClassName('sub-header');
// for (const s of subGet) {
//     if(s.innerText === 'content 2 segment'){
//         s.style.color = prompt();
//     }
// }

// const subGetq = document.querySelectorAll('.sub-header');
// for (const s of subGetq) {
//     if(s.innerText === 'content 2 segment'){
//         s.style.color = prompt();
//     }
// }




// k) отримує елемент з класом content_1 та заміняє  в ньому тест на довільний. Текст отримати з prompt()

// const content1 = document.getElementsByClassName('content_1');
//
// for (const s of content1) {
//     s.innerText = prompt();
// }

// const content1q = document.querySelectorAll('.content_1');
// for (const s of content1q) {
//     s.innerText = prompt();
// }





// l) отримати елементи p та змінити їм padding на 20px

// const p = document.getElementsByTagName('p');
// for (const pElement of p) {
//     pElement.style.padding = '20px';
// }

// const pQ = document.querySelectorAll('p');
// for (const pQElement of pQ) {
//     pQElement.style.padding = '50px';
// }




// m) отримати елементи з класом text2 та змінити їм текст на назву групи (mon-year. Пример sep-2021)


// let text2 = document.getElementsByClassName('text2');
// for (const text2Element of text2) {
//     text2Element.innerText = 'march2022'
// }
