let sumFinder = (arr, sum) => {
    for (let i=0; i < arr.length; i++) {
      for (let j=i+1; j < arr.length; j++) {
        if (arr[i] + arr[j] === sum) {
            document.write('true');
            return true;
        }
      }
    }
    return false;
}
  
console.log(sumFinder([6,4,3,2,1,7], 9));
console.log(sumFinder([6,4,3,2,1,7], 2));
  