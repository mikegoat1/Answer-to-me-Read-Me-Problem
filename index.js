// TODO: Include packages needed for this application
const inquirer = require("inquirer");
const fs = require("fs");
const generateMarkdown = require("./utils/generateMarkdown");


// TODO: Create an array of questions for user input
inquirer
    .prompt([
        {
            type: "input",
            name: "github",
            message: "Whats your GitHub user name?"
        },
        {
            type: "input",
            name: "title",
            message: "What is the Project Title",
        },
        {
            type: "input",
            name: "description",
            message: "What was your motivation?,Why did you build this project?,What problem does it solve?,What did you learn?, Whats different in your version?, Any challenges or future features?",
        },
        {
            type: "input",
            name: "usage",
            message: "What can you use it for?"
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
        {
            type: "checkbox",
            name: "license",
            message: "What Licenses do you want?",
            choices: ["MIT", "GNU", "GPLv3", "AGPLv3", "MPL", "Apache-2.0", "NaN"]

        },
        {
            type: "input",
            name: "fileName",
            message: "Oh whats the name of the file"
        }
    ])

    .then((answers) => {
        const mdPage = generateMarkdown(answers);

        writeToFile(answers.fileName + ".md", mdPage);

    })




// TODO: Create a function to write README file
function writeToFile(fileName, data) {
    fs.writeFile(fileName, data, (err) =>
        err ? console.error(err) : console.log('Success!'))
}

// TODO: Create a function to initialize app
function init() {

}

//Function call to initialize app
init();
