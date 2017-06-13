/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */


/*myDateTime = function () {
    return Date();
};*/



//self-made functions to export

/*

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

*/

/*
 * 
 * 
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
*/







/******SAMPLE CODE ABOVE. CLASS AND FUNCTION PROTOTYPES BELOW*************/



'use strict';

const numberOfResults=20;//subject to change

const yelp = require('yelp-fusion');
const http = require('http');

// Place holders for Yelp Fusion's OAuth 2.0 credentials. Grab them
// from https://www.yelp.com/developers/v3/manage_app
const clientId = 'UCn9wNpGoW4R8I-skfKghw';
const clientSecret = 'sU7Db2PGwyTiFk338fP1YX7CSlpTyp8NZ7ap3wvOILXLV8yK3KDN5tR3oO6U9pwx';



htttpRequest=function(req){
  var results=[];
  yelp.accessToken(clientId, clientSecret).then(response => {   // pass client credentials
    const client = yelp.client(response.jsonBody.access_token);  //client now holds token in json form?-like the post call
    
    client.search(req).then(response => {
      var temp;
      for(var i=0;i<numberOfResults;i++){
          temp=response.json.Body.businesses[i];
          results[i]=new Restaurant();
          results[i].addRestaurant(temp);
          const prettyJson = JSON.stringify(temp);
          console.log(results[i]);
      }
    });
  }).catch(e => {
    console.log(e);
  });
  return results;
};


var results=[];//will use addRestaurant to populate this


class Restaurant{  
    constructor()/*(zipcode, categories)*/{
        //this.zipcode=zipcode;
        //this.catgories=catagories;
        var zipcode;
        var categories;
        var name;
        var phoneNumber;
        var url;
        var address;
        var review;//or photo?
        var price;
        var image_url;
        var id;
        var rating;
        var isOption=true;
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
    
    addRestaurant(restaurant){
        this.zipcode=restaurant.zipcode.toString();
        this.categories=restaurant.categories.toString();
        this.name=restaurant.name.toString();
        this.phoneNumber=restaurant.phoneNumber.toString();
        this.url=restaurant.url.toString();
        this.address=restaurant.address.toString();
        this.review=restaurant.review.toString();
        this.price=restaurant.price.toString();
        this.image_url=restaurant.image_url.toString();
        this.id=restaurant.id.toString();
        this.rating=restaurant.rating.toString();        
        //return this;//return restaurant with data filled in
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
        
        var matches=httpRequest(request);//will store results returned at end of http function
                                         //now, matches is an array of restaurant objects
                                         
        //pick a random number from 0 to 19
        //access matches[index] components
        //put components into resultPage
        //make matches[index].isOption=false
        
        //handle regenerating
        
        
    
        
    }
    //we should check to see if we can submit a get request specifying at least 3 stars
    isDecent(/*pass restarant id or whole json object*/){
    //parse out # of stars
    //return whether or not it is at least 3 stars (bool)
    }//
    
}

htttpRequest=function(req){
  yelp.accessToken(clientId, clientSecret).then(response => {   // pass client credentials
    const client = yelp.client(response.jsonBody.access_token);  //client now holds token in json form?-like the post call
    
    client.search(req).then(response => {
      var temp;
      for(var i=0;i<numberOfResults;i++){
          temp=response.json.Body.businesses[i];
          temp=new(Restaurant);
          results[i]=addRestaurant(temp);
          const prettyJson = JSON.stringify(temp);
          console.log(results[i]);
      }
    });
  }).catch(e => {
    console.log(e);
  });
  return results;
};





/******************Fuctions to create*************/


//function getRestaurants(zipcode, categories){
    //do get request based on search criteria
    //populate an array with first 10 restauarants with for loop
    //return the array of restaurant matches
//};



//we should check to see if we can submit a get request specifying at least 3 stars
function isDecent(/*pass restarant id or whole json object*/){
    //parse out # of stars
    //return whether or not it is at least 3 stars (bool)
};//





function isArray(myArray) {
    return myArray.constructor.toString().indexOf("Array") > -1;  // validates that object passed is an array
};

