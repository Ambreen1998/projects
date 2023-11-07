import inquirer from "inquirer";
let systemgenerateno = Math.floor(Math.random() * 10);
console.log(systemgenerateno);
let answers = await inquirer.prompt([
    {
        type: "number",
        name: "userguess",
        message: "write your guess",
    }
]);
let { userguess } = answers;
if (userguess === systemgenerateno) {
    console.log("your are answer is correct \n you win");
}
else {
    console.log("please try again");
}
