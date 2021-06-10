// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
  if("MIT"){
    let mitURL = "https://img.shields.io/badge/license-MIT-blue";
    return mitURL;
  } else if("GNU"){
    let gnuURL = "https://img.shields.io/badge/license-GNU-green";
    return gnuURL;
  } else if("GPLv3"){
    let gplv3URL = "https://img.shields.io/badge/license-GPL3-brightgreen";
    return gplv3URL;
  } else if("AGPLv3"){
    let apglv3 = "https://img.shields.io/badge/license-APGL3-lightgrey";
    return apglv3;
  } else if("MPL"){
    let mplURL = "https://img.shields.io/badge/license-MPL-red";
    return mplURL; 
  } else if ("Apache-2.0"){
    let apache = "https://img.shields.io/badge/license-Apache2-orange";
    return apache;
  } else {
    let nada = "";
    return nada; 
  }
}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {
  if("MIT"){
    return "https://choosealicense.com/licenses/mit/";
  } else if("GNU"){
    return "https://choosealicense.com/licenses/lgpl-3.0/";
  } else if("GPLv3"){
    return "https://choosealicense.com/licenses/gpl-3.0/";
  } else if("AGPLv3"){
    return "https://choosealicense.com/licenses/agpl-3.0/";
  } else if("MPL"){
    return "https://choosealicense.com/licenses/mpl-2.0/"; 
  } else if ("Apache-2.0"){
    return "https://choosealicense.com/licenses/apache-2.0/";
  } else {
    let nada = "";
    return nada; 
  }
}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
console.log(renderLicenseLink("MIT"))
function renderLicenseSection(license) {
  if("MIT"){
    let mitDoc = "This product is license with MIT"

    return mitDoc; 
    
  } else if("GNU"){
    let gnuDoc = "This product is license with GNU"
    return gnuDoc;
  } else if("GPLv3"){
      let gplDoc = "This product is license with GPLv3"
    return gplDoc;
  } else if("AGPLv3"){
    let agpDoc = "This product is license with AGPLv3"
    return agpDoc;
  } else if("MPL"){
    let mplDoc = "This product is license with MPL"
    return mplDoc; 
  } else if ("Apache-2.0"){
    let apacheDoc = "This product is license with Apache-2"
    return apacheDoc;
  } else {
    let nada = "";
    return nada; 
  }
}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
 let markdown= ` # ${data.title} <img src=${renderLicenseBadge(data.license)}/>

## Description


${data.description}

## Table of Contents

- [Installation](#installation)
- [Usage](#usage)
- [Credits](#credits)
- [Features](#features)
- [Liscense](#liscense)


## Installation

${data.installation}
// To add a screenshot, create an assets/images folder in your repository and upload your screenshot to it. Then, using the relative filepath, add it to your README.
## Usage

${data.usage}

## Credits


${data.credit}
-Credit goes out to (shields.io). Support @ <https://opencollective.com/shields>.


## Features

${data.features}

## Liscense

${renderLicenseSection(data.license)}
<${renderLicenseLink(data.license)}>`





return markdown;
  
;  
}

module.exports = generateMarkdown;
