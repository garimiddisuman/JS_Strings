// Do not rename string, use it as input for your program.
// While testing we will change it's value.
const string = '';
// Print the number of vowles in given string. Consider case sensitivity.
// If string = "abcdefghi" then output should be 3
// START YOUR CODE AFTER THIS LINE. DO NOT REMOVE THIS LINE

const vowels = "AEIOUaeiou";
let noOfVowels = 0;

for (let index = 0; index < string.length; index++) {
    for (let currentVowel = 0; currentVowel < vowels.length; currentVowel++) {
        if (vowels[currentVowel] === string[index]) {
            noOfVowels++;
        }
    }
}

console.log(noOfVowels);