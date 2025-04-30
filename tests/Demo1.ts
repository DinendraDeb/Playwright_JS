let message1: string = "Hello, world!";
message1 = "Hello, TypeScript!";
console.log(message1);
let age1: number = 25;
console.log(age1);
let isStudent1: boolean = true;
let numberArray: number[] = [1, 2, 3, 4, 5];    
let data : any = "Any data";
data = 42;
//function
function add (a:number, b:number): number {
    return a + b;
}
console.log(add(5, 10));

//object
let person1: { name: string; age: number } = {
    name: "John",
    age: 30,
};
console.log(person1.name); // Output: John

