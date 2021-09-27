Array.prototype.delete = function (value) {
  for (let ele of this) {
    if (ele === value) {
      let index = this.indexOf(value);
      this.splice(index, 1);
    }
  }
  return this;
};

console.log([8, 3, 7, 4].delete(7));
console.log(["hello", "z", 41, "well"].delete("z"));
console.log([7, 2, 9, 5, 3].delete(2));
