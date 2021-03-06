let apples = 5;
let speed = 'Fast';
let hasName: boolean = true;

let nothingMuch: null = null;
let nothing: undefined = undefined;

//built in objects
let now: Date = new Date();

//Array
let colors: string[] = ['red', 'green', 'blue'];
let myNumbers: number[] = [1,2,3];
let truths: boolean[] = [true, true, false];

//Classes
class Car {

}
let car: Car = new Car();

//object literal
let point: { x: number; y: number } = {
  x: 10,
  y: 20
};

//Function 
const logNumber: (i: number) => void = (i: number) => {
  console.log(i);
}

//when to use annotation
//1. function that returns the 'any' type
const json = '{"x": 10, "y": 20}';
const coordinates: {x: number; y: number} = JSON.parse(json);
console.log(coordinates);

//2. when we declear a variable on one line and initailize it later

let words = ['red', 'green', 'blue'];
let foundWord: boolean;

for (let i = 0; i < words.length; i++){
  if(words[i] === 'green'){
    foundWord = true;
  }
}