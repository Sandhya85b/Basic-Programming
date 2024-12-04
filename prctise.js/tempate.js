// // let age =21;
// // console.log(age>18 ? "vote":"cannot vote");

// let sum = (x,y) =>{
//     return x+y
// }
// console.log(sum(3,4))




// combining the arrays
// let arr=[1,2,3,4,5];
// let arr2=[6,7,8,9];
// let arr3=[...arr2, ...arr];
// console.log(...arr3)

// let obj={
//     name:"Alice"
// }
// let obj1={
//     age:25
// }
// let data={...obj,...obj1ye};
// console.log(data)

// let greetUser = {
//     let name = prompt("Please enter your name:")
//     if (name=prompt()) {
//         console.log(`Hello, ${name}!`)
//     } else {
//         console.log("Hello, Guest!")
//     }
// };

// // Call the function to execute
// greetUser("sandhya");
// ......................................
// // filter will get the required output from the array
// // and map return whole array 
// // both will retuen array


// let arr=[11,22,45,66,77,99];
// let ans = arr.filter((ele,i)=>{
//     if(ele%2==0){
//         return ele
//     }
// })
// console.log(ans)
// ..............................................
// // for each wont return array

// let ans1 =arr.forEach((el,i)=>{
//     ele=ele*2
//     return ele
// })
// console.log(ans1)

// ........................................
// Reduce is used to 
let arr=[11,22,33,44,55,66,77]
// let sum1=0;
// for(let i=0;i<arr.length;i++){
//     sum1=sum1+arr[i]
// }
// console.log(sum1)
let sum=arr.reduce((acc,el,i)=> acc+el,0)
console.log(sum)
let ans=arr.reduce((a,el,i)=>{
    a[i]=e1%2==0
    return a
}, [])
console.log(ans)































