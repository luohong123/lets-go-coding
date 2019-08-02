// function sayHi() {
//     console.log(name,'name')
//     console.log(age,'age')
//     var name = 'Lydia'
//     let age = 21
// }
// sayHi()

// for (var i = 0; i < 3; i++) {
//     setTimeout(() => console.log(i), 1)
// }
// for (let i = 0; i < 3; i++) {
//     setTimeout(() => console.log(i), 1)
// }

// const shape = {
//     radius: 10,
//     diameter() {
//         return this.radius * 2
//     },
//     perimeter: () => 2 * Math.PI * this.radius
// }
// console.log(shape.diameter())
// console.log(shape.perimeter())

// console.log(+true)
// console.log(!"Lydia")

// const bird = {
//     size: 'small'
// }

// const mouse = {
//     name: 'Mickey',
//     small: true
// }
// console.log(mouse.bird.size)

// let c = { greeting: 'Hey!' }
// let d

// d = c
// c.greeting = 'Hello'
// console.log(d.greeting)

// let a = 3
// let b = new Number(3)
// let c = 3

// console.log(a == b)
// console.log(a === b)
// console.log(b === c)

// class Chameleon {
//     static colorChange(newColor) {
//         this.newColor = newColor
//         return this.newColor
//     }
//     constructor({
//         newColor = 'green'
//     } = {}) {
//         this.newColor = newColor
//     }
// }
// const freddie = new Chameleon({
//     newColor: 'purple'
// })
// console.log(freddie.colorChange('orange'))

// let greeting
// greetign = {}
// console.log(greetign)

// function bark(){
//     console.log('Woof!')
// }
// bark.animal='dog'

// function Person(firstName, lastName) {
//     this.firstName = firstName;
//     this.lastName = lastName;
//   }

//   const member = new Person("Lydia", "Hallie");
//   Person.getFullName = function () {
//     return `${this.firstName} ${this.lastName}`;
//   }

//   console.log(member.getFullName());

// function Person(firstName, lastName) {
//     this.firstName = firstName
//     this.lastName = lastName
//   }

//   const lydia = new Person('Lydia', 'Hallie')
//   const sarah = Person('Sarah', 'Smith')

//   console.log(lydia)
//   console.log(sarah)

// function sum(a, b) {
//     return a + b
// }

// console.log(sum(1, '2'))

// function getPersonInfo(one,two,three){
//     console.log(one)
//     console.log(two)
//     console.log(three)
// }
// const person = 'Lydia'
// const age=21
// getPersonInfo`${person} is ${age} years old`

// let number = 0;
// console.log(number++)
// console.log(++number)
// console.log(number)

// function checkAge(data) {
//     if (data === {
//             age: 18
//         }) {
//         console.log('You are an adult!')
//     } else if (data == {
//             age: 18
//         }) {
//         console.log('You are still an adult.')
//     } else {
//         console.log(`Hmm.. You don't have an age I guess`)
//     }
// }
// checkAge({age:18})

// function getAge(...args) {
//     console.log(typeof args)
// }
// getAge(21)

// function getAge() {
//     'use strict'
//     age = 21
//     console.log(age)
// }
// getAge()

// const sum = eval('10*10+5')
// console.log(sum)

// String.prototype.giveLydiaPizza = () => {
//     return 'Just give Lydia pizza already!'
// }

// const name = 'Lydia'

// console.log(name.giveLydiaPizza())

// const person = {
//     name: 'Lydia'
// }

// function sayHi(age) {
//     console.log(`${this.name} is ${age}`)
// }
// sayHi.call(person, 21)
// console.log(sayHi.bind(person, 21))
// function sayHi() {
//     return (() => 0)()
// }

// console.log(typeof sayHi())
// console.log(typeof typeof 1)
// const numbers = [1, 2, 3]
// numbers[10] = 11
// console.log(numbers)
// [[0, 1], [2, 3]].reduce(
//     (acc, cur) => {
//         console.log(acc.concat(cur))
//       return acc.concat(cur)
//     },
//     [1, 2]
//   )

// console.log([...'Lydia'])

// function* generator(i) {
//     yield i;
//     yield i * 2;
// }

// const gen = generator(10);

// console.log(gen.next().value);
// console.log(gen.next().value);
// let person = {
//     name: "Lydia"
// };
// const members = [person];
// person = null;

// console.log(members);
// const person = {
//     name: "Lydia",
//     age: 21
// };

// for (const item in person) {
//     console.log(item);
// }

// console.log(3 + '4' + "5");
// const num = parseInt("7*6", 10);
// console.log(num)

// var a = [1, 2, 3].map(num => {
//     if (typeof num === "number") return;
//     return num * 2;
//   });
//   console.log(a)
//   function getInfo(member, year) {
//     member.name = "Lydia";
//     year = "1998";
//   }

//   const person = { name: "Sarah" };
//   const birthYear = "1997";

//   getInfo(person, birthYear);

//   console.log(person, birthYear);
//   function Car() {
//     this.make = "Lamborghini";
//     return true
//     // return { make: "Maserati" };
//   }

//   const myCar = new Car();
//   console.log(myCar.make);
//   (() => {
//     // let x = (y = 10);
//    var y=10
//   })();

// //   console.log(typeof x);
//   console.log(typeof y);

// class Dog {
//     constructor(name) {
//         this.name = name;
//     }
// }

// Dog.prototype.bark = function () {
//     console.log(`Woof I am ${this.name}`);
// };

// const pet = new Dog("Mara");

// console.log(pet.bark());

// delete Dog.prototype.bark;

// // console.log(pet.bark());
// const set = new Set([1,1,2,3,4])
// console.log(set)

// var r = require('./counter')
// import  from './test'; // note that we have the freedom to use import m instead of import k, because k was default export
// console.log(k);   
// r.counter+=1
// console.log(r.counter)

// const numbers = [1,2,3,4,5]
// const [a,b,c]=numbers;
// console.log([a,b,c])
// const user = { name: "Lydia", age: 21 };
// const admin = { admin: true, ...user };

// console.log(admin);

// let num = 10;

// const increaseNumber = () => ++num;
// const increasePassedNumber = number => ++number;

// const num1 = increaseNumber();
// const num2 = increasePassedNumber(num1);

// console.log(num1);
// console.log(num2);

// const value = { number: 10 };

// const multiply = (x = { ...value }) => {
//   console.log(x.number *= 2);
// };

// multiply();
// multiply();
// multiply(value);
// multiply(value);

// [1, 2, 3, 4].reduce((x, y) => console.log(x, y));

// console.log(Number(2) === Number(2))
// console.log(Boolean(false) === Boolean(false))
// console.log(Symbol('foo') === Symbol('foo'))

// const name = "Lydia Hallie"
// console.log(name.padStart(33))
// console.log(name.padStart(2))
// function* startGame() {
//     const answer = yield "Do you love JavaScript?";
//     if (answer !== "Yes") {
//       return "Oh wow... Guess we're gone here";
//     }
//     return "JavaScript loves you back ❤️";
//   }
  
//   const game = startGame();
//   console.log(game.next().value); // Do you love JavaScript?
//   console.log(game.next('Yes').value); // JavaScript loves you back ❤️
//   console.log(game.next('Yes1').value); // JavaScript loves you back ❤️

//   console.log(String.raw`Hello\nworld`);

// async function getData() {
//     return await Promise.resolve("I made it!");
//   }
  
//   const data = getData();
//   console.log(data);
//   data.then(res=>{
//       console.log(res)
//   })
// function addToList(item, list) {
//     console.log(list.push(item))
//     return list;
//   }
  
//   const result = addToList("apple", ["banana"]);
//   console.log(result);

// function checkAge(age) {
//   let message
//   if (age < 18) {
//     message = "Sorry, you're too young."
//   } else {
//     message = "Yay! You're old enough!"
//   }

//   return message
// }

// console.log(checkAge(21))

function getName(name) {
  const hasName = !!name
  console.log(hasName)
}
getName('1')
