/*
problem at: 
https://www.freecodecamp.org/learn/javascript-algorithms-and-data-structures/javascript-algorithms-and-data-structures-projects/palindrome-checker
*/

function palindrome(str) {
    str = str.toLowerCase();
    let re = /[a-z0-9]/;
    str = str
        .split("")
        .filter((i) => re.test(i))
        .join("");
    return str.split("").reverse().join("") === str;
}

palindrome("eye");
