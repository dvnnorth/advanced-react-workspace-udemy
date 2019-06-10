let x = 0;
let adder = n => x => x + 10;
let add10 = adder(10);
console.log("x: " + x);
console.log("add10(x): " + add10(x));
