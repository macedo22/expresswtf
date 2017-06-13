
//include function.js?

const express = require('express');
const app = express();
var http = require('http');
var dt = require('./functions');

http.createServer(function (req, res) {
    res.writeHead(200, {'Content-Type': 'text/html'});
    res.write("The date and time are currently: " + dt.myDateTime());
    res.end('Hello World!');
}).listen(8080);

app.get('/', function (req, res) {
  res.send('Hello World!');
});

app.listen(3000, function () {
  console.log('Example app listening on port 3000!');
});






//document.getElementById("test").innerHTML="Goodbye world!";


/*************************************
 * 
 * This file should mostly be filled with calling functions in function.js upon an event (i.e. zipcode is entered)?
 * 
 * 
 * 
 * 
 * 
 ******************************************/


//event: if entered zipcode--> call function (that gets matching results, randomly picks one, returns it)
//and use the returned information to put into HTML tags in resultPage
//pseudocode for this: (NOTE: THIS IS SHITTY AND CAN DEFINITELY BE SIMPLIFIED IT'S SUPA LATE RN)
/*if user searches (i.e. specifies zip code and categories)     //the event
 *       var JSONobj = getRestaurants(zipcode, categories[]);  //returns array of restauarant objects?
 *       generate random number 0-9, inclusive
 *       select the random index from the array of matched restauarants
 *       parse out name, phone number, reviews, address, etc.
 *       insert these elements into resultPage.html to display them to client
 *       assign false boolean to this restaurant (remove it from list to pick from if user rerandomizes)
 *      
 *       if user clicks rerandomize
 *           var status=false;
 *           var options=9;
 *           while (status=false){
 *              if(options===0){
 *                  "There are no more options"
 *                  exit loop and navigate back
 *              }
 *              generate a new random number && index 
 *              if(index's bool ===true){
 *                  display result
 *                  options--
 *              }
 *          }
 */
