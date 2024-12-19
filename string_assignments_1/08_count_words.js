// Do not rename string, use it as input for your program.
// While testing we will change it's value.
const string = "     suman is a good boy    ";
// Print the no.of words in given string. Consider multiple spaces.
// If string = "multiple words" then output should be 2
// START YOUR CODE AFTER THIS LINE. DO NOT REMOVE THIS LINE

let noOfWords = 0;
const newString = " " + string;

for (let index = 0; index < string.length - 1; index++) {
    const isCurrentCharSpace = newString[index] === " ";
    const isNextCharSpace = newString[index + 1] === " ";

    if (isCurrentCharSpace && !isNextCharSpace) {
        noOfWords++;
    }
}

console.log(noOfWords);