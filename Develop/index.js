// TODO: Include packages needed for this application
const inquirer = require("inquirer")
//const fs = require("fs")
//const generatePage = require("./utils/generateMarkdown.js")

// TODO: Create an array of questions for user input

const questions = [
    {
    type: "input",
    name: "title",
    message: "Enter your project title! (Required)",
    //validate: questionInput => {
        //if(questionInput) {
            //return true
        //} else {
            //console.log("Please enter project Name!")
        //}
    //}
    }
]

// TODO: Create a function to write README file
function writeToFile(fileName, data) {}

// TODO: Create a function to initialize app
function init() {}

// Function call to initialize app
init();

console.log(inquirer)
