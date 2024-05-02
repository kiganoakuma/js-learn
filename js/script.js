let answer = parseInt(prompt("Please enter a number you would like to fizzbang to:"));

for (let i = 1; i <= answer; i++){
    if (i % 3 == 0 && i % 5 === 0) {
        console.log("fizzbang");
    } else if (i % 3 === 0) {
        console.log("fizz");
    } else if (i % 5 === 0) {
        console.log("bang")
    } else {
        console.log(i);
    }
};