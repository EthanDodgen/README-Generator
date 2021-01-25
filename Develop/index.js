const inquirer = require("inquirer")
const fs = require("fs")
const generatePage = require("./utils/readmeTemplate.js")
//let info = {}
//const projectName = info.title
//const projectDescription = info.description
//const projectInstallation = info.installation
//const projectUsage = info.usage
//const projectContribution = info.contribution 
//const projectTest = info.test

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
promptQuestions()
   .then(answer => {
     info = answer
     var page = generatePage(info)
     writeToFile(page)
    })
    
writeToFile = (page) => {
    fs.writeFile("./utils/readme.md", page, err => {
      if (err) throw err
      })
    }
     
//function to initialize app
//function init() {
 //}
//init()



