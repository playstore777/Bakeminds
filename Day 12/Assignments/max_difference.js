let maxDiff = arr => {
    let maxArr = [];
    for (let i = 0; i < arr.length; i++) {
      for (let j = i+1; j < arr.length; j++) {
        maxArr.push(arr[j] - arr[i]);
      }
    }
    //console.log(Math.abs(Math.max(...maxArr)));
    return Math.max(...maxArr);
  }
  
  
  maxDiff([2, 1, 3, 10, 6, 4, 8, 1]);
    
  