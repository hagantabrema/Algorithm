// let nums = [1,2,3,4,5]

// function modifyArray(nums) {
//     let multipliedNums = (n) => {
//         if(n%2==0)
//             return n*2;
//         else
//             return n*3;
// }
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

////////////////////////////////////////

// const smallestIntegerFinder = (arr) => {
//     let sorted = arr.sort((a, b) => a - b)
//     return sorted[0]
// }

// console.log(smallestIntegerFinder([34, 15, 88, 2]))

/////////////////////////////////////////////

// function getAverage(marks) {
//     let sum = 0
//     for (let el of marks) {
//         sum += el
//     }
//     let avg = sum / marks.length
//     return Math.floor(avg)
// }

// console.log(getAverage([1, 2, 3, 4, 5]))

///////////////////////////////////////////////

// const rps = (p1, p2) => {
//     /*
//     Player1     Player2     Result
//     rock        rock        Draw
//     rock        scissors    Player 1 won
//     rock        paper       Player 2 won
//     scissors    rock        Player 2 won
//     scissors    scissors    Draw
//     scissors    paper       Player 1 won
//     paper       rock        Player 1 won
//     paper       scissors    Player 2 won
//     paper       paper       Draw
//     */
//     if (p1 === p2) {
//         return "Draw!"
//     }
//     if (p1 === "rock" && p2 === "scissors" || p1 === "scissors" && p2 === "paper" || p1 === "paper" && p2 === "rock") {
//         return "Player 1 won!"
//     }
//     if (p1 === "rock" && p2 === "paper" || p1 === "scissors" && p2 === "rock" || p1 === "paper" && p2 === "scissors") {
//         return "Player 2 won!"
//     }


//     if (p1 === "rock" && p2 === "scissors" || p1 === "scissors" && p2 === "paper" || p1 === "paper" && p2 === "rock") {
//         return "Player 1 won!"
//     }
//     if (p1 === "rock" && p2 === "paper" || p1 === "scissors" && p2 === "rock" || p1 === "paper" && p2 === "scissors") {
//         return "Player 2 won!"
//     } else 
//         return "Draw!"


//     if (p1 === p2) {
//         return "Draw!"
//     }
//     if (p1 === "rock" && p2 === "scissors" || p1 === "scissors" && p2 === "paper" || p1 === "paper" && p2 === "rock") {
//         return "Player 1 won!"
//     } else
//         return "Player 2 won!"
// }

// console.log(rps("scissors", "paper"))

//////////////////////////////////////////////

// function removeChar(str) {

//     return str.slice(1, str.length - 1)
// }

// const removeChar = (str) => str.slice(1, -1)

// console.log(removeChar("hello"))

////////////////////////////////////////////////

// const positiveSum = (arr) => arr.filter(num => num > 0).reduce((prev, current) => prev + current, 0)

// const positiveSum = (arr) => arr.reduce((a, b) => a + (b > 0 ? b : 0), 0)

// console.log(positiveSum([1, 2, 3, -4, -5]))

/////////////////////////////////////////////////

// function basicOp(operation, value1, value2) {
//     switch(operation) {
//         case "+":
//             return value1 + value2
//             break
//         case "-":
//             return value1 - value2
//             break
//         case "*":
//             return value1 * value2
//             break
//         case "/":
//             return value1 / value2
//             break
//     }
// }

// console.log(basicOp("-", 5, 2))

////////////////////////////////////////////

// function repeatStr (n, s) {
//     let result = ""

//     for (let i = 1;i <= 3; i++) {
//         result +=s
//     }

//     return result
// }

// console.log(repeatStr(3, "hello"))

//////////////////////////////////////////////

// function noSpace(x) {
//     return x.match(/\S/g).join("")
// }

// console.log(noSpace('8 j 8   mBliB8g  imjB8B8  jl  B'))

///////////////////////////////////////////////

// const hero = (bullets, dragons) => bullets >= (dragons * 2)

// console.log(hero(7, 4))

///////////////////////////////////////////////

// const arrayPlusArray = (arr1, arr2) => arr1.concat(arr2).reduce((prev, current) => prev + current)

// console.log(arrayPlusArray([1, 4], [4, 1]))

///////////////////////////////////////////////

// function century(year) {
//     return Math.ceil(year/100)
// }

// console.log(century(199))

///////////////////////////////////////////////

// var humanYearsCatYearsDogYears = function(humanYears) {
//     let catYears = 0
//     let dogYears = 0

//     if (humanYears === 1) {
//         return [humanYears, 15, 15]
//     } else if (humanYears === 2) {
//         return [humanYears, 24, 24]
//     } else {
//         return [humanYears, 24 + (humanYears-2) * 4, 24 + (humanYears-2) * 5]
//     }
// }

// console.log(humanYearsCatYearsDogYears(3))

////////////////////////////////////////////////

// function points(games) {
//     let newArr = []
//     let points = 0

//     for (let i = 0; i < games.length; i++) {
//         newArr.push(games[i].match(/\d/g))
//     }

//     for (let i = 0; i < newArr.length; i++) {
//         if (newArr[i][0] > newArr[i][1]) {
//             points += 3
//         } else if (newArr[i][0] < newArr[i][1]) {
//             points += 0
//         } else {
//             points += 1
//         }
//     }

//     return points
// }

// console.log(points(["3:1", "2:1", "1:1"]))

/////////////////////////////////////////////////////////

// function vowelRemover(string) {
//     return string.replace(/[aeiou]/g, "")
// }

// console.log(shortcut("how are you today?"))