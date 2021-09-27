Array.prototype.insert = function (value, index) {
  this.splice(index, 0, value);
  return this;
};

console.log([8, 3, 7, 4].insert(9, 2));
console.log([7, 2, 9, 5, 3].insert(2, 0));
