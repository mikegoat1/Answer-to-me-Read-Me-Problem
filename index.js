// TODO: Include packages needed for this application
const inquirer = require("inquirer");
const fs = require("fs");
const generateMarkdown = require("./utils/generateMarkdown")

// TODO: Create an array of questions for user input
inquirer
    .prompt([
        {
            type: "input",
            name: "title",
            message: "What is the Project Title",
        },
        {
            tyep: "input",
            name: "description",
            message: "What was your motivation?,Why did you build this project?,What problem does it solve?,What did you learn?, Whats different in your version?, Any challenges or future features?",
        },
        {
            type: "input",
            name: "installation",
            message: "What are the steps for Installation?",
        },
        {
            type: "input",
            name: "credit",
            message: "Who do you need to Credit?",
        },
        {
            type: "input",
            name: "features",
            message: "What are the features?",
        },
    ]);

// TODO: Create a function to write README file
function writeToFile(fileName, data) {
    
}

// TODO: Create a function to initialize app
function init() {}

//Function call to initialize app
init();
