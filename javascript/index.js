// dynamic typing 

// let a=5;
// console.log(a);
// a='parin';
// console.log(a)


// object in js

// let circle={
//     radius:12,
//     daimeter:24,

//     area:function(){
//         console.log(3.14*this.radius*this.radius)
//     }
// }


// console.log(circle)
// circle.area()
// console.log(circle.radius) 


// factory function

// function createRectanngle(r,d){
//     return circle={
//         radius:r,
//         daimeter:d,
    
//         area:function(){
//             return 3.14*this.radius*this.radius
//         }
//     }
    
// }


// circleObj=createRectanngle(12,24)
// console.log(circleObj.area())
// circleObj2=createRectanngle(78,124);
// console.log(circleObj2.radius)

//constructot function -> pascalnotation ex NumberOfStudennt
// function CreateRectangle(){
//     this.radius=12;
//     this.daimeter=24;
//     this.area=function(){
//         console.log(3.34*this.radius*this.radius);
//     }
// }
// let obj=new CreateRectangle()

// dynamic nature of the object
// obj.color='yellow';
// console.log(obj)

// delete obj.color
// console.log(obj)

// constructor property
// obj.constructor;
// CreateRectangle.constructor;

//let,s see how js work internly

// let Cir=new Function(`

//     this.radius=12;
//     this.daimeter=24;
//     this.area=function(){
//         console.log(3.34*this.radius*this.radius);
//     }

//     `)
// objinte=new Cir();
// console.log(objinte.radius);


//how reference work
// let a={
//     value:12
// }
// let b=a;
// a.value++;
// console.log(a.value)
// console.log(b.value) 

//for-in loop

// let rectangle={
//     length:23,
//     width:45,
//     color:'black'
// }
// for(i in rectangle){
//     console.log(i,rectangle[i])
// }

// if('length' in rectangle){
//     console.log('present');
// }
// else{
//     console.log('absent');
// }

//object cloning

// let rectangle={
//     length:23,
//     width:45,
//     color:'black'
// }
// console.log(rectangle)
// //1.itration
// let b={}
// for(i in rectangle)
// {
//     b[i]=rectangle[i]
// }
// console.log(b)
// b.value=12;
// //2.assign
// let c=Object.assign({},rectangle,b)
// console.log(c)

// //3.Spread operator
// let d={...rectangle,...b}
// console.log(d)

//array insertion

// let number=[1,3,4,5,6];
// number.push(8);//insert at last
// number.unshift(-1);//insert at begining
// number.splice(2,0,'a','b','c');//insert at perticular index
// console.log(number);

// //array searching --> primitives

// console.log(number.indexOf(8));
// console.log(number.indexOf(23))
// console.log(number.includes(8))
// console.log(number.includes(23));

//array seraching for the object --> object/refercance

// function createCourses(num,naam){
//     return Cource={
//         no:num,
//         name:naam
//     } 
// }

// let cource1=createCourses(1,'java');
// let cource2=createCourses(2,'js');

// let cources=[cource1,cource2];
// console.log(cources);

// let x=cources.find(function(x){
//     return x.name==='java';
// })
// let x2=cources.find(x=> x.name==='webdev' )
// console.log(x);
// console.log(x2);

// //delete / remove element in the array
// console.log(number)
// number.pop()//delete last element of the array
// console.log(number)
// number.shift()//delete first element of the array
// console.log(number)
// number.splice(3,1)//delte indexed nuumbber of the array
// console.log(number)


// number.splice(number.indexOf(5),1);//delete by value


// //filter

// arr=[1,23,45,56,78]

// let items=arr.filter(function(x){
//     return x>20;
// })
// console.log(items)

// //map

// arr2=[23,45,67,89,80,12]

// let doubleItems=arr2.map(function(x){
//     return x*2;
// })

// console.log(doubleItems)
// //maping wwith the objects
// let studentNo=arr2.map(function(x)
// {
//     return {student_No:x} ;
// });

// console.log(studentNo)

//sorting
// arr=[10,12,54,5,23,78,-12,-10]
// //arr.sort()// convert number into string than sort the arr


// arr.sort(
//     function(a,b){
//     console.log(a,b);
//     return a-b;
// })

// console.log(arr)

//sorting objects

// let objArray=[{name:'parin',age:20,cgpa:8.94},
//               {name:'asujal',age:10,cgpa:8.00},
//               {name:'xyz',age:12,cgpa:6.94}

// ];

// objArray.sort(
//     function(a,b){
//         //return a.age-b.age;
//         return a.name.localeCompare(b.name);
//         //return a.cgpa-b.cgpa;
//     }
// )
// console.log(objArray)


//hoisting --> moving function declaration top of the file 
// printF();
// function printF(){
//     console.log('hello');
// }

//argument

// function sum(){
//     total=0;
//     for(val of arguments){
//         total=total+val;}
//     return total;
// }

// console.log(sum(1,2,3,4,5,6,7));


//getter setter method

function createPerson(fname,lname){
    return Person={
        fName:fname,
        lName:lname,
        get getFullName(){
            return `${this.fName} ${this.lName}`;
        },
        set setFullName(value){

            if(value!= String){
                throw new Error("please enter the string")
            }
            parts=value.split(" ");
            this.fName=parts[0];
            this.lName=parts[1];
        },
    };
    
}

obj=createPerson('parin','jasani');
console.log(obj.getFullName);
try{
    obj.setFullName=12;
}
catch (e){

   // alert(e);
}
console.log(obj.getFullName);

//reduce function in array

let arr=[1,2,3,4,5,6];

let sum=arr.reduce((acc,cur)=>acc+cur,0);
console.log(sum)