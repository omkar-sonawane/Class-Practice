// Write a program to print “Hello, World!”.
// console.log("hellow world")

// Take two numbers and print their sum.
// let a= 10;
// let b=20;
// console.log(a + b)


// Check if a number is even or odd.
// let a = 2;
// if (a%2 != 0) {
//     console.log("number is odd")
// }else{
//     console.log("number is even")
// }

// Find the largest of two numbers.
// let a=10;
// let b=20;
// if (a>b) {
//     console.log("A is bigger")
// }
// else{
//     console.log("B is bigger")
// }

// Check if a number is positive, negative, or zero.
// let a=0;
// if(a>0 ){
//     console.log("A is positive")

// }else if(a<0){
//     console.log("A is negative")
// }else{
//     console.log("A is zero")
// }


// Write a program to check if a person is eligible to vote (age ≥ 18).
// let age = 52;
// if (age >= 18) {
//     console.log("you are eligible to vote")
// }

// Find the square and cube of a number.
// let num = 15;
// console.log("square of 15 is :" +  num * num)
// console.log("cube of 15 is:" +  num * num * num)

// Convert Celsius to Fahrenheit.
// let Celsius = 25;
// console.log((Celsius * 9/5) + 32)

// Check if a year is a leap year.
// let year = 2016
// if (year % 4 == 0) {
//     console.log("this is leap year") 
// }

// Write a program to swap two numbers (without using a third variable).
// let a = 10
// let b = 20
// console.log("a =" +a,"b ="+b)
//  a= a + b // a = 30
// b = a-b // b = 30-20 = 10 
// a = a-b // a= 30-10 = 20
// console.log("a =" +a,"b ="+b)

// Print numbers from 1 to 10 using a loop.
// for (let i=0; i<=10 ; i++){
//     console.log(i)
// }

// Print the multiplication table of a number.
// const multiplication = (x)=>{
//     for(let i = 1; i<=10; i++){
//         console.log(x*i)
//     }
// }
// multiplication(20)

// Find the sum of natural numbers from 1 to n.
// const naturalNum = (n)=>{
//     let sum = 0;
//     for (let i=0; i<=n; i++){
//         sum = sum + i
//     }
//     return sum;
// }
// console.log(naturalNum(10))

// Find the factorial of a number.
// const factorial = (n)=>{
//     let fact = 1;
//     for(let i=1; i<=n; i++){
//         fact = fact * i
//         }
//         return fact
// }
// console.log(factorial(5))

// Print all even numbers between 1 and 50.
// for (let i=0; i<=50; i++){
//     if (i%2==0) {
//         console.log(`even number is ${i}`)
//     }
// }

// Print the reverse of a number.
// let num = 12345;

// function reverseNum(num){
//     let rev = 0;
//     while(num > 0 ){
    
//     let digit = num % 10;
//     rev = rev * 10 + digit;
//     num=Math.floor(num/10);
//  }
//  return rev
// }
// console.log(reverseNum(123456))

// Count the number of digits in a number.
// const countDigit = (n)=>{
//     digit = 0;
//     while(n !==0){
//         n = Math.floor(n/10)
//         digit++;
//     }
//     console.log(digit)
// }
// countDigit(225356123312)



// Find the sum of digits of a number.

// function addition(num){
//     let sum = 0;
//     while(num > 0 ){
    
//     sum += num % 10;
    
//     num=Math.floor(num/10);
//  }
//  return sum
// }
// console.log(addition(123456))


// Check if a number is a palindrome.

// Generate the Fibonacci series up to n terms.

// Create an array and print all elements.
// let arr =[1,2,3,4,5]
// for(item of arr){
//     console.log(item)
// }

// Find the maximum and minimum number in an array.
// let arr =[1,2,3,4,5,58,96,1,2,5]
//     let max = arr[0]
//     let min = arr[0]
// for(let i=0; i<arr.length; i++){
    
//     if (arr[i]>max){
//         max = arr[i]  
//     }
//     if (arr[i]<min){
//         min = arr[i] 
//     }
    
// }
//     console.log(max)
//     console.log(min)

// Find the sum of all elements in an array.
// let arr = [1,2,3,4,5]
// let sum = 0;
// for (item of arr){
//     sum += item
// }
// console.log(sum)

// Count how many even and odd numbers are in an array.
// let arr = [1,2,3,4,5]
// let evencount = 0;
// let oddcount = 0;
// for(item of arr){
//     if(item % 2 ==0){
//         evencount++
//     }else{
//         oddcount++
//     }
// }
// console.log("even",evencount)
// console.log("odd",oddcount)

// Reverse an array.
// let arr = [1,2,3,4,5]
//  const newArr = arr.reverse()
//  console.log(newArr)

// Sort an array in ascending order.
// let arr = [8,5,6,4,2,1]
// let newArr = arr.sort(function (a,b){
//     return a-b;
// })
// console.log(newArr)

// Remove duplicates from an array.

// Find the second largest element in an array.

// Check if an element exists in an array.

// Merge two arrays into one
