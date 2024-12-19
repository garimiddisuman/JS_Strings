// Do not rename string, use it as input for your program.
// While testing we will change it's value.
const string = " suman     ";
// Remove spaces at the start and end of the given string
// If string = " spaces at the start and the end "
// Then print "spaces at the start and the end"
// START YOUR CODE AFTER THIS LINE. DO NOT REMOVE THIS LINE

let notSpaceFirstIndex = 0;

while (string[notSpaceFirstIndex] === " ") {
    notSpaceFirstIndex++;
}

let notSpaceLastIndex = string.length - 1;

while (string[notSpaceLastIndex] === " ") {
    notSpaceLastIndex--;
}

let startAndEndWithNoSpace = "";

for (let index = notSpaceFirstIndex; index <= notSpaceLastIndex; index++) {
    startAndEndWithNoSpace += string[index];
}

console.log(startAndEndWithNoSpace);


// not resubmitted

// let updatedString = "";
// let currentFirstCharIndex = 0;
// let currentLastCharIndex = string.length - 1;

// while (string[currentFirstCharIndex] === " " || string[currentLastCharIndex] === " ") {
//     string[currentFirstCharIndex] === " " ? currentFirstCharIndex++ : currentLastCharIndex--;
// }

// for (currentFirstCharIndex; currentFirstCharIndex <= currentLastCharIndex; currentFirstCharIndex++) {
//     updatedString += string[currentFirstCharIndex];
// }

// console.log(updatedString);