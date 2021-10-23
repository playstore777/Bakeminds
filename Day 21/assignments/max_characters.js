/*
Given a string of characters, return the character that appears the most often.
Example
max("Hello
World!") should return "l"
*/

const max = (string) => {
    let stringList = string.split("");
    let mostRepChar = "";
    let mostRep = 0;
    for (let char of string) {
        if (stringList.filter((fchar) => fchar === char).length > mostRep) {
            mostRep = stringList.filter((fchar) => fchar === char).length;
            mostRepChar = char;
        }
    }
    return mostRepChar;
};

let string = "Hello World!";
console.log(max(string));
