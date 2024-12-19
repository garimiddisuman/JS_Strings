// Do not rename string, use it as input for your program.
// While testing we will change it's value.
const string = "     ";
// Replace duplicate spaces with single space
// If string = "statement      with    two spaces"
// Then print "statement with two spaces"
// START YOUR CODE AFTER THIS LINE. DO NOT REMOVE THIS LINE

let aSpaceReplacedDuplicateSpaces = "";

for (let index = 0; index < string.length; index++) {
    const isCurrentCharSpace = string[index] === " ";
    const isNextCharSpace = string[index + 1] === " ";
    let char = string[index];

    if (isCurrentCharSpace) {
        char = isNextCharSpace ? "" : string[index];
    }
    aSpaceReplacedDuplicateSpaces += char;
}

console.log(aSpaceReplacedDuplicateSpaces);
