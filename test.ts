// interface Person{
//     name:"upendranath reddy",
//     age:23;
// }
// function greet(person:Person){
//     return 'Hello' + person.name
// }

const names: readonly string[]=["name one"];
// names.push("upendra")     //shows error "readonly will not makes to change"

let tup:[number,string,boolean]=[4,"upendra",false]
console.log(tup)

//object types
const detail:{"name":string,"age":number,"single":boolean}={"name":"upendra","age":23,"single":false}
console.log(detail)


//types for maping objects    or index signatures
const nameAge:{[index:string]:number}={}     //here index with string and its value is number
nameAge.upendra=23;
nameAge.sumi=20;
console.log(nameAge)

//enums
enum dirct{
    north,south,west,east
}
let curr=dirct.east   
//enum strings
console.log(curr)     // output is 3
//enum numerics    auto increment
enum dict{
    north=1,south,west,east
}
console.log(dict.north)    //output= 1

//enum fully intialized

enum statusCode{
    NOtfound=404,
    success=200,
    badrequest=400,
    accepted=202
}
console.log(statusCode.badrequest)   //400

function greet(){
    console.log("hello world from function")
}
let greets=()=>{
    console.log("hello world from arrow functions")
}

let func=greets
console.log(func)
func()


//changing the datatype
let str:string="2"
let num=str as unknown as number
console.log(typeof(str))
console.log(typeof(num))

var global_var=30;
class data{

class_var:number=10;

static static_var=20;

object():void{
let local_var:number=5;
}

}
//accesing global variable 
console.log("global variable ",global_var)
//accessing class varibles
let obj=new data()
console.log("class variable ",obj.class_var)

//accessing static variables
console.log("static variables",data.static_var)

//rest parameters
function restParams(...nums:number[]){
var sum:number=0
for(let i=0;i<nums.length;i++){
    sum+=nums[i]
}
console.log("rest parameters function value ",sum)
}
//calling the rest parameter funciton
restParams(410,20,30)

//default parameters
function defparams(a:number,b:number=0){
    console.log(a+b)
}

defparams(60)
defparams(40,12)

//function constructor
let addfun=new Function("a","b","return a*b" )
console.log(addfun(5,6))

//recursion function
function fact(n:number):number{
    if(n<=0){
        return 1
    }
    else{
        return n*fact(n-1)
    }
}
console.log("recursion function :",fact(5))


//lambda functions
let add=(x:number)=>x+10
console.log(add(100))
//another way
let sub=function(x:number) {
return x+add(10)
}
console.log(sub(99))

//interfaces with inheritance
interface Persons{
    name:string
}
interface employee extends Persons{
    company:string
}
interface project extends employee{
    project:string
}
var details=<project>{}
details.name="upendranath reddy"
details.company="kellton"
details.project="optima"

console.log("name"  + ":" + details.name,"/n","company : ",details.company);

//"multiple inheritance interface"
interface child1{
    age1:number
}
interface child2{
    age2:number
}
interface child extends child1,child2{}
var Obj:child={age1:12,age2:22}
console.log(Obj.age1,Obj.age2)


//overriding in typescript
class car{
 tyres():void{
    console.log("car has four tyres")
 }
}
class bike extends car{
   
    tyres():void{

        super.tyres()
        console.log("bike has 2 tyres")
    }
}

var objvech=new bike()
objvech.tyres()





