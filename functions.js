/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */


exports.myDateTime = function () {
    return Date();
};



//self-made functions to export


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

'use strict';

const yelp = require('yelp-fusion');

// Place holders for Yelp Fusion's OAuth 2.0 credentials. Grab them
// from https://www.yelp.com/developers/v3/manage_app
const clientId = 'UCn9wNpGoW4R8I-skfKghw';
const clientSecret = 'sU7Db2PGwyTiFk338fP1YX7CSlpTyp8NZ7ap3wvOILXLV8yK3KDN5tR3oO6U9pwx';


const searchRequest = {
  term:'Four Barrel Coffee',
  location: 'san francisco, ca'
};


yelp.accessToken(clientId, clientSecret).then(response => {   // pass client credentials
  const client = yelp.client(response.jsonBody.access_token);  //client now holds token in json form?-like the post call

  client.search(searchRequest).then(response => {
    const firstResult = response.jsonBody.businesses[0];
    const prettyJson = JSON.stringify(firstResult, null, 4);
    console.log(prettyJson);
  });
}).catch(e => {
  console.log(e);
});





class Restaurant{
    constructor(zipcode, categories){
        this.zipcode=zipcode;
        this.catgories=catagories;
        var name;
        var phoneNumber;
        var url;
        var address;
        var review;//or photo?
    }
    
    static getZipCode(){
        return zipcode;
    }
    static getCategories(){
        return categories;
    }
    static getName(){
        return name;
    }
    static getPhoneNumber(){
        return phoneNumber;
    }
    static getURL(){
        return url;
    }
    static getAddress(){
        return address;
    }
    static review(){
        return review;
    }
    
    getRestaurants(zipcode,criteria){
            //do get request based on search criteria
    //populate an array with first 10 restauarants with for loop
    //return the array of restaurant matches
        //var zip= zipcode;
        //var category= categories;    
        const request={
            zip: zipcode,
            categories: criteria
        };
        
        
    
    
        
    }
    //we should check to see if we can submit a get request specifying at least 3 stars
    isDecent(/*pass restarant id or whole json object*/){
    //parse out # of stars
    //return whether or not it is at least 3 stars (bool)
    }//
    
}





/******************Fuctions to create*************/


function getRestaurants(zipcode, categories){
    //do get request based on search criteria
    //populate an array with first 10 restauarants with for loop
    //return the array of restaurant matches
};



//we should check to see if we can submit a get request specifying at least 3 stars
function isDecent(/*pass restarant id or whole json object*/){
    //parse out # of stars
    //return whether or not it is at least 3 stars (bool)
};//





function isArray(myArray) {
    return myArray.constructor.toString().indexOf("Array") > -1;
};





/*

//Function to store first 10 results into an array
function getTopResults(resArray){
    //send get request for restauarants that fit criteria
    //populate array with restaurant matches
};

// Parses out and checks if restauarant has category
//this may be unenecessary if yelp let's us screen for criteria upfront
function hasCriterion(category){
    //return bool
};

*/

/*The following function is very different if we can specify to yelp to only
 * return restauarants that fit the criteria in the first place... which is 
 * probably what it does lol*/

/*

//takes zipcode and criteria and does get request
//var zipcode ="";
//var criterion=["","","","","",""];
function getRestaurantById(zipcode, criterion){
    if(isArray(criterion)&&criterion.length!==0){  //check to make sure criterion is an array
        const numOfResults=10;
        var results=[];
        var matchedResults=[];
        //get results and store in results array (only 10 for now)
        for(var i=0;i<results.length;i++){ // check all the results from yelp
            var match=false;
            for(var j=0;criterion[j]!=="";j++){
                //if criterion not found, exit loop; if it is, just continue
                //i.e.: if(results[i].hasCriterion(criterion[j])===false)
                //            exit;
            }
            if(status===true){
                //add result to mtachedResults
            }
        }
    }
};
*/