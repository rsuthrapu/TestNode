var express = require('express');
var http = require('http');

var queryStrings = 'userName=muser_ca&password=pword';
var optionsgetmsg = {
    host : 'testmobile.ciginsurance.com', // here only the domain name(no http/https !)
    port : 80,
    uri : '/MobileServices/Mobile.Services.svc/Login?queryStrings', // the rest of the url with parameters if needed
    method : 'GET' // do GET
};

console.info('Options prepared:');
console.info(optionsgetmsg);
console.info('Do the GET call');

 // do the GET request
 var reqPost = http.request(optionsgetmsg, function(res) {

    console.log("statusCode: ", res.statusCode);

     // uncomment it for header details
	//console.log("headers: ", res.headers);

     res.on('data', function(d) {
        console.info('result after GET:\n');
        process.stdout.write(d.toString('base64'));
      //console.log(d.toString('base64'));
        console.info('\n\nCall completed');
     });
 });

 reqPost.end();
 reqPost.on('error', function(e) {
     console.error(e);
 });

