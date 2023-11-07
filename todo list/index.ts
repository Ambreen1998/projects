import inquirer from "inquirer";

let todos: string[] =[];
let loop = true;

while(loop){
    let answers:{
        TODO:string,
        addmore: boolean,
    }= await inquirer.prompt([
  
    { 
        type:"input",
        name: "TODO",
        message: "what would you like to add in todo" 
    },
    { 
        type:"confirm",
        name: "addmore",
        message: "do you want to add more TODO" ,
        default: false
    },
])
let {TODO, addmore} = answers;
console.log(answers)
loop = addmore
if(TODO){
todos.push(TODO)
} else {
    console.log("kindly put valid todo")
}
}
if(todos.length> 0){
    console.log("your todo list")
    todos.forEach(todo =>{
console.log(todo)
    })
}else{
    console.log("no todos found")
}