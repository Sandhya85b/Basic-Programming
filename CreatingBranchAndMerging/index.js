// Problem Statement
// Create a repo named Basic Programing clone this repo with your local system, then create a file called index.js, then write function that takes a number as paramter called num, finds whether it is prime nunber and returns true or false,

// Once it is done, then add, commit and push into the repo.

// Once this is done, then create another branch called checkEvenOdd, checkout to this branch, now write another function called evenOdd, where it takes a number as paramter called num, finds whether it is even number and returns true or false.

// Once done, then add, commit and push into the repo into new branch and merge it with your main/master branch by creating a Pull Request


// To check the prime 
let checkPrime = function(num){
    for(let i=2; i<=num-1; i++){
        if(num %i==0){
            return false
        }
    }
    return true
}

console.log(checkPrime(6))
