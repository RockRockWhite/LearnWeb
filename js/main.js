console.log("hello".length);

console.log("hello".charAt(0));

console.log("hello".replace("llo", "233"));

console.log("hello".toUpperCase());

var nametest = "DasAuto";
console.log(nametest);

let test2 = 1;
console.log(test2);

nametest = "Simon";
console.log(nametest);

test = 1 + 2;
console.log(test);

const Pi = 3.14;
console.log(Pi);

test += 5;
// 这是一行注释
console.log(test--);

var x = "3" + 4 + 5; // 类型转换为字符串
x = 3 + 4 + "5";
console.log(x);

console.log(1 == "1"); // true 类型转换
console.log(1 === "1"); // false 不发生类型转换

nametest = "sss";
if (nametest == "Simon") {
    console.log(true);
}
else {
    console.log(false);
}

while (1) {
    console.log("hello");
    break;
}

// var无作用域
// const有作用域
// let有作用域
// 因此尽量不要使用var
for (let i = 0; i != 10; ++i) {
    console.log(i);
}

let age = 2;
// 三目运算符
let allowed = age >= 18 ? "yes" : "no";
console.log(allowed);


let username = "John";
switch (username) {
    case "alice":
        console.log('a');
        break;

    case "John":
        console.log("j");
        break;
    default:
        console.log("strange");
}

let obj = new Object();
let obj2 = {};

obj = {
    name: "Simon",
    age: 20,
    email: "simon@gmail.com",
    contact: {
        phone: "1234567",
        Telegram: "223232"
    }
};

obj.contact.Wechat = 123132131;

console.log(obj);

var a = new Array();
let b = [];
a[0] = "dog";
a[1] = 2333;
a[2] = "cat";

a[6] = "tiger";
console.log(a);

b = ["cat", '222', true, "DOG", 123];
b.push("sheep");

b.reverse();
b.shift();
b.unshift("this is the head");



for (let each in b) {
    console.log(b[each]);
}

function add(a) {
    a++;
    return a;
}

function sum() {
    let sum = 0;
    for (let index in arguments) {
        sum += arguments[index];
    }
    return sum;
}
console.log(add(1));
console.log(sum(6, 7, 11, 23, 76, 77, 1));

function makeAdder(a) {
    return function (b) {
        return a + b;
    }
}

let adder = makeAdder(5);
console.log(adder(8));