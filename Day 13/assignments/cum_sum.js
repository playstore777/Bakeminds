const cumSum = (arr) => {
  let temp = 0;
  return arr.map((i) => (temp += i));
};

console.log("cumSum([1, 3, 5, 7]) -->", cumSum([1, 3, 5, 7]));
console.log("cumSum([1, 2, 35, 45]) -->", cumSum([1, 2, 35, 45]));
console.log("cumSum([1]) -->", cumSum([1]));
console.log("cumSum([1, 2]) -->", cumSum([1, 2]));
