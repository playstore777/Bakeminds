Array.prototype.sum = function () {
  return this.reduce((a, b) => a + b, 0);
};

console.log([5, 3, 2, 1].sum());
console.log([9, 8].sum());
