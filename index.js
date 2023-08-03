// TODO: Include packages needed for this application
const inquirer = require('inquirer')
const fs = require('fs');
const generate = require('./utils/generateMarkdown.js')
// TODO: Create an array of questions for user input
const questions = [
    {
        type:'input',
        name:'title',
        message: 'What is the title of your project?'
    },
    {
        type:'input',
        name:'description',
        message: 'What is the description of your project?'
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
        message: 'What are your testing instructions?'
    },
    {
        type:'list',
        name:'license',
        message: 'What license are you using?',
        choices:['MIT', 'ISC','IBM', 'None']
    },
    {
        type:'input',
        name:'name',
        message: 'What is your github username?'
    },
    {
        type:'input',
        name:'email',
        message: 'What is your email?'
    },


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
        writeToFile('README', generate(answers))
    })
}

// Function call to initialize app
init();
