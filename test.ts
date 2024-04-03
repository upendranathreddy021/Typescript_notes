// interface Person{
//     name:"upendranath reddy",
//     age:23;
// }
// function greet(person:Person){
//     return 'Hello' + person.name
// }

//const names: readonly string[]=["name one"];
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

