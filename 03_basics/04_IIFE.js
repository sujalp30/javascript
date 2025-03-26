// Immediately Invoked Function Expressions (IIFE)

// this is used for immediate running of function.  beacuse global scope ke pollution se problem hoti h kahi baar......toh jo global scope se variables ya koi bhi declrations h unko hatane ke liye ye use hota

(function one(){                                         // paranthesis is =>  ()  
    console.log(`CONNECTED`);                            // there will be two paranthesis () 
}) ();                                                   // one () is used for writing function and second () is used for execution.



( (name) => {
    console.log(`CONNECTED TWO ${name} `);
}) ('Sujal');