const fs = require('fs');

const generatePage = require('./src/page-template');

const profileDataArgs = process.argv.slice(2);
//console.log(profileDataArgs);

// displays strings in line txt
// const generatePage = (userName, githubName) => `Name: ${userName}, Github:${githubName}`;
// console.log(generatePage('Jane', 'janehub'));


// destructered expressions
// const name = profileDataArgs[0];
// const github = profileDataArgs[1];

// destructered elements into one 
const [name, github] = profileDataArgs;



fs.writeFile('index.html', generatePage(name, github), err => {
    if (err) throw err;
  
    console.log('Portfolio complete! Check out index.html to see the output!');
  });