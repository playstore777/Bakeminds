let maxDiff = arr => {
    let max = Math.max(...arr);
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] < max) {
            document.write(max - arr[i]);
            return max - arr[i];
        }
    }
}

maxDiff([2, 3, 10, 6, 4, 8, 1]);