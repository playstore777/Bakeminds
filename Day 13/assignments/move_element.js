const moveElements = (arr) => {
  if (arr.length < 2) return false;

  const firstElement = arr[0];
  const secondElement = arr[1];
  if (arr.length < 4) {
    while (arr.length != 4) {
      arr[arr.length] = null;
    }
  }

  arr.splice(0, 2);
  arr.splice(2, 0, firstElement, secondElement);
  return arr;
};

console.log(moveElements([1, 3, 2, 5]));
console.log(moveElements([2, 5, 1, 3]));
console.log(moveElements([1, 2]));
console.log(moveElements([1, 2, 3]));
console.log(moveElements([]));
console.log(moveElements([1]));
console.log(moveElements([1, 2, 3, 4, 5, 6]));
