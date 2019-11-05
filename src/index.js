const fs = require('fs');
const {green, red} = require('kleur');

const nameOfFileWithExtension = 'SAXUM.md';
const fileContent = 'This is my content';
const pathOfFile = '/docs';

const generateFile = (nameOfFileWithExtension, fileContent, pathOfFile = '') => {
    const filepath = process.cwd() + `${pathOfFile}/${nameOfFileWithExtension}`;
    
    fs.writeFile(filepath, fileContent, (error) => {
        console.log('');

        if (!error) {
            console.info(green('Generated: ' + nameOfFileWithExtension + ' in ' + pathOfFile));
        } else {
            console.error(red('Error: ', error));
        }

        console.log('');
    });
};

generateFile(nameOfFileWithExtension, fileContent, pathOfFile);
