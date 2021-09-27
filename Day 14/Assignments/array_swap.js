Array.prototype.swap = function (a, b) {
  let c = this[a];
  this[a] = this[b];
  this[b] = c;
  return this;
};

console.log([4, 5, 8, 2].swap(0, 1));
console.log([4, 5, 8, 2].swap(2, 3));
