/*
Sum at : 
https://www.freecodecamp.org/learn/javascript-algorithms-and-data-structures/javascript-algorithms-and-data-structures-projects/caesars-cipher
*/

function rot13(str) {
    let newStr = "";
    for (let char of str) {
        if (char.charCodeAt() - 64 < 0) newStr += char;
        else if (char.charCodeAt() - 64 - 13 <= 0) {
            newStr += String.fromCharCode(
                26 - Math.abs(char.charCodeAt() - 64 - 13) + 64
            );
        } else {
            newStr += String.fromCharCode(char.charCodeAt() - 13);
        }
    }
    return newStr;
}

rot13("SERR PBQR PNZC");
