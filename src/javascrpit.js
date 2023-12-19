// 1	Create an Array of Given Size in JavaScript
// 2	How to Initialize an Array in JavaScript ?
// 3	Ways of Iterating Over an Array in JavaScript
// 4	Most Efficient Way to Create a Zero Filled Array in JavaScript
// 5	JavaScript Program to Create an Array with a Specific Length and Pre-filled Values
// 6	How to Check if an Array includes a Value in JavaScript?
// 7	JavaScript Program to Access Elements in an Array
// 8	JavaScript Program to Determine the Length of an Array
// 9	Check if an Element is Present in an Array using JavaScript
// 10	JavaScript Program to Swap First and Last Elements in an Array

// Create an Array of Given Size in JavaScript

// const arrayOfSize = (Size) => {
//   let createArrayOfSize = [];
//   for (let i = 0; i < Size; i++) {
//     createArrayOfSize.push(i);
//   }
//   return createArrayOfSize;
// };

// console.log("arrayOfSize", arrayOfSize(5));

//How to Check if an Array includes a Value in JavaScript?

// let array = ["12", "33", "12", "45", "90"];
// const checkIncludesArray = (value) => {
//   const isCheckValue = array.map((array) => {
//     if (array === value)
//       return `${value} is present in array `;
//     else {
//       return `This ${value} value is not present in array `;
//     }
//   });

//   return isCheckValue;
//   for (let i = 0; i < array.length; i++) {

//     if (array[i] == value) {
//         console.log("ee")
//       return "present";
//     }
//   }

//   return "not present";
// };

// console.log("checkIncludesArray  ", checkIncludesArray(12));

// let num = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

// function check(element) {
//   for (let i = 0; i < num.length; i++) {
//     if (num[i] == element) return element + " is present in the array.";
//   }
//   return element + " is not present in the array.";
// }
// console.log(check(8));

// 10	JavaScript Program to Swap First and Last Elements in an Array

// const array = ["16", "28", "39", "41", "50", "21"];

// const swapArrayFirstToLast = (array) => {
//   for (let i = 0; i < array.length; i++) {
//     const firstIndexValue = array[0];
//     if (i === 0) {
//       array[i] = array[array.length - 1];
//       array[array.length -1] = firstIndexValue;
//     }
//   }

//   return array;
// };

// console.log(swapArrayFirstToLast(array));

// JavaScript Program to Delete Middle Element from an Array

// const DeleteMiddleElement = (array) => {
//   const findMiddleValue = array.length / 2;

//   for (let i = 0; i < array.length; i++) {
//     if (i === findMiddleValue) {
//       delete array[i];
//     }
//   }
//   return array;
// };

// console.log(DeleteMiddleElement(array));

// Copy Array Items into Another Array in JavaScript

// const copyArrayItemsToAnotherArray = (array) => {
//     for(let i = 0; i < array.length; i++){

//     }
// };

// console.log(
//   "copyArrayItemsToAnotherArray",
//   copyArrayItemsToAnotherArray(array)
// );

// JavaScript Program to Create an Array of Unique Values From Multiple Arrays Using Set Object

// const array2 = ["21", "15", "15", "29", "21"];

// const createUniqueValueUsingMultipleArray = (array, array2) => {
//   const data = array.concat(array2);
//   console.log("data", data);

//   let array3 = [];

//   // console.log(data)
//   for (let i = 0; i < data.length; i++) {
//     console.log("data", i);
//     console.log("data[i]", data[i]);
//     console.log("data[i + 1]", data[i + 1]);
//     if (!(data[i] === data[i + 1])) {
//       array3.push(data[i]);
//     }
//   }

//   console.log("array3", array3);

//   return array3;
// };

// console.log(createUniqueValueUsingMultipleArray(array, array2));

import React from 'react'

export const javascrpit = () => {
  return (
    <div>javascrpit</div>
  )
}
