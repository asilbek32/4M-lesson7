// Array.prototype.myMap = function(cb){
//     let ar = []
//  for(i =0; i < this.length; i++){

//   ar.push(this[i], i, this)
//  }
//  return ar
// }

// let arr = [1,3,4,5,6]
// arr.myMap((it, i, ar)=>{
//     console.log(i);
// });

function capitalaze() {
  let d = "hello js ds";
  for (let i = 0; i < d.length; i++) {
    d = d[i].toUpperCase + d.slice(1);
    return d;
  }
}

console.log(capitalaze());


Array.prototype.myReduce = function (callback, initialValue) {
  let accumulator = initialValue;
  let startIndex = 0;
  if (accumulator === undefined) {
    if (this.length === 0) {
      return;
    }
    accumulator = this[0];
    startIndex = 1;
  }

  for (let i = startIndex; i < this.length; i++) {
    accumulator = callback(accumulator, this[i], i, this);
  }

  return accumulator;
};

let a = [1, 3, 4, 5];
let sum = a.myReduce((acc, num) => acc + num, 0);
console.log(sum);

Array.prototype.myFilter = function (callback) {
  const result = [];
  for (let i = 0; i < this.length; i++) {
    if (callback(this[i], i, this)) {
      result.push(this[i]);
    }
  }
  return result;
};

const arr = [1, 2, 3, 4];
const mF = arr.myFilter(num => num % 2 === 0);
console.log(mF); 

Array.prototype.mySome = function (callback) {
  for (let i = 0; i < this.length; i++) {
    if (callback(this[i], i, this)) {
      return true;
    }
  }
  return false;
};

const arr1 = [1, 3, 5, 6];
const hasEven = arr1.mySome(num => num % 2 === 0);
console.log(hasEven); 

Array.prototype.myEvery = function (callback) {
  for (let i = 0; i < this.length; i++) {
    if (!callback(this[i], i, this)) {
      return false;
    }
  }

  return true;
};

const arr2 = [2, 4, 63];
const allEven = arr2.myEvery(num => num % 2 === 0);
console.log(allEven); 

Array.prototype.myFind = function (callback) {
  for (let i = 0; i < this.length; i++) {
    if (callback(this[i], i, this)) {
      return this[i];
    }
  }

  return undefined;
};

const arr4 = [5, 8, 7, 89];
const found = arr4.myFind(num => num > 10);
console.log(found); 