module.exports =  templateData = (info) => {
    //console.log(templateData)
    
  return `
  # ${info.title}
    
  ## Description 
    ${info.description}
  ## Table of Contents (Optional)
    
  * [Installation](#installation)
  * [Usage](#usage)
  * [Credits](#credits)
  * [License](#license)
  
  ## Installation
    ${info.installation}
  ## Usage 
    ${info.usage}
  ## Credits
    
  ## License
  
  ## Badges
  
  ## Features
  
  ## Contributing
    ${info.contribution}
  ## Tests
    ${info.test}
  `
}






