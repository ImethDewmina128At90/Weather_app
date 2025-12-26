var i = 0;

console.log("welcome to learning node.js framework");
console.log("i before:", i);

balla();


console.log("i after:", i);

function balla() {
    i = 2;  // Remove 'var' to modify the outer 'i'
    console.log("i inside function:", i);
    
}