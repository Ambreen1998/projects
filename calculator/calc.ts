import inquirer from "inquirer";
let answers=await inquirer.prompt([

    {
        type:"number",
        name:"num1",
        message:"enter the first number",
    },
    {
        type:"number",
        name:"num2",
        message:"enter the second number",
    },
    {
        type:"list",
        name:"operator",
        message:"select the operator you want to perform",
        choices: ["add","subtract","multiply","divide"],
    }

]);
let result:number;
switch(answers.operator){
    case 'add':
        result=answers.num1 + answers.num2;
        console.log(`the answer of the addition is ${result}`);
        break;

case 'subtract':
        result=answers.num1 - answers.num2;
        console.log(`the answer of the subtraction is ${result}`);
        break;
case 'multiply':
        result=answers.num1 * answers.num2;
        console.log(`the answer of the multiplication is ${result}`);
        break;
 case 'divide':
            result=answers.num1 / answers.num2;
            console.log(`the answer of the division is ${result}`);
            break;
    }        
