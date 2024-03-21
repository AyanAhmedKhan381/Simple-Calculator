#!/usr/bin/env node
import inquirer from "inquirer";
//Printing a Wellcome Message
console.log("\n\t Wellcome To \'Code-With-Ayan\'- CLI Simple Calculator\n");
// Askin Question from user through Inquirer
let answers = await inquirer.prompt([
    { message: "Enter First Number", type: "number", name: "FirstNumber" },
    { message: "Enter Second Number", type: "number", name: "SecondNumber" },
    {
        message: "Select one operator to perform oprations",
        type: "list",
        name: "operator",
        choices: ["Addition", "Subtractions", "Multiplication", "Division"],
    }
]);
//Condtional statements If-Else
if (answers.operator === "Addition") {
    console.log(answers.FirstNumber + answers.SecondNumber);
}
else if (answers.operator === "Subtractions") {
    console.log(answers.FirstNumber - answers.SecondNumber);
}
else if (answers.operator === "Multiplication") {
    console.log(answers.FirstNumber * answers.SecondNumber);
}
else if (answers.operator === "Division") {
    console.log(answers.FirstNumber / answers.SecondNumber);
}
else {
    console.log("invalid Input");
}
;
