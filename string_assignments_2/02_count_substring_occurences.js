// Do not rename string, use it as input for your program.
// While testing we will change it's value.
const string = "aaaaaaaa";
const subString = "aa";
// Print the count of occurences of a substring in the given string
// If string = "duplicate substring statement" and subString = "ate", then print 2
// START YOUR CODE AFTER THIS LINE. DO NOT REMOVE THIS LINE

let noOfSubStrings = 0;
const stringLength = subString.length === 0 ? 0 : string.length;

for (let index = 0; index < stringLength; index++) {
    let subStringIndex = index;
    let subStringCandidate = "";

    for (let start = 0; start < subString.length; start++) {
        subStringCandidate += string[subStringIndex];
        subStringIndex++;
    }

    const isMatching = subStringCandidate === subString;
    noOfSubStrings += isMatching ? 1 : 0;
}

console.log(noOfSubStrings);