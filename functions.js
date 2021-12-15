/* 
1. Define a function maxOfTwoNumbers that takes two numbers as arguments and returns the largest of them. Use the if-then-else construct available in Javascript. Do some googling to figure this out if you forget how conditionals work.
*/

maxOfTwoNumbers = (num1, num2) => {
  // ADD YOUR CODE HERE
  if (num1 > num2) {
    console.log("Num1 is the larger number")
      return num1;
  } else if (num2 > num1) {
    console.log("Num2 is the larger number")
      return num2;
  } else if (num1 === num2) {
      console.log("The numbers are even")
  } else {
    console.log("Sorry, not enough numbers")
  }
};

maxOfTwoNumbers(6, 1);

/*
2. Define a function maxOfThree that takes three numbers as arguments and returns the largest of them.
*/
maxOfThree = (num1, num2, num3) => {
  // ADD YOUR CODE HERE
  if (num1 > num2 && num1 > num3) {
    console.log("Num1 is the largest number")
    return num1;
} else if (num2 > num1 && num2 > num3) {
    console.log("Num2 is the largest number")
    return num2;
} else if (num3 > num1 && num3 > num2) {
    console.log("Num3 is the largest number")
    return num3;
}
else if (num1 === num2 && num1 === num3) {
    console.log("The numbers are even")
} else {
    console.log("Sorry, not enough numbers")
}
};

maxOfThree(3, 4);

/*
3. Write a function isCharacterAVowel that takes a character (i.e. a string of length 1) and returns true if it is a vowel, false otherwise.
*/
let vowels = ['a', 'e', 'i', 'o', 'u'];
isCharacterAVowel = (letter) => {
  // ADD YOUR CODE HERE
  for(let i = 0; i < vowels.length; i++) {
      if(letter === vowels[i]) {
          console.log(true);
          return true;
      } else {
          console.log(false);
          return false;
      }
  }
};

isCharacterAVowel('z')

/*
4. Define a function sumArray and a function multiplyArray that sums and multiplies (respectively) all the numbers in an array of numbers. For example, sumArray([1,2,3,4]) should return 10, and multiplyArray([1,2,3,4]) should return 24.
*/
let numArr = [1, 2, 3, 4 ,5];
let sum = 0;
sumArray = (arr) => {
  // ADD YOUR CODE
  for(let i = 0; i < arr.length; i++) {
      sum += arr[i];
}
console.log(`The sum of the array is ` + sum)
return sum;
};

sumArray(numArr)

/*
5.Write a function that returns the number of arguments passed to the function when called.
*/

returnNumOfArgs = (args1, args2, args3) => {
  console.log(returnNumOfArgs.length);
}

returnNumOfArgs();
/*
6. Define a function reverseString that computes the reversal of a string. For example, reverseString("jag testar") should return the string "ratset gaj".
*/

reverseString = (str) => {
  // ADD YOUR CODE
  console.log(str.split("").reverse().join(""))
  return str.split("").reverse().join("");
};

reverseString("hello")
/*
7. Write a function findLongestWord that takes an array of words and returns the length of the longest one.
*/
// let wordArr = ["Joshua", "Jane", "Jo", "Justin"]
// findLongestWord = (arr) => {
//   // ADD YOUR CODE 
//   let arrToString = arr.toString();
//   let longestWord = 0;
//   for(let i = 0; i < arrToString.length; i++){
//     if(arrToString[i].length > longestWord){
// 	longestWord = arrToString[i];
//      }
//   }
//   console.log(longestWord.length)
//   return longestWord;
// };

// findLongestWord(wordArr)

/*
8. Write a function filterLongWords that takes an array of words and a number i and returns the array of words that are longer than i characters long.
*/
// arrNames = ["Joshua", "Jane", "Jo", "Justin"]
// let longWordsArr = []
// let i = 0;
// filterLongWords = (arr, i) => {
//   // ADD YOUR CODE HERE
//    for (let j = 0; j < arr.length; j++) {
//       if (arr[j] > i) {
//         longWordsArr.push(arr[j])
//       } else {
//           continue
//       }
//       console.log(longWordsArr)
//   }
// };

// filterLongWords(arrNames, 4)
// console.log(i)

// let arrToString = wordArr.toString();
// let strSplit = arrToString.split('');
// console.log(arrToString)
// console.log(strSplit)



