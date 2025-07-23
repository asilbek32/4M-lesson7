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

//reduce
Array.prototype.myreduce = function(cb){

}


let a = [1,4,56,7]
const sum =a.reduce((acc, num) => acc+ num, 0)

console.log(sum);
