#! /usr/bin/env node
/*
Project Objectives:
- Create a command-line To-Do List application using Node.js & TypeScript in Visual Studio Code.
- Utilize the inquirer package to interactively prompt the user for input.
- Display a user-friendly To-Do List interface with chalk styling.
*/
import inquirer from "inquirer";
import chalk from "chalk";
console.log(chalk.bgRed.bold("\n\t\t\ To-Do List:"));
let todos = [];
let loop = true;
while (loop) {
    const todoAnswer = await inquirer.prompt([
        {
            name: "TODO",
            type: "input",
            message: "What do you want to add in your To-DO List:?"
        },
        {
            name: "addmore",
            type: "confirm",
            message: "Do you want to add more todos? ",
            default: false
        }
    ]);
    const { TODO, addmore } = todoAnswer;
    loop = addmore;
    if (TODO.trim() !== "") {
        todos.push(TODO);
        console.log("Added todo:", TODO);
    }
    else {
        console.log("Kindly add valid input");
        loop = addmore;
    }
}
if (todos.length > 0) {
    console.log("\nYour final To-Do List:");
    todos.forEach((todo, index) => {
        console.log(`${index + 1}. ${todo}`);
    });
}
else {
    console.log("No todos found");
}
console.log("Todos:", todos);
