// Do not rename string, use it as input for your program.
// While testing we will change it's value.
const string = "  statement   with    spaces   ";
// Replace all spaces with underscore "_"
// If string = "statement with spaces"
// Then print "statement_with_spaces"
// START YOUR CODE AFTER THIS LINE. DO NOT REMOVE THIS LINE

let underscoreReplacedSpace = "";

for (let index = 0; index < string.length; index++) {
    const isSpace = string[index] === " ";
    const currentChar = isSpace ? "_" : string[index];
    underscoreReplacedSpace += currentChar;
}

console.log(underscoreReplacedSpace);