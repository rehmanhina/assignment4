







//1. Convert all elements to their string representation using map method
const array = [ 1,true,null,42];
const stringArray= array.map(stringArray);

// 2.Filter only number elements using filter method
const array = [1,"hello",42,true,null];
const numbers = array.filter(item =>typeof item==='number');
console.log(numbers);

//3. log each elements type to the console using for each method
const array = [1,"hello",42,true,null];
array.forEach(item =>
   console.log(typeof item));

//4. Sum up only the numbersin the array using reduce Method
const array = [1,"hello",42,true,null];
const Sum array.reduce((acc,item) =>(typeof item ==='number'?acc+item:acc),0);
console.log(Sum);

// 5. find the first boolean value in an array using find Method
const array = [1,"hello",false,42,true];
const firstBoolean array.find(item =>typeof item ==='boolean');
console.log(firstBoolean);

// 6. find the index of the first object in an array using find index Method:
const array = [1,"hello",{key:"value"},42,true];
const firstObjectIndex = array.findIndex
(item => typeof item=== 'object' &&! Array.isArray(item)&& item !==null);
console.log(firstObjectIndex);

// 7.check if the array contains any numbers using some method
const array = [1,"hello","world",true];
const hasNumber = array.some(item =>typeof item ==='number');
console.log(hasNumber);

// 8.Check if all elements are of type 'string in an array usingevery method:
const array = ["hellow","world","test"];
const allString = array.every(item => typeof item ==='string');
console.log(allString);