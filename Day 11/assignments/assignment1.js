function correctPairsAndOrders(x) {
    if (x.length === 1) {
        document.write('Not Balanced');
        return 0;
    }
    let open = ['(', '[', '{'];
    let close = [')', ']', '}'];
    let stack = [];
    for (let bracket of x) {
        if (open.includes(bracket)){
            stack.push(bracket);
        }else{
            let lastBracket = stack.pop();
            if (close.indexOf(bracket) === open.indexOf(lastBracket)){
                continue;
            }else{
                document.write('Not Balanced');
                return 0;
            }
        }
    }
    if (stack.length !== 0) {
        if (open.includes(stack[stack.length - 1])){
            document.write('Not Balanced');
            return 0;
        }
    }
    document.write('Balanced');
}

correctPairsAndOrders(exp);
// let open = ['(', '[', '{'];
// let close = [')', ']', '}'];
// let isOpen = [];
// for(let char of exp) {
//     //console.log('char '+char)
//     if (open.includes(char)){
//         isOpen.push(open.indexOf(char));
//         //console.log('isOpen '+isOpen)
//     }else{
//         if (isOpen === 'undefined') return 'Not Balanced';
//         if (close.indexOf(char) === isOpen[isOpen.length - 1]){
//             isOpen.pop();
//             continue;
//         }else{
//             //console.log(close.indexOf(char) === isOpen)
//             document.write('Not Balanced');
//             return 'Not Balanced';
//         }
//     }
// }
// document.write('Balanced');
// return 'Balanced';