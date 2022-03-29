//document.write(5 + 6);
// window.alert('Accept my terms before going to our website.');
console.log (5+6);

// let a = 5;
// let b = 10;
// let c = 15;

// x = a+b+c;

// y = a - b -c;

// z = a/b;

// m = a * b *c;

// document.getElementById("arthematic").innerHTML = y;

var $test;
var $test;
let Test;
let Test1;

$test = 10+100;

$test = 100+30;

_test1 = 'iNet Academy';

Test = 'Java Script Class';

Test1 = 'Let Variable'

test = "Welcome";

document.getElementById("var1").innerHTML = $test;
document.getElementById("var2").innerHTML = _test1;
document.getElementById("var3").innerHTML = Test;
document.getElementById("var4").innerHTML = Test1;

var date = 7 + 'Feb';

document.getElementById("var4").innerHTML = date;

let x = myFunction(4,3)

let text = "The temperature is" + x + " Celsius";



function myFunction(i1,i2) {

    return i1*i2;
}

document.getElementById("function1").innerHTML = x;

function toCelsius(fh) {
    return (5/9) * (fh - 32);
}

let text2 = "The temperature is" + toCelsius(77) + " degree Celsius";

document.getElementById("function2").innerHTML = text2;

function inetTest() {
    var carName = "Volvo";
    document.getElementById("var5").innerHTML = carName;
}
inetTest();
//document.getElementById("var6").innerHTML = carName;

let car = {carname:"Fait", model:"500", color:"white", weight:"850kg"};

document.getElementById("var7").innerHTML = "The Car " + car.carname + " Model is " + car.model + " and the color is " + car.color + ".";

const person = {
    firstName:"John",
    lastName:"Doe",
    age:50,
    eyeColor:"blue"
};

//document.getElementById("var8").innerHTML = person.firstName + " is " + person.age + " year old with an eye color " + person.eyeColor + "."; 

document.getElementById("var8").innerHTML = person["firstName"] + " is " + person["age"] + " year old with an eye color " + person["eyeColor"] + "."; 

const person1 = {
    firstName:"John",
    lastName:"Doe",
    age:50,
    eyeColor:"blue",
    fullName: function() {
        return this.firstName + " " + this.lastName;
    }
};

let t = this;


document.getElementById("var10").innerHTML = t;

const person2 = {
    firstName: "Hege",
    lastName: "Nilsen",
}

const person3 = {
    firstName: "Hege",
    lastName: "Nilsen",
}

//let e = person1.fullName.call(person2);

// document.getElementById("var9").innerHTML = person1.fullName.apply(person2, ["Hounslow, ", "UK"]);

// document.getElementById("var11").innerHTML = person1.fullName.call(person2, "Hounslow, ", "UK");
let fullName = person1.fullName.bind(person3);
document.getElementById("var12").innerHTML = fullName();

function displayDate() {
    return document.getElementById('today').innerHTML = Date();
}

function bigImg (x) {
    x.style.height = "150px";
}
function normalImg (x) {
    x.style.height = "76px";
}

let st = "I-Net Software Solutions, I-Net Academy";

document.getElementById('string').innerHTML = st.length;

let st1 = 'Today\'s JavaScript Class';

//document.getElementById('string2').innerHTML = st1;

let m  = "Jhon";

let y = new String("Jhon");

//document.getElementById('string2').innerHTML = (m === y);

let myArr = st.split("");

st = "";
for (let i = 0; i < myArr.length; i++) {
    st += myArr[i];
}

document.getElementById('string2').innerHTML = st;

let strs = "Please locate where 'locate occurs.'"

document.getElementById("string3").innerHTML = strs.search("locate");

let strs2 = "The rain in SPAIN stays mainly in the plain";

//document.getElementById("string4").innerHTML = strs2.match(/ain/gi);3

let strs3 = "Hello world, welcome to universe.";

document.getElementById("string4").innerHTML = strs3.endsWith("world", 11);

let fn = "Jhon";
let ln = "Doe";

let strI = `Welcome ${fn}, ${ln}`;

let price = 10;
let vat = 0.25;

let total = `Total: ${price * (1.22 + vat).toFixed(3)}`;

document.getElementById("string5").innerHTML = strI;

document.getElementById("string6").innerHTML = total;

let header = "Template Literals";
let tags = ["template literals", "javascript", "es6"];

let html = `<h2>${header}</h2>`;
for (const x of tags) {
    html += `${x}, `;
}
//html += `</ul>`;

document.getElementById("string7").innerHTML = html;

let xx = 9.656;
// document.getElementById("string8").innerHTML =
//   xx.toFixed(0) + "<br>" +
//   xx.toFixed(2) + "<br>" +
//   xx.toFixed(4) + "<br>" +
//   xx.toFixed(6);

let num = 32;
num2 = num.toString();
document.getElementById("string8").innerHTML = Number.MAX_VALUE;

const cars = ["Saab", "volvo", "BMW"];

const cars_new = new Array("Saab", "volvo", "BMW")

document.getElementById("array1").innerHTML = cars_new[2] = "Opel";

document.getElementById("array2").innerHTML = typeof  cars_new;

const person5 = ["Jhon", "Doe", 46 ];

document.getElementById("array3").innerHTML = person5.length;

const fruits = ["Banana", "Orange", "Apple", "Mango"];

//document.getElementById("array4").innerHTML = fruits[fruits.length - 3 ];

let text3 = "<ul>";

// for (let i = 0; i < fruits.length; i++) {
//     text3 = text3 + "<li>" + fruits[i] + "</li>";
// }

// text3 = text3 + "</ul>";

fruits.forEach(myArray);

text3 += "</ul>";

function myArray(array) {
    text3 = text3 + "<li>" + array + "</li>";
}

document.getElementById("array4").innerHTML = fruits;


function myArray2() {
    fruits.push ("Lemon");
    document.getElementById("array4").innerHTML = fruits;
}

const points = new Array(40, 10, 20, 15);

const points2 = [40, 100, 20, 150];

document.getElementById("array5").innerHTML = Array.isArray(points);

document.getElementById("array6").innerHTML = Array.isArray(car);

document.getElementById("array7").innerHTML = fruits.unshift("kiwi");

//delete fruits[3];

//const merge = person5.concat(fruits);

document.getElementById("array10").innerHTML = "<b>Original:</b> " +fruits;

removed = fruits.slice(1,4);

//document.getElementById("array8").innerHTML = "<b>Sliced:</b> " +fruits;

document.getElementById("array9").innerHTML = "<b>Removed:</b> " +removed;

document.getElementById("array8").innerHTML = fruits.sort();

document.getElementById("array11").innerHTML = points2;

function mySort() {
    for (let i = points2.length -1; i > 0; i--) {
        let j = Math.floor(Math.random() * i)
        let k = points2[i]
        points2[i] = points2[j]
        points2[j] = k
    }
    document.getElementById("array12").innerHTML = points2;
}






