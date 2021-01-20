const inquirer = require("inquirer")
const fs = require("fs")
//const promptQuestions = require("./")

const info = []






//inquirer question prompts function
const promptQuestions = () => {
    return inquirer.prompt([
    {
      type: "input",
      name: "title",
      message: "Enter your project title! (Required)",
      validate: questionInput => {
        if(questionInput) {
          return true
        } else {
          console.log("Please enter project Name.")
          return false
        }
      }
    },

    {
      type: "input",
      name: "description",
      message: "Provide a description of your project. (Required)",
      validate: questionInput => {
        if(questionInput) {
          return true
        } else {
          console.log("Please enter project description")
          return false
        }
      }
    },
    
    {
      type: "input",
      name: "installation",
      message: "Enter installation instructions! (Required)",
      validate: questionInput => {
        if(questionInput) {
            return true
        } else {
          console.log("Please enter instillation instructions!")
          return false
        }
      }
    },

    {
      type: "input",
      name: "usage",
      message: "Enter usage information. (Required)",
      validate: questionInput => {
        if(questionInput) {
            return true
        } else {
          console.log("Please enter usage information!")
          return false
        }
      }
    },
    
    {
      type: "input",
      name: "contribution",
      message: "Enter contribution guidelines. (Required)",
      validate: questionInput => {
        if(questionInput) {
            return true
        } else {
          console.log("Please enter contribution guidelines.")
          return false
        }
      }
    },
    {
    type: "input",
    name: "test",
    message: "Enter test instructions. (Required)",
    validate: questionInput => {
        if(questionInput) {
            return true
        } else {
          console.log("Please enter test instructions.")
          return false
        }
      }
    }
])
}
    //calls question prompts
    promptQuestions().then().push(info)
    
    //})
    //.then(answers => console.log(answers))


// TODO: Create a function to write README file
//function writeToFile(fileName, data) {}

//writeToFile = () => {
    //fs.writeFile("./utils/readme.js", "completed readme", err => {
        //if (err) throw err
    //})
//}
//writeToFile()

//function to initialize app
//function init() {
 //}
//init()

module.exports = promptQuestions



