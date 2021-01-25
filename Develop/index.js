const inquirer = require("inquirer")
const fs = require("fs")
const generatePage = require("./utils/readmeTemplate.js")
let info = {}
const projectName = info.title
const projectDescription = info.description
const projectInstallation = info.installation
const projectUsage = info.usage
const projectContribution = info.contribution 
const projectTest = info.test

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
    promptQuestions()
    .then(answer => {info = answer;console.log(info)})//(info.title), etc etc picks specific answer
    .then(portfolioData => {
       const pageHTML = generatePage(portfolioData)
  
       fs.writeFile('./README.md', pageHTML, err => {
         if (err) throw new Error(err)
  
       })
    })
 

        //writeToFile = () => {
          //fs.writeFile("./utils/readme.md", generatePage , err => {
              //if (err) throw err
          //})
        //}
        //writeToFile()


    



    
    //.then(answer => {console.log(answer);return answer})
    //.then((name) => {info.push(name);console.log(info[0])})                         

// TODO: Create a function to write README file
//function writeToFile(fileName, data) {}


//}
//writeToFile()

//function to initialize app
//function init() {
 //}
//init()

//module.exports.info = info



