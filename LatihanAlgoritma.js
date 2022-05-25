// let nums = [1,2,3,4,5]

// function modifyArray(nums) {
//     let multipliedNums = (n) => {
//         if(n%2==0)
//             return n*2;
//         else
//             return n*3;
//     }
//     var newArray = nums.map(multipliedNums);
//     return newArray;
    
// }

// console.log(modifyArray(nums))

//////////////////////////////

// const factorial = (n) => n === 0 ? 1 : n * factorial(n-1)

// console.log(factorial(10))

//////////////////////////////

// const simpleArraySum = (arr) => {
//     let result = 0
//     for (let val of arr) {
//         result += val
//     }
//     return result
// }

// console.log(simpleArraySum([1,2,3,4,5]))

//////////////////////////////

// const palindrome = (str) => {
//     let reversedString = str.split('').reverse().join('')
//     return reversedString === str
// }

// console.log(palindrome("madam"))

///////////////////////////////

// const capitalizeLetters = (string) => {
    // let arr = string.split(' ')
    // for (let i = 0; i < arr.length; i++) {
    //     for (let j = 0; j < arr[i].length; j++) {
    //         arr[i][0].toUpperCase()
    //         console.log(arr[i][0])
    //     }
    // }

    // let arr = string.split(" ")
    // let uppercase = arr.map(item => item.toUpperCase())
    // return uppercase.join(" ")

//     let newStr = string.charAt(0).toUpperCase() + string.slice(1)
//     return newStr
// }

// console.log(capitalizeLetters("Hello i am haganta"))

//////////////////////////////

// const fizzBuzz = () => {
//     for (let i = 1; i <= 100; i++) {
//         if (i % 3 === 0 && i % 5 === 0) {
//             console.log("FizzBuzz")
//         } else if (i % 3 === 0) {
//             console.log("Fizz")
//         } else if (i % 5 === 0) {
//             console.log("Buzz")
//         } else 
//             console.log(i)
//     }
// }

// console.log(fizzBuzz())

///////////////////////////////

// const doubleMultiplication = (num, limit) => {
//     let arr = []
//     arr.push(num)
//     for (let i = 0; i <= limit; i++) {
//         num = num * 2
//         arr.push(num)
//     }
//     return arr
// }

// console.log(doubleMultiplication(1, 20))

//////////////////////////////////

// const longestWord = (sentence) => {
//     const wordArr = sentence.toLowerCase().match(/[a-z0-9]+/g)

//     const sorted = wordArr.sort((a, b) => b.length - a.length)

//     const result = sorted.filter(word => word.length === sorted[0].length)

//     if (result.length === 1) {
//         return result[0]
//     } else {
//         return result
//     }
// }

// console.log(longestWord("Hellooo, my name is Felix James"))

////////////////////////////////////

// const randomNumber = (min, max) => Math.round(Math.random() * (max - min) + min)

// console.log(randomNumber(1, 100))

////////////////////////////////////

// const palindromeNumber = x => {
//     let reversed =  x.toString().split('').reverse().join('')
//     return reversed == x
// }

// console.log(palindromeNumber(121))

////////////////////////////////////

// const mergeTwoLists = (list1, list2) => {
//     let result = []
//     for (let el of list1) {
//         result.push(el)
//     }
//     for (let el of list2) {
//         result.push(el)
//     }
//     // list1.forEach(el => result.push(el))
//     // list2.forEach(el => result.push(el))
//     return result.sort((a,b) => a-b)
// }

// console.log(mergeTwoLists([1,2,3],[2,3,4]))

// const validPalindrome = (s) => {
//     const squished = s.toLowerCase().match(/[a-z0-9]+/g).join('')
//     const reversed = squished.split('').reverse().join('')
//     return reversed === squished
// }

// console.log(validPalindrome("A man, a plan, a canal: Panama"))

////////////////////////////////////

// const flattenArray = (array) => array.reduce((a,b) => a.concat(b))

// SOLUTION 2
// return [].concat(...array)

// console.log(flattenArray([[1,2],[3,4],[5,6],[7]]))

////////////////////////////////////

// const sumElements = (array) => {
//     let result = 0
//     for(let el of array) {
//         result += el
//     }
//     return result
// }

// console.log(sumElements([1,2,3,4,5]))

////////////////////////////////////

// const isAnagram = (str1, str2) => {
//     let arr1 = str1.split('').sort().join('')
//     let arr2 = str2.split('').sort().join('')

//     return arr1 === arr2
// }

// console.log(isAnagram("elbow","below"))

/////////////////////////////////////

// const sumAllPrimes = (limit) => {
//     let resArr = []
//     for (let num = 2; num <= limit; num++) {
//         if (num % 2 === 1) {
//             resArr.push(num)
//         } else if (num === 2) {
//             resArr.push(num)
//         }
//     }

//     return resArr
// }

// console.log(sumAllPrimes(10))

///////////////////////////////////////////

// const getCount = (str) => {
//     let convertedStr = str.match(/\S/g).join("")
//     if (convertedStr.match(/[aeiou]/g) == null) {
//         return 0
//     } return convertedStr.match(/[aeiou]/g).length
// }

// function getCount(str) {
//     let vowelsCount = 0;
    
//     // enter your magic here
//     const arr = str.split("")
    
//     for (let i = 0; i < arr.length; i++) {
//       switch(arr[i]) {
//           case "a":
//           vowelsCount++
//           break
//           case "e":
//           vowelsCount++
//           break
//           case "i":
//           vowelsCount++
//           break
//           case "o":
//           vowelsCount++
//           break
//           case "u":
//           vowelsCount++
//           break
//       }
//     }
    
//     return vowelsCount;
//   }

// const getCount = (str) => {
//     let vowelsCount = 0
//     let vowels = ["a", "e", "i", "o", "u"]

//     for (let i = 0; i < str.length; i++) {
//         for (let j = 0; j < vowels.length; j++) {
//             if (str[i] === vowels[j]) {
//                 vowelsCount++
//             }
//         }
//     }
//     return vowelsCount
// }

// console.log(getCount("abracadabra"))

////////////////////////////////////////

// const isDivisible = (n, x, y) => n % x == 0 && n % y == 0

// console.log(isDivisible(4, 1, 2))

const smallestIntegerFinder = (arr) => {
    let sorted = arr.sort((a, b) => a - b)
    return sorted[0]
}

console.log(smallestIntegerFinder([34, 15, 88, 2]))