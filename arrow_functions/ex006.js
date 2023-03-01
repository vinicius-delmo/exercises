/*function getEvenNumbers(array) {
    let evenNumbers = [];
    for (let i of array) {
      if (i % 2 === 0) {
        evenNumbers.push(i);
      }
    }
    return evenNumbers;
  }*/
  
const getEvenNumbers = array => array.filter(num => num % 2 === 0);
//const myArray = [1, 2, 3, 4, 5, 6];
//const result = getEvenNumbers(myArray);
//console.log(result);
