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

// console.log(vowelRemover("how are you today?"))

/////////////////////////////////////////////////////////

// function squareDigits(num){
//     return parseInt(Array.from(String(num), Number).map(val => val * val).join(""))
// }

// console.log(squareDigits(3212))

// function findShort(s){
//     let newStr = s.split(" ")
//     let shortestWord = "abcdefghijklmnopqrstuvwxyz"

//     for (let i = 0; i < newStr.length; i++) {
//         if (newStr[i].length < shortestWord.length) {
//             shortestWord = newStr[i]
//         }
//     }
//     return shortestWord.length
// }

// console.log(findShort("bitcoin take over the world maybe who knows perhaps"))

/////////////////////////////////////////////////

// function filter_list(l) {
//     return l.filter(val => typeof val !== "string")
// }

// console.log(filter_list([1,2,'a','b']))

////////////////////////////////////////////////////

// function DNAtoRNA(dna) {
//     return dna.replaceAll("T", "U")
// }

// console.log(DNAtoRNA("GACCGCCGCC"))

////////////////////////////////////////////////////

// function yearDays(year){
//     let days = 0
//     if (year % 4 === 0) {
//         days = 366
//     } else {
//         days = 365
//     }
//     return `${year} has ${days} days`
// }

// console.log(yearDays(100))

////////////////////////////////////////////////////////

// function bmi(weight, height) {
//     let result = weight / Math.pow(height, 2)

//     if (result <= 18.5) {
//         return "Underweight"
//     }

//     if (result <= 25.0) {
//         return "Normal"
//     }

//     if (result <= 30.0) {
//         return "Overweight"
//     }

//     return "Obese"
// }

// console.log(bmi(57, 1.73))

/////////////////////////////////////////////////////

// function reverseWords(str) {
//     let result = ""
//     for (let i = str.length - 1; i >= 0; i--) {
//         result += str[i]
//     }
//     return result.split(" ").reverse().join(" ")
// }

// const reverseWords = (str) => str.split(" ").map(word => word.split("").reverse().join("")).join(" ")

// console.log(reverseWords("This is an example!"))

//////////////////////////////////////////////////////

// function validatePIN(pin) {
//     return /^(\d{4}|\d{6})$/.test(pin)
// }

// console.log(validatePIN(12345))

/////////////////////////////////////////////////////////

// function betterThanAverage(classPoints, yourPoints) {
//     return yourPoints > classPoints.reduce((prev, current) => prev + current, 0) / classPoints.length
// }

// console.log(betterThanAverage([100, 40, 34, 57, 29, 72, 57, 88], 75))

///////////////////////////////////////////////////////////

// function opposite(number) {
//     return number * -1
// }

// console.log(opposite(-3))

///////////////////////////////////////////////////////////

// function oddOrEven(array) {
//     return array.reduce((a, b) => a + b, 0) % 2 === 0 ? "even" : "odd"
// }

// console.log(oddOrEven([0, 1, 5]))

///////////////////////////////////////////////////////////

// function smash (words) {
//     return words.join(" ")
// };

// console.log(smash(["this", "is", "a", "really", "long", "sentence"]))

///////////////////////////////////////////////////////////

// function descendingOrder(n){
//     return parseInt(n.toString().split("").sort((a, b) => b - a).join(""))
// }

// console.log(descendingOrder(123456789))

///////////////////////////////////////////////////////////

// function isVow(a){
//     for (let i = 0; i < a.length; i++) {
//         if (a[i] === 97) {
//             a[i] = "a"
//         } else if (a[i] === 101) {
//             a[i] = "e"
//         } else if (a[i] === 105) {
//             a[i] = "i"
//         } else if (a[i] === 111) {
//             a[i] = "o"
//         } else if (a[i] === 117) {
//             a[i] = "u"
//         }
//     }
//     return a
// }

// console.log(isVow([118,117,120,121,117,98,122,97,120,106,104,116,113,114,113,120,106]))

//////////////////////////////////////////////

// var isSquare = function(n){
//     return Math.ceil(Math.sqrt(n)) === Math.sqrt(n)
// }

// console.log(isSquare(5))

///////////////////////////////////////////////

// const binaryArrayToNumber = arr => parseInt(arr.join(""), 2)

// console.log(binaryArrayToNumber([1, 0, 1, 1]))

///////////////////////////////////////////////

// function squareSum(numbers){
//     return numbers.map(num => num * num).reduce((a, b) => a + b, 0)

//     return numbers.reduce((sum, n) => (n*n) + sum, 0)
// }

// console.log(squareSum([0, 3, 4, 5]))

/////////////////////////////////////////////////

// function solution(str, ending){
//     return str.slice(str.length - ending.length) === ending

//     return str.endsWith(ending)
// }

// console.log(solution('abcde', 'cde'))

/////////////////////////////////////////////////

// function XO(str) {
//     let lowered = str.toLowerCase()
//     let xCount = 0
//     let oCount = 0

//     for (let i = 0; i < lowered.length; i++) {
//         if (lowered[i] === "x") {
//             xCount++
//         }
//         if (lowered[i] === "o") {
//             oCount++
//         }
//     }
//     return xCount === oCount
// }

// console.log(XO("zpzpzp"))

//////////////////////////////////////////////////

// NOT SOLVED YET
// function nbYear(p0, percent, aug, p) {    
//     for (var year = 0; p0 < p; year++) {
//         p0 = p0 * (1 + percent/100) + aug    
//     }
//     return year
// }

// console.log(nbYear(1500, 5, 100, 5000))

//////////////////////////////////////////////////

// const areaOrPerimeter = function(l , w) {
//     return l == w ? l * w : (l * 2) + (w * 2)    
// };

// console.log(areaOrPerimeter(6, 10))

//////////////////////////////////////////////////

// function twiceAsOld(dadYearsOld, sonYearsOld) {
//     return Math.abs(dadYearsOld - sonYearsOld * 2)
// }

// console.log(twiceAsOld(55, 30))

//////////////////////////////////////////////////

// var countSheep = function (num){
//     let result = ""

//     if (num == 0) {
//         return result
//     } else {
//         for (let i = 1; i <= num; i++) {
//             result += `${i} sheep...`
//         }
//     }
//     return result
// }

// console.log(countSheep(0))

////////////////////////////////////////////////////

// function finalGrade (exam, projects) {
//     if (exam > 90 || projects > 10) return 100
//     if (exam > 75 && projects >= 5) return 90
//     if (exam > 50 && projects >= 2) return 75
//     return 0
// }

// console.log(finalGrade(85, 5))

////////////////////////////////////////////////////

// function feast(beast, dish) {
//     return beast[0] == dish[0] && beast[beast.length-1] == dish[dish.length-1]
// }

// console.log(feast("great blue heron", "garlic naan"))

///////////////////////////////////////////////////

// function isDivideBy(number, a, b) {
//     return number % a === 0 && number % b === 0
// }

// console.log(isDivideBy(15, 3, -5))

///////////////////////////////////////////////////

// const reverseSeq = n => {
//     let arr = []
//     for (let i = n; i > 0; i--) {
//         arr.push(i)
//     }
//     return arr
// }

// console.log(reverseSeq(5))

///////////////////////////////////////////////////

// function sameCase(a, b){
//     if (/[a-z]/i.test(a) && /[a-z]/i.test(b)) {
//         return Number(/[a-z]/.test(a) == /[a-z]/.test(b))
//     }
//     return -1
// }

// console.log(sameCase("a", "g"))

////////////////////////////////////////////////////

// function elevator(left, right, call) {
//     return Math.abs(call - left) < Math.abs(call - right) ? "left" : "right"
// }

// console.log(elevator(0, 2, 1))

////////////////////////////////////////////////////

// function pillars(num_pill, dist, width) {
//     return num_pill > 1 ? (num_pill - 1) * (dist * 100) + (width * (num_pill - 2)) : 0
// }

// console.log(pillars(11, 15, 30))

/////////////////////////////////////////////////////

// function usdcny(usd) {
//   return (usd * 6.75).toFixed(2).toString() + " Chinese Yuan"
// }

// console.log(usdcny(1668))

/////////////////////////////////////////////////////

// function nearestSq(n){
//     return Math.pow(Math.round(Math.sqrt(n)), 2)
// }

// console.log(nearestSq(111))

/////////////////////////////////////////////////////

// function defineSuit(card) {
//     return card.includes('♣') ? 'clubs' : card.includes('♦') ? 'diamonds' : card.includes('♥') ? 'hearts' : 'spades'
// }

// console.log(defineSuit('3♣'))

////////////////////////////////////////////////////

// function multipleOfIndex(array) {
//     let result = []
//     for (let i = 0; i <= array.length; i++) {
//         if (array[i] % i === 0) {
//             result.push(array[i])
//         }
//     }
//     return result
// }

//another solution
// const multipleOfIndex = (array) => array.filter((el, index) => el % index === 0)

// console.log(multipleOfIndex([22, -6, 32, 82, 9, 25]))

////////////////////////////////////////////////////

// function sakuraFall(v) {
//     return v > 0 ? 400 / v : 0
// }

// console.log(sakuraFall(10))

////////////////////////////////////////////////////

// function otherAngle(a, b) {
//     return 180 - a - b
// }

// console.log(otherAngle(30, 30))

////////////////////////////////////////////////////

// function power(x,y){
//     let result = 1
//     for (let i = 1; i <= y; i++) {
//         result *= x
//     }
//     return result
// }

// console.log(power(3, 2))

////////////////////////////////////////////////////

// function whatday(num) {
//     if (num === 1) return "Sunday"
//     if (num === 2) return "Monday"
//     if (num === 3) return "Tuesday"
//     if (num === 4) return "Wednesday"
//     if (num === 5) return "Thursday"
//     if (num === 6) return "Friday"
//     if (num === 7) return "Saturday"
//     else return "Wrong, please enter a number between 1 and 7"
// }

// console.log(whatday(4))

////////////////////////////////////////////////////

// function iceBrickVolume(radius, bottleLength, rimLength) {
//     return radius * 2 * (bottleLength - rimLength) * radius
// }

// console.log(iceBrickVolume(5, 30, 7))

////////////////////////////////////////////////////

// function typeValidation(variable, type) {
//     return typeof variable === type
// }

// console.log(typeValidation(42, "number"))

////////////////////////////////////////////////////

// var replaceDots = function(str) {
//     // return str.replaceAll('.', '-')
//     // return str.replace(/\./g, '-')
//     return str.replace(/[.]/g, '-')
// }

// console.log(replaceDots("one.two.three"))

////////////////////////////////////////////////////

// function integrate(coefficient, exponent) {
//     let newExp = exponent + 1
//     return coefficient/(exponent + 1) + "x^" + (exponent + 1)
// }

// console.log(integrate(3, 2))

////////////////////////////////////////////////////

// function checkTheBucket(bucket){
//     return bucket.indexOf("gold") !== -1
// }

// console.log(checkTheBucket(["gold", "stone", "stone", "stone", "stone"]))

////////////////////////////////////////////////////

// function derive(coefficient,exponent) {
//     return coefficient * exponent + "x^" + (exponent - 1)
//     // string + / * integer = string
//     // (exponent - 1) harus dikasih kurung karena operasi ini akan diselesaikan terlebih dahulu 
//     // yang nantinya menghasilkan integer
//     // jadi operasi akhirnya itu integer * integer + string + integer = string
    
//     // kalo ga dikasih kurung, integer * integer + string (sampe sini udah jadi string) + int - int
//     // jadi error karena string ketemu integer = NaN
// }

// console.log(derive(7, 8))

/////////////////////////////////////////////////////

// function capitalizeWord(word) {
//     return word[0].toUpperCase() + word.slice(1)
// }

// console.log(capitalizeWord("hello"))

/////////////////////////////////////////////////////

// function oddCount(n){
//     // programming approach
//     let result = []
//     for (let i = 1; i < n; i++) {
//         if (i % 2 !== 0) {
//             result.push(i)
//         }
//     }
//     return result.length
    
//     // sneaky math approach
//     return Math.floor(n/2)
// }

// console.log(oddCount(15023))

//////////////////////////////////////////////////////

// function warnTheSheep(queue) {
//     // my solution
//     if (queue[queue.length-1] === "wolf") {
//         return "Pls go away and stop eating my sheep"
//     } else if (queue.includes("wolf")) {
//         return "Oi! Sheep number " + (queue.length - 1 - queue.indexOf("wolf")) + "! You are about to be eaten by a wolf!"
//     }

//     // genius solution
//     const position = queue.reverse().indexOf('wolf');
//     return position === 0 ? 'Pls go away and stop eating my sheep' : `Oi! Sheep number ${ position }! You are about to be eaten by a wolf!`
// }

// console.log(warnTheSheep(["sheep", "sheep", "sheep", "sheep", "sheep", "wolf", "sheep", "sheep"]))

//////////////////////////////////////////////////////

// function unusualFive() {
//     // lmao this kata
//     return "fivee".length
// }

// console.log(unusualFive())

//////////////////////////////////////////////////////

// function nthEven(n){
//     return 2*n-2
// }

// console.log(nthEven(100))

//////////////////////////////////////////////////////

// function spEng(sentence){
//     return (/english/i).test(sentence)
// }

// console.log(spEng("english"))

//////////////////////////////////////////////////////

// function invert(array) {
//     return array.map(num => num * -1)
// }

// console.log(invert([1,2,3,4,5]))

//////////////////////////////////////////////////////

// function updateLight(current) {
//     switch(current) {
//         case "green":
//             return "yellow"
//             break
//         case "yellow":
//             return "red"
//             break
//         case "red":
//             return "green"
//             break
//     }
// }

// console.log(updateLight("yellow"))

////////////////////////////////////////////

// const zeroFuel = (distanceToPump, mpg, fuelLeft) => {
//     return mpg * fuelLeft >= distanceToPump
// }

// console.log(zeroFuel(50, 25, 2))

///////////////////////////////////////////

// function enough(cap, on, wait) {
//     return cap - on + wait
// }

// console.log(enough(10, 5, 5))

////////////////////////////////////////////

// function findDifference(a, b) {
//     return Math.abs(a.reduce((previous, current) => previous * current, 1) - b.reduce((previous, current) => previous * current, 1))
// }

// console.log(findDifference([6,6,10], [4,10,6]))

////////////////////////////////////////////

// function findMultiples(integer, limit) {
//     let array = []
//     for (let i = integer; i <= limit; i+=integer) {
//         array.push(i)
//     }
//     return array
// }

// console.log(findMultiples(2, 10))

///////////////////////////////////////////

// function seatsInTheater(nCols, nRows, col, row) {
//     return (nCols - (col - 1)) * (nRows - row); 
// }

// console.log(seatsInTheater(16,11,5,3))

///////////////////////////////////////////

// function combat(health, damage) {
//     return health - damage > 0 ? health - damage : 0
// }

// console.log(combat(100, 120))

///////////////////////////////////////////

// function simpleMultiplication(number) {
//     return number % 2 == 0 ? number * 8 : number * 9
// }

// console.log(simpleMultiplication(2))

///////////////////////////////////////////

// function litres(time) {
//     return Math.floor(0.5 * time)
// }

// console.log(litres(100))

///////////////////////////////////////////

// function switchItUp(number){
//     switch (number) {
//         case 1:
//         return "One"
//         break
//         case 2:
//         return "Two"
//         break
//         case 3:
//         return "Three"
//         break
//         case 4:
//         return "Four"
//         break
//         case 5:
//         return "Five"
//         break
//         case 6:
//         return "Six"
//         break
//         case 7:
//         return "Seven"
//         break
//         case 8:
//         return "Eight"
//         break
//         case 9:
//         return "Nine"
//         break
//     }
// }

// console.log(switchItUp(3))

////////////////////////////////////////

// function apple(x){
//     return Math.pow(x, 2) > 1000 ? "It's hotter than the sun!!" : "Help yourself to a honeycomb Yorkie for the glovebox."
// }

// console.log(apple(50))

////////////////////////////////////////

// function position(letter){
//     return `Position of alphabet: ${letter.charCodeAt() - 96}`
// }

// console.log(position("c"))

////////////////////////////////////////

// function grow(x){
//     return x.reduce((prev, curr) => prev * curr, 1)
// }

// console.log(grow([1, 2, 3]))

////////////////////////////////////////

// function howMuchILoveYou(nbPetals) {
//     const phrases = ["I love you", "a little", "a lot", "passionately", "madly", "not at all"]
//     return phrases[(nbPetals - 1) % 6]
// }

// console.log(howMuchILoveYou(367))

////////////////////////////////////////

// function strCount(str, letter){
//     // let count = 0
//     // for (let i = 0; i < str.length; i++) {
//     //     if (letter == str[i]) {
//     //         count++
//     //     }
//     // }
//     // return count

//     // genius
//     return str.split(letter).length-1
// }

// console.log(strCount("Hello", "l"))

/////////////////////////////////////////

