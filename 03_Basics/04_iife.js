// Immediately Invoked Function Expressions (IIFE)

(function chai() {
    // named iife
    console.log(`DB CONNECTED`);
})(); // MUST USE ; TO END 

// first ()-> function definition and second ()-> function call or execution
// we are using to avoid the problem of pollution of global scope (and it's variables)

((name)=> {
    // unnamed or arrow iife
    console.log(`DB CONNECTED TWO ${name}`);
})('Mohan');