// function a(x,y){
//     setTimeout(()=>{
//         c=x+y;
//         b(c,100);
//     },10);
// }


// // function b(xy,z){
// //     return xy*z;
    
// // }

// let xyz = a(2,3, function(xy,z){
//     console.log(xy*z);
// });
// let z=b(xy,100);
// console.log(zyz);

// let a = new Promise(function(resolve, reject){
//     let xy= 2+3;
//     resolve(xy);
    
// });
// a.then((data)=>{
//     let xyz = data*100;
//     return xyz;
// }).then((data)=>
//     console.log(data*200))

// .catch((err)=>{
//     console.log("err",err);
// });

// let a = new Promise(function(resolve, reject){
//          let xy= 2+3;
//          resolve(xy);
        
//      });
// async function a(){
//     let xy=await(2+3);
//     let xyz =await(xy*100);
//     return xyz;
// }
// console.log(a());
// a().then((data)=>{
// console.log(data);
// })


const express = require('express');
const app = express();

app.get('/', (req, res) => {
    res.send('Hello World!');    
});

app.listen(4000, () => {
    console.log('Server started on http://localhost:4000');
});