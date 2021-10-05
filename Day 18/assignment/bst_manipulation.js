// let BST = {
//     value: 8,
//     left: {
//         value: 3,
//         left: {
//             value: 1,
//             left: null,
//             right: null,
//         },
//         right: {
//             value: 6,
//             left: {
//                 value: 4,
//                 left: null,
//                 right: null,
//             },
//             right: {
//                 value: 7,
//                 left: null,
//                 right: null,
//             },
//         },
//     },
//     right: {
//         value: 10,
//         left: null,
//         right: {
//             value: 14,
//             left: {
//                 value: 13,
//                 left: null,
//                 right: null,
//             },
//             right: null,
//         },
//     },
// };

// 1 2 7 11 15 29 35 40

let BST = {
    value: 11,
    left: {
        value: 1,
        left: null,
        right: {
            value: 2,
            left: null,
            right: {
                value: 7,
                left: null,
                right: null,
            },
        },
    },
    right: {
        value: 15,
        left: null,
        right: {
            value: 29,
            left: null,
            right: {
                value: 35,
                left: null,
                right: {
                    value: 40,
                    left: null,
                    right: null,
                },
            },
        },
    },
};

function bstTransformer(object, BST, objFunction) {
    if (BST.value !== "undefined") {
        objFunction(object, BST);
    }
    if (BST.left !== null) {
        bstTransformer(object, BST.left, objFunction);
    }
    if (BST.right !== null) {
        bstTransformer(object, BST.right, objFunction);
    }
    return { object, bst: BST };
}

insertToArray = (object, bst) => {
    object.push(bst.value);
    return object;
};

function bstValSum(array, bstObject) {
    let greaterValArray = array.filter((num) => num > bstObject.value);
    if (greaterValArray.length > 0) {
        bstObject.value = greaterValArray.reduce((a, b) => a + b);
    } else {
        bstObject.value = 0;
    }
    return bstObject;
}

let array = bstTransformer([], BST, insertToArray).object;

console.log(bstTransformer([], BST, insertToArray));
console.log(bstTransformer(array, BST, bstValSum).bst);

// function createArrayFromBST(object, BST) {
//     if (BST.value !== "undefined") {
//         object.push(BST.value);
//     }
//     if (BST.left !== null) {
//         createArrayFromBST(object, BST.left);
//     }
//     if (BST.right !== null) {
//         createArrayFromBST(object, BST.right);
//     }
//     return object;
// }

// manipulateBST = (bstObject, array) => {
//     if (bstObject.value !== "undefined") {
//         let greaterValArray = array.filter((num) => num > bstObject.value);
//         if (greaterValArray.length > 0) {
//             bstObject.value = greaterValArray.reduce((a, b) => a + b);
//         } else {
//             bstObject.value = 0;
//         }
//     }
//     if (bstObject.left !== null) {
//         manipulateBST(bstObject.left, array);
//     }
//     if (bstObject.right !== null) {
//         manipulateBST(bstObject.right, array);
//     }

//     return bstObject;
// };
