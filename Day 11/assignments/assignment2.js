function nge(arr, n) {
    let resultArray = [];
    let stack = [];
    
    for(let i = n - 1; i >= 0; i--) {
        while(stack.length > 0 && arr[i] >= stack[stack.length - 1]) {
            stack.pop();
        }
        
        if (stack.length == 0){
            resultArray[i] = -1
        }else{
            resultArray[i] = stack[stack.length - 1];
        }
        stack.push(arr[i]);
    }
    document.write(resultArray.forEach((ele) => ele));
    return resultArray;
}
