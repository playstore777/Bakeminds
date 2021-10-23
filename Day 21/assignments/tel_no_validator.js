/*
Sum at :
https://www.freecodecamp.org/learn/javascript-algorithms-and-data-structures/javascript-algorithms-and-data-structures-projects/telephone-number-validator
*/

// brute force
function telephoneCheck(str) {
    if (str[0] === "-" || (str[0] === "(" && str[str.length - 1] === ")"))
        return false;

    if (str[str.length - 2] === "-") return false;
    if (
        (str.split("").filter((i) => i === "(").length +
            str.split("").filter((i) => i === ")").length) %
            2 !==
        0
    )
        return false;
    let re = /[-()\s]/g;
    let numStr = str.replace(re, "");
    if (numStr[0] === "1") {
        numStr = numStr.slice(1);
    }
    return numStr.length === 10;
}

telephoneCheck("555-555-5555");

// Regex
function telephoneCheck(str) {
    let re = /^(1\s?)?(\(\d{3}\)|\d{3})[\s\-]?\d{3}[\s\-]?\d{4}$/;
    return re.test(str);
}

telephoneCheck("555-555-5555");

// Or

function telephoneCheck(str) {
    // let re = /^(1\s?)?(\(\d{3}\)|\d{3})[\s\-]?\d{3}[\s\-]?\d{4}$/;
    // return re.test(str);
    let codeReg = /^(1\s?)?/;
    let firstThreeReg = /(\(\d{3}\)|\d{3})/;
    let middleReg = /[\s\-]?/;
    let secondThreeReg = /\d{3}/;
    let lastReg = /\d{4}/;
    str = str.replace(codeReg, "");
    str = str.replace(firstThreeReg, "");
    str = str.replace(middleReg, "");
    str = str.replace(secondThreeReg, "");
    str = str.replace(middleReg, "");
    str = str.replace(lastReg, "");
    return str ? false : true;
}

telephoneCheck("555-555-5555");
