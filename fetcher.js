const fs = require('fs'); //accessing fs library
const request = require('request'); //accessing request library

const url = process.argv[2];
const fileName = process.argv[3];

//make a request to server 
const download = (url, fileName) => {
request(url, (error, response, body) => {
  if (error) {
    console.log('error:', error); // Print the error if one occurred
    return;
  }
  
  fs.writeFile(fileName, body, (error) => {
    if (error) {
      console.log('Failed to write to file:', fileName); // Print the error if one occurred
      return;
    } else {
      console.log(`Downloaded and saved ${body.length} bytes to ${fileName}`);
    }
  });
  
});
};

if (!fileName || !url) {
  console.log('Input two parameters;');
  console.log('Local path invalid. Example: node fetcher.js <url> <file location>');
  } else {
    download(url, fileName);
  }