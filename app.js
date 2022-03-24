console.log("Hello World!\n==========\n");

// Exercise 1 Section
console.log("EXERCISE 1:\n==========\n");
for(let number = 1; number <= 100; number+=2) {
    if(number){
        console.log(`${number} and counting...`)
    }else{
        console.log(`do not print`)
    }
} 

// Exercise 2 Section
console.log("EXERCISE 2:\n==========\n");
for (let newNumber = 1; newNumber<=100; newNumber++){
    if(newNumber % 3 ==0 && newNumber % 5 == 0){
        console.log("FIZZBUZZ")
    }else if(newNumber % 5==0){
            console.log("BUZZ")
    }else if(newNumber % 3 == 0){
        console.log("FIZZ")
    }else{
        console.log(newNumber)
    }
}
