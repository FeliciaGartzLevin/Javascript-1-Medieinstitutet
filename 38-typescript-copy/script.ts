/**
 * TypeScript
 *
 * Watch this file for changes by running
 * the following command in the terminal:
 *
 * 'tsc -w script.ts'
 * 'ctrl C' to end watch
 * 
 * Fördelen med TypeScript är att 
 * felet fångas direkt istället för att 
 * vi inte ska se felet förrän i browsern
 */

 console.log('Hello Typescript');
 console.log('Hello again Typescript');
 console.log('And again!');

let johan = 'Johan';
johan.toUpperCase();

let level = 1337;
level = 42;

let x: string;
x = "lol";
// x = 42; //nope

let b: false;

let todos = ["Learn JS", "Learn TS"];
todos.push("Learn stuff");
// todos.push(42); // nope

let names: string[] = [];
console.log(names);

let points: number[] = [];
console.log(points);

