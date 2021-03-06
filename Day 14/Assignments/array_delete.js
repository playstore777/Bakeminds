Array.prototype.delete = function (value) {
  let index = this.indexOf(value);
  if (index !== -1) {
    this.splice(index, 1);
  }
  return this;
};

console.log([8, 3, 7, 4].delete(9));
console.log([8, 3, 7, 4].delete(7));
console.log(["hello", "z", 41, "well"].delete("z"));
console.log([7, 2, 9, 5, 3].delete(2));
