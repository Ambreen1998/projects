import inquirer from "inquirer";
interface anytype{
    userId:string,
    userpin:number,
    accounttype:string,
    transactiontype:string,
    withdrawmethod:string,
    amount:number,
}
let answer=await inquirer.prompt([
{
    type:"input",
    name: "userId",
    message:"kindly enter your id"
} ,
{
    type:"number",
    name: "userpin",
    message:"kindly enter your pin"

},
{
    type:"list",
    name: "accounttype",
    choices:["current","saving"],
    message:"select your account type"
    
},
{
    type:"list",
    name: "transactionType",
    choices:["fast cash","withdraw"],
    message:"select your transaction",
    when(answer){
        return answer.accounttype
    },
},    
{
    type:"list",
    name:"amount",
    choices:[1000,2000,10000,20000],
    message:"select your amount",
    when(answer){
        return answer.transactionType =="fast cash"
    },
},    
{
    type:"number",
    name: "amount",
    message:"enter your amount",
    when(answer){
        return answer.transactionType =="withdraw"
    },
},    

])
if(answer.userId && answer.userpin){
    let balance = Math.floor(Math.random()*10000000);
    console.log(balance)
    let enteramount = answer.amount;
    if(balance> enteramount){
let remaining = balance - enteramount
console.log("your remainig balance is",remaining)
    }else {
        console.log("insufficiant balance")
    }
}

