function destroyer(arr, ...arr1) {
  return arr.filter((ele) => !arr1.includes(ele));
}

destroyer([1, 2, 3, 1, 2, 3], 2, 3);