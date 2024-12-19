// Do not rename string, use it as input for your program.
// While testing we will change it's value.
const string = "suman";
const start = -1;
const end = 0;
// Print the substring from the given string using start index and end index.
// If string = "this is a statement", start = 3 and end = 9, then print "s is a "
// START YOUR CODE AFTER THIS LINE. DO NOT REMOVE THIS LINE

let subString = "";
const startIndex = start < 0 ? 0 : start;
const endIndex = end > string.length - 1 ? string.length - 1 : end;

for (let index = startIndex; index <= endIndex; index++) {
    subString += string[index];
}

console.log(subString);