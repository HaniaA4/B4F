/*
function countPairs (array) {
    if (array.length === 0) {
        return 0; 
    }
    if (array[0]% 2 === 0) {
        return 1 + countPairs(array.slice(1));
    }
    return countPairs(array.slice(1));
}
console.log(countPairs([2, 3, 4, 5, 6, 8, 10]));*/

/*function makeFunction (arr) {
    const newArr=  arr.map((ele) => ele.length);
    return newArr;
} 
function makeFunction (arr) {
    const newArr = arr.map((ele) => {
        return ele.length;
    });
    return newArr;
} */
  const numbers= ([1, 2, 3, 4]);
function elements (arr) {
  
    return arr.filter((ele) => ele % 2 === 0 )
    .map((ele) => ele ** 2)
    .reduce((acc, currVal) => acc + currVal)
  
  }

console.log(elements(numbers));