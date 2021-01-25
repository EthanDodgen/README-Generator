module.exports =  templateData => {
    console.log(templateData)
    
  return `
  # Your Project Title
    //${projectName}
  ## Description 
    ${projectDescription}
  ## Table of Contents (Optional)
    
  * [Installation](#installation)
  * [Usage](#usage)
  * [Credits](#credits)
  * [License](#license)
  
  ## Installation
    ${projectInstallation}
  ## Usage 
    ${projectUsage}
  ## Credits
    
  ## License
  
  ## Badges
  
  ## Features
  
  ## Contributing
    ${projectContribution}
  ## Tests
    ${projectTest}
  `
}


//module.exports = generatePage()



