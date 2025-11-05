//  #1
// const arr = [3,5,6,8,9]

// const { createElement } = require("react")

//  function double(x) {
//     return x * x;
// }
// const output = arr.map(double)

// console.log(output)

// #2

// let fruits = ["apple", "banana", "mango"];

// const output = fruits.map(function upper(x){
//     return x.toUpperCase()
// })

// console.log(output)


// #3

// let nums = [5, 10, 15, 20];

// const output = nums.map(function ten(x){
//     return x + 10;
// }) 

// console.log(output)

// #4

// let words = ["hi", "javascript", "map"];

// const output = words.map(function len(x){
//     return x.length
// })

// console.log(output)


// #5

// let numbers = [1, 2, 3, 4];

// const output = numbers.map (function str(x){

//     return x.toString()
// })

// console.log(output)

// #6

// let names = ["Omkar", "Ravi", "Sneha"];

// const output = names.map(function first(x){
//     return x[0]
// })
// console.log(output)

// #7


// const users = [
//     {firstname:"om", age:22},
//     {firstname:"ash", age:28},
//     {firstname:"rio", age:50},
//     {firstname:"adi", age:86},
// ];

// // console.log(users)

// const output = users.filter((x) => x.age < 30);

// console.log(output)




// const arr = [1,2,5,3,6,8,12]



// const fun1 = function (x,y){
    
//     for (let i=0; i < x.length; i++){
//         if( x[i] == y){
//             // console.log("number is present" ,x[i])
//             // return true
//         }  
//         console.log("hello")
//         }
// }

// fun1([5,1,2,3,4,50,2,45,12],5)



// z = findNum(arr,"12")


// console.log("helllooooooooooo")

// const arr = [
//     {name:"om", age:25, city:"pune"},
//     {name:"ash", age:22, city:"pune"},
//     {name:"roy", age:28, city:"pune"},
//     {name:"ani", age:21, city:"pune"},
//     {name:"adi", age:29, city:"pune"}
// ]

// const body = document.getElementsByTagName('body')[0]

// const table = document.createElement("table")
// table.setAttribute('border','1')

// const thead = document.createElement('thead')
// const tbody = document.createElement('tbody')

// const tr = document.createElement('tr')

// const name = document.createElement('th')
// const age = document.createElement('th')
// const city = document.createElement('th')

// name.innerHTML = 'name'
// age.innerHTML = 'age'
// city.innerHTML = 'city'

// tr.append(name)
// tr.append(age)
// tr.append(city)


// thead.append(tr)
// table.append(thead)

// body.appendChild(table)

// table.append(tbody)

// for (let i=0;i<arr.length;i++){
//         let body_tr = document.createElement('tr')

//         const name_td = document.createElement('td')
//         const age_td = document.createElement('td')
//         const city_td = document.createElement('td')
    
//         name_td.innerHTML = arr[i].name
//         age_td.innerHTML = arr[i].age
//         city_td.innerHTML = arr[i].city

//         body_tr.append(name_td)
//         body_tr.append(age_td)
//         body_tr.append(city_td)

//         tbody.append(body_tr)
    
//     }








// const arr = [1,2,3];

// const newarr = arr.map(function(val){
//     return val*val;

// });

// console.log(newarr)








// const fun1 = function (x,y){
    
//     console.log(`First Name : ${x} , Last Name : ${y}` )
// }

// fun1("rahul","malhotra")


// {first:'rahul',last:'malhotra'}

// function strFunction (rahul , malhotra) {

//     const name = 

// };

// const arr = [1, 2, 3, 4, 5, 6]


// //  { firstName:'rahul',lastName:'malhotra' }


// const strFunction = (userName) => {
//     const flName = userName.split(' ') // ['rahul','malhotra']
//     const fName = flName[0]
//     const lName = flName[1]

//     return { firstName: fName, lastName: lName }


// }
// strFunction('rahul malhotra')



//recursive function

// const sum = (n) => {

//     if (n == 0) return n
//     return n + sum(n-1)

// }


//  const arr = [1,2,3,4,5]
//  const myMap=(arr)=>{

//     for (let i=0; i<arr.length; i++){
//     console.log(arr[i],i,arr)
//     }
//  }

// //  myMap(arr)
 
//  const arr = [1,2,3,4,5]
//  const updatedArray = myMap(arr, (y) => y + 10 )
//  console.log(updatedArray)


// const nums = [1, 2, 3]
// const cbFun = (x, index, a) => {
//     return x * 10
// }
// const myMap = (newArray, cbFun) => {
//     const temp = []
//     for (let i = 0; i < newArray.length; i++) {
//         const t = cbFun(newArray[i], i, newArray)
//         temp[i] = t
//     }
//     return temp
// }
// const updates = myMap(nums, cbFun)
// console.log(updates)



// function myPush(arr,ele){

//     arr[arr.length] = ele;

// }

// let arr=[1,2,3];

// myPush(arr,8)

// console.log(arr)


// let str = "I Live In India"


// const convert = (str,subStr) => {
    
//     let count = {
//         countSpace:0,
//         countCap:0,
//         countSmall:0,
//     }
//     let newLetters ={
//         completeSmall:"",
//         smallLetters:""
//     }
   
//     const cap = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
//     const sma = "abcdefghijklmnopqrstuvwxyz";

//     for (let i=0; i< str.length; i++){

//         if(str[i] ==' '){
//             count["countSpace"]+=1;
//         }

//         for(let j=0; j< cap.length; j++){
//             if (str[i]==cap[j]) {
//                newLetters["smallLetters"] += sma[j];
//                count["countCap"]+=1;
               
//                 newLetters["completeSmall"]+= sma[j];
//             }
//             else if(str[i]==sma[j]){
//                 count["countSmall"]+=1;
//                 newLetters["completeSmall"]+= sma[j];
//             }
//             if(str[i] ==' '){
//             newLetters["completeSmall"]+= " ";
//             break;
//              }

//              let countSubStr = 0

             

             
            
//     }
//     }

    // console.log("Original String : "+ str)
    // console.log(temp)
    // console.log("small letters :" + newLetters["smallLetters"])
    // console.log("space :" + count["countSpace"])
    // console.log("capital count :" + count["countCap"])
    // console.log("small count:",count["countSmall"] );
    // console.log(count);
    // console.log(newLetters)
    
// }

// convert(str)




// let str = "i live in india"
// let subStr = "i"
// let count = 0;

// const replaceStr = (s,subStr)=>{
//     for(item of s){
        
//         if(item === subStr){
//             count++
//         }

//     }
//     console.log(`${subStr} is`+ " "  + count + " times")

// }
// replaceStr(str,subStr)



const abc = {
    name : "omkar",
    age : 24,
    add : "pune"
};

let xyz = {
    ...abc,
    name:"om"
}

const {name, ...pqr} = abc

console.log(pqr,xyz)















