// let firstname="Ambreen";
// console.log(`Hi, ${firstname} would you like to learn python`);
// //3
// console.log(firstname.toUpperCase())
// let famous_person=("Albert Einstein");
// let message=",Once said, \"A person who never made a mistake never tried anything new.\"";
// console.log(famous_person + message);
// let whname="\t Naveed \n Waleed"
// console.log(whname.trim())
// //7
// console.log(5+3);
// console.log(10-2);
// console.log(4*2);
// console.log(16/2);
// //Q9
// let favoritenumber=(20);
// console.log(`My favorite number is  ${favoritenumber} `);
// //Q11
// let names=["sumbul","saher","ainy"];
// console.log(names[1]);
// //Q12
// for (let num of names){
//   console.log(num)
// }
// // console.log(`hello ${names[0]}`);
// // console.log(`hello ${names[1]}`);
// // console.log(`hello ${names[2]}`);
// //Q14
// let guestname=["alia","tania","rania"];
// for (let num of guestname){
//   console.log(`hello ${num} you are invited for dinner`)
//   //Q23
// }
// let username="ambe"
// if(username==="amber"){
//   console.log(`hello ${username}`)
// }
//   else{
//     console.log("invalid")
//   }
//   //Q25
//   let alien_color="green";
//   if(alien_color==="green"){
//     console.log("the player just earned 5 points");
//   }
//   let aliencolor="yellow";
//   if(aliencolor==="green"){
//     console.log("the player just earned 5 points");
//   }
//   //Q26
// let aliens_colour="green"   
// if (aliens_colour==="red"){
//   console.log("player just ern the five point for shooting the alien")
// }
// else{
//   console.log("player just earned 10 points")
// }
// //Q27
// let alien="green";
// if(alien==="green"){
//   console.log("the player earn 5 points")
// }
// else if(alien==="red"){
//   console.log("player earnd 15 points")
// }
// else if(alien==="yellow"){
//   console.log("player earnd 10 points")
// }
// //Q28
//  let age=19
//  if(age<3){
//  console.log("the person is a baby")
//  }
// else if(age>=2 && age<4){
//  console.log("person is the toddler")
//  }
// else if(age>=4 && age<13){
//   console.log("the person is a kid ")
// }
//  else if(age>=13 && age<20){
//    console.log("the person is a teenager ")
//  }
//  else if(age>=20 && age<65){
//   console.log("person is the adult")
//   }
//  else if(age>=65){
//    console.log("the person is a elder")
//  }
//  let favoritefruit=["apple","mango","banana","kiwi","orange"]
//   if (favoritefruit.includes("mango")){
//     console.log("Mango is My Fav fruit")
//   }
//   if (favoritefruit.includes("orange")){
//     console.log("orange is My Fav fruit")
//   }
//   if (favoritefruit.includes("banana")){
//     console.log("banana is My Fav fruit")
//   }
//   if (favoritefruit.includes("apple")){
//     console.log("apple is My Fav fruit")
//   }
//   if (favoritefruit.includes("kiwi")){
//     console.log("kiwi is My Fav fruit")
//   }
//Q30
//  let usernames=["admin","sara","sadia","salman","anus","misha"]
// for(let num of usernames){
// if(num==="admin"){
// console.log(`hello ${num} would you like to see a status update`)
// }
// else{
//   console.log(`hello ${num} `)
// }
//Q32
var currentname = ["john", "eric", "zinum", "erum", "anum"];
var newusers = ["john", "eric", "tania", "alia", "hina"];
for (var _i = 0, newusers_1 = newusers; _i < newusers_1.length; _i++) {
    var num = newusers_1[_i];
    if (currentname.includes(num)) {
        console.log(" ".concat(num, " will need to enter the neww name"));
    }
    else {
        console.log("".concat(num, " is available"));
    }
}
