const inquirer = require('inquirer');
//const fs = require('fs');
//const generatePage = require('./src/page-template');

//const pageHTML = generatePage(name, github);

inquirer
    .prompt([
        {
            type: 'input',
            name: 'name',
            message: 'What is your name?'
        }
    ])
    .then(answers => console.log(answers));


//fs.writeFile('./index.html', pageHTML, err => {
    //if (err) throw err;
  
    //console.log('Portfolio complete! Check out index.html to see the output!');
  //});




// NOTES

//const profileDataArgs = process.argv.slice(2);
//console.log(profileDataArgs);

// displays strings in line txt
// const generatePage = (userName, githubName) => `Name: ${userName}, Github:${githubName}`;
// console.log(generatePage('Jane', 'janehub'));


// destructered expressions
// const name = profileDataArgs[0];
// const github = profileDataArgs[1];

// destructered elements into one 
//const [name, github] = profileDataArgs;
