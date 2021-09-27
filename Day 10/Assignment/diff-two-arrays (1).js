function diffArray(arr1, arr2) {
  var newArr = [];
  let tempArr = [...arr1, ...arr2];
  for (let ele of tempArr) {
    if (!arr1.includes(ele) || !arr2.includes(ele)) {
      newArr.push(ele);
    }
  }
  return newArr;
}

diffArray([1, 2, 3, 5], [1, 2, 3, 4, 5]);  