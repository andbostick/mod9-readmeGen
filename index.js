// TODO: Include packages needed for this application
const inquirer = require('inquirer')
const fs = require('fs');
const generate = require('./utils/generateMarkdown.js')
// TODO: Create an array of questions for user input
const questions = [
    {
        type:'input',
        name:'title',
        message: 'what is the title of your project?'
    },
    {
        type:'input',
        name:'description',
        message: 'what is the description of your project?'
    },
    {
        type:'input',
        name:'install',
        message: 'What is the Installtion information for your project?'
    },
    {
        type:'input',
        name:'usage',
        message: 'What is the usage information for your project?'
    },
    {
        type:'input',
        name:'guidelines',
        message: 'What are your contribution guidelines for the projct?'
    },
    {
        type:'input',
        name:'testing',
        message: 'what areyour testing instructions?'
    },
    {
        type:'list',
        name:'license',
        message: 'What license are you using?',
        choices:['MIT', 'ISC','IBM', 'None']
    }

];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {
    fs.writeFile(`${fileName}.md`,data, err => {
        if(err){
            console.error(err)
        }
    })
}

// TODO: Create a function to initialize app
function init() {
    inquirer.prompt(questions).then((answers) => {
        console.log(answers.title)
        console.log(answers.description)
        console.log(answers.install)
        console.log(answers.usage)
        console.log(answers.guidelines)
        console.log(answers.testing)
        console.log(answers.license)
        writeToFile('README', generate(answers))
    })
}

// Function call to initialize app
init();
