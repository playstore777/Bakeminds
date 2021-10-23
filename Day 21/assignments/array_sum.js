/*
Given an array of numbers, return all pairs that add up to a given sum. The numbers can be used more than once.

describe("Two Sum", () => {
 it("Should implement two sum", () => {
  assert.deepEqual(twoSum([1, 2, 2, 3, 4], 4), [[2, 2], [3, 1]]);
 });
});

*/

const twoSum = (arr, s) => {
    let newArr = [];
    arr.sort((a, b) => b - a);
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] < s) {
            for (let j = 0; j < arr.length; j++) {
                if (i !== j) {
                    if (arr[i] + arr[j] === s) {
                        newArr.push([arr[i], arr[j]]);
                    }
                }
            }
        }
    }
    for (let pair of newArr) {
        for (let nextPair of newArr) {
            if (pair === nextPair.reverse()) {
                newArr.splice(newArr.indexOf(nextPair), 1);
            }
        }
    }
    return newArr;
};

console.log(twoSum([1, 2, 2, 3, 4], 4));
console.log(twoSum([1, 2, 2, 4], 4));
