// ..........  N1 ..................
// function number() {
//     let num = +prompt("Enter a number");

//     let arr = []

//     for ( let i = 0; i <= num; i++){
//         arr.push(i)
//     }
//     console.log(arr)
// }
// number()

// ............ N2 .................

// function getArray() {
//     let n = +prompt("Enter a degree number");
//     let newArr = []
//     for ( let i = 1; i <= n; i++){
//         newArr.push(Math.pow(2,i))
//     }
//     return newArr
// }
// let result = getArray()
// console.log(result)

// ...............  N3 ..............

// function arrayCalculate(arr) {
//   let newArr = (arr.flat(Infinity))
//   let total = newArr.reduce((a,b) => a + b ,0)
//   console.log(total)
// }
// arrayCalculate([1, 2, [3, 4, [5, 6]]])

// ...............  N4 ..............
// function numbers (array) {
//     let sum1 = 0
//         let sum2 = 0
    
//     for (let i = 0; i < array.length; i++){

//      if ( i % 2 == 1) {
//         sum1 += array[i]
//      }else{
//         sum2 -= array[i]
//      }
//     }
//     console.log(sum1, sum2)


// }
// numbers([0, 10, 20, 30, 40, 50, 60,70,80,90,100])

// ...............  N5 ..............

// function fn() {
//     let array = []
//     let num = +prompt("enter a numver");
//     let i = 0
//     let b;
   
//    do {
       
//        i++
   
//        b = +prompt("enter a elemnt")
   
//        array.push(b)
   
//    } while (i < num);
   
//    let total = array.reduce((a,c) => a + c , 0)
   
//    console.log(array, ` => ${total}`)
   
// }
// fn()

// ................ N6 .............

// function fn() {
//     let array = []
//     let num = +prompt("enter a numver");
//     let i = 0
//     let b;
   
//    do {
       
//        i++
   
//        b = +prompt("enter a elemnt")
   
//        array.push(b)
   
//    } while (i < num);
   
//    console.log(array.reverse())
   
// }
// fn()

// .............. N7 ...............

// let users = [
//     {
//         name: "Kamol",
//         age: 35
//     },
//     {
//         name: "Kamron",
//         age: 24
//     },
//     {
//         name: "Karim",
//         age: 39
//     }
// ]


// for(let i = 0; i < users.length; i++){
//     if(users[i + 1]){
//         let difference = users[i].age - users[i + 1].age;
//         if(difference < 0){
//             console.log(`${users[i].name} ${Math.abs(difference)} yosh kichkina ${users[i + 1].name} dan` )
//         }
//         else{
//             console.log(`${users[i].name} ${Math.abs(difference)} yosh katta ${users[i + 1].name} dan` )
//         }
//     }
// }

// ........................  N8 ..............
// function indexTotal(arr) {
//     let sum = 0
//    for ( let i = 0; i < arr.length; i++){
//     sum += i
//    }   
//    console.log(sum)
// }
// indexTotal([1, 2, 3, 4])
 
// ................. N9 .................
// function indexTotal(arr) {
//     let newArr = []
//    for ( let i = 0; i < arr.length; i++){
//     if (i % 2 == 0) {
//         newArr.push(arr[i])
//     }
//    }   
//    return Math.max(...newArr)
// }
// let result  = indexTotal([1, 2, 3, 4,8,2,4,65,787,34,46556,])
// console.log(result)

// .................... N10 ..................
// function indexTotal(arr) {
//     let newArr = []
//    for ( let i = 0; i < arr.length; i++){
//     if (i % 2 == 0) {
//         newArr.push(arr[i])
//     }
//    }   
//    return Math.min(...newArr)
// }
// let result  = indexTotal([1, 2, -3, 4,8,2,4,65,787,34,46556,])
// console.log(result)

// .................... N11 .................
// function indexTotal(arr) {
//     let newArr = []
//    for ( let i = 0; i < arr.length; i++){
//     if (i % 2 == 1) {
//         newArr.push(arr[i])
//     }
//    }   
//    return Math.max(...newArr)
// }
// let result  = indexTotal([1, 2, 3, 4,8,2,4,65,787,34,46556,])
// console.log(result)