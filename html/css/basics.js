//keywords
//1] Let
// let a;
// a=10;
// console.log(a);

//2] var
// var a;
// a=12;
// var a=14;
// var a;
// var a=22;
// console.log(a);

// 3]const

// const a=32;
// // a=32;
// console.log(a);
// alert(("your batery is low"));
// confirm("are you 18+?");

// let a=Number(prompt('enter first num'));
// let b=Number(prompt('enter first num'));
// let sum=a+b;
// console.log(sum);

// //immutabla
//  var bb=10;
//  cc=bb;
//  var bb=20;
//  var bb=30;
//  console.log(bb);

//mutable
// var gg={
//     id:101,
//     name:"abc"
// }
// var gg1=gg;
// console.log(gg1);//101
// // gg.id=104;
// // console.log(gg);//104
// // console.log(gg1);

// //Numbers
// let f1=100;
// console.log(f1,typeof f1);
// let f2=200.200;
// console.log(f2,typeof f2);
// let f3=100/300;
// console.log(f3,typeof f3);
// let f4=Number("hi");
// console.log(f4,typeof f4);

// //Strings
// var d='century';
// var d1="century 46";
// var d2="century 47 coming"
// console.log(d, typeof d);
// console.log(d1,typeof d1);
// console.log(d2,typeof d2);

// //interpolation

// let Stm="chinnaswamy";
// let plName="Shubman gill";
// let ruSco=111;
// console.log(`${p1Name}`is scored ${ruSco} in ${ruSco} in ${Stm} stadium);
// let r1='"virat"';
// console.log(r1);

//string methods

// var priya="wants horlicks";
// console.log(priya.length);
// console.log(priya.indexOf("a"));
// console.log(priya.lastIndexOf("s"));
// console.log(priya.includes("k"));
// console.log(priya.toLowerCase());
// console.log(priya.toUpperCase());
// console.log(priya.repeat(2));
// console.log(priya.concat(" to drink aswell as eat."));
// console.log(priya.padStart(15,"@"));
// console.log(priya.padEnd(15,"@"));
// console.log(priya.startsWith("P"));
// console.log(priya.startsWith("w"));
// console.log(priya.endsWith("s"));
// console.log(priya.split("").reverse().join(""));
// console.log(priya.split("").reverse());
// console.log(priya.split(""));
// console.log(priya.substring(6));
// console.log(priya.substring(0,4));

// //functions
// let a8 = function demo()//anonymous functions, function with expression, first  class functiom
// {
//    let f5=22;
//    console.log(f5);
// }
// a8()

// let b1=function()
// {
//     let g6=89;
//     console.log(g6);
// }
// b1()

// function demo()//Named functions
// {
//     const d9=66;
//     console.log(d9);
// }
// demo()

// //arrow functions

// let y0=()=>{
//     const k=100;
//     console.log(k);
// }
// y0()


// let  g =5678999999999999n;
// console.log(g,typeof g);

// console(window);
// var f=89;
// console.log(f.window);


// ////////Higher order function
// function hof(a,b,task)
// {
//     res=task(a,b)
//     return res;
// }
// let sub=hof(20,40,function(q,r))
// {
//     return q-r;
// }
// console.log(sub);

// var b=100;
// let c1=200;
// console.log(c1);
// console.log(b);

// function c(){
//     var d=100;
//     console.log(d);
// }
// c();
// function c2(){
//     const y=200;
//     console.log(y);
// }
// c2();

// let a="priya";
// console.log(a);
// (function()
// {
//     let b="riya"
//     console.log(b);
// })()

// const a=11;
// let b=12;
// console.log(a);
// console.log(b);
// function demo(){
//     var b=12;
//     console.log(b);
// }
// demo()

// function test(){
//     const d=112;
//     console.log(d);
// }
// test();


//callback function
// function red(Name,callback)
// {
//     console.log(`the name is`+` ` + Name);
//     callback();

// }
// function green()
// {
//     console.log(`hello`);
// }
// red(`ABC`, green);

// function boys()
// {
//     console.log("hi boys");
// }
// function girls(name)
// {
//   console.log(`she's`+` `+ name+`Priya`)
// }
// setTimeout(boys,2000)
// girls(`pritty`)


//nested function

// console.log("start");
// let d=50;
// let p=100;
// console.log(d,p);
//   function first() {
//     let t=150;
//     let o=200;
//       function second()
//       {
//         console.log(t);
//         console.log(o);
//         var e=300;
//         function third()
//         {
//             console.log(e);
//         }
//         return third()
//       }
//       return second()
    
//   }
//   first()()()

//   function Priya(){
//     let a=10;
//     console.log(a);
//       function diksha(){
//         a=`riya`
//         console.log(a);
//         function pran()
//         {
//           const v=`hello all`
//           console.log(v);
//           function geetha()
//           {
//              let v=10;
//              console.log(v);
//           }
//           return geetha()
//         }
//         return pran
//       }
//       return diksha
//   }
//   Priya()()()()

//object-mutable-because when we update the value it'll update in the same memory.
let Eobj={

}
console.log(Eobj);
Eobj.color="red";
Eobj.price=100;
console.log(Eobj);

//object mutable
let Mobject={
  player:"vk",
  ground:"mcg"
}
console.log(Mobject);
console.log(Mobject.player="abd");

//
// let obj5={
//   color: "red"
//   name:"priya"
// },
// {
//   color:"pink"

// }

// let x=new Object();
// console.log(x);
// x.name="suresh";
// x.skills=["cricketer,hockey"];
// console.log(x);

// // when keys are in "numbers" we can't fetch the value through 'dot(.)'. but it is possible through array notation.

// let Kobj={
//   1:"xyz",
//   2:"abc"
// }
// console.log(Kobj);
// console.log(Kobj[1]);
// console.log(Kobj.1)//cannot be done... when 'keys' are numbers.

// //object inside another object
// let obj10={
//   Cname:"hp",
//   Ccost:45000,
//   feature:{
//     color:"black",
//     shape:"square",
//     ram:"4gb"
//   }
// }
// console.log(obj10.features.shape);//square
// console.log(obj10.Ccost);//45000
// //adding property for object
// console.log(obj10.place="bangalore");
// console.log(obj10);
// console.log(obj10.feature.price=100000);
// console.log(obj10);

//OBJECT METHODS








//math object

let num1=500.5;
let num2=700;
console.log("max number",Math.max(num1,num2));
console.log("max number",Math.pow(2,3));
console.log("max number",Math.round(num1));

//date and time object

let dt=new Date();
console.log(dt,typeof dt);
console.log(dt.getDate());
console.log(dt.getFullYear());
console.log(dt.getHours());
console.log(dt.getMinutes());
console.log(dt.getMonth());

//year,month,days,hoours,minutes,seconds,milliseconds

let dt1=new Date(2023,0,2,11,3,12,2);
console.log(dt1);

//////
console.log("100"+50-50);

//arrays
//instead of storing different values in different variables we go for arrays.
//we can store multiple values in a single variable called Arrays.
let arr=[1,"string",true,function a(){},{},undefined, null,false];
console.log(arr[1]);
let arr1=[];
console.log(arr1[0]="priya");
console.log(arr1[1]=3);
arr1[2]=3;
arr1[3]=4;
arr1[4]=5;
arr1[5]=false;
console.log(arr1[5]);

