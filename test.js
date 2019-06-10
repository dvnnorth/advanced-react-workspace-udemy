let x = 0;
let adder = n => x => x + 10;
let add10 = adder(10);
let add20 = adder(20);

console.log("x: " + x);
console.log("add10(x): " + add10(x));
console.log("add10(add10(x)): " + add10(add110(x)));
console.log("add20(x): " + add20(x));
console.log("add20(add10(x)): " + add20(add10(x)));
console.log("Just one more line to make a change");
