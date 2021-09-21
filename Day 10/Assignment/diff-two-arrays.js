function diffArray(arr1, arr2) {
  var newArr = [];
  let tempArr = [...arr1];
  for (let ele of arr2) {
    if (!tempArr.includes(ele)) {
      newArr.push(ele);
    }
  }
  for (let ele of arr1) {
    if (!arr2.includes(ele)) {
      newArr.push(ele);
    }
  }
  return newArr;
}

diffArray([1, 2, 3, 5], [1, 2, 3, 4, 5]);  