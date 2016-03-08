"use strict";

var express = require('express');
var app = express();
var bodyParser = require('body-parser');
var port = process.env.PORT || 3000;

/////////// Page Server ///////////

// var ONE_DAY = 86400000;
// , { maxAge: ONE_DAY } // add after __dirname

// app.use(express.compress()); // gzip doesn't seem to be working
app.use(express.static(__dirname));        
app.use(bodyParser.json()); // for parsing application/json
app.use(bodyParser.urlencoded({ extended: true })); // for parsing application/x-www-form-urlencoded


/////////// Mail Server ///////////
var nodemailer = require("nodemailer");
var smtpTransport = require('nodemailer-smtp-transport');
var router = express.Router();

app.post('/contact-form', function(req, res) { 
		
	var transporter = nodemailer.createTransport((smtpTransport({
	  service: "Gmail",
	  auth: {
	    user: "basilvetas@gmail.com",
	    pass: "ijngqtgtnvsiikjt"
	  }
	})));

	var mailToMeOptions = {
	  to: "basilvetas@gmail.com",
	  subject: req.body.subject, 
	  text: "From: " + req.body.name + " at " + req.body.email + "\n\n" + req.body.text
	};

	transporter.sendMail(mailToMeOptions, function(error, response){
		
	  if(error){	  	
	    return res.send({result: "Failure 1", msg: err.Message});
	  }
	  else {

	   	var mailToThemOptions = {		
			  from: "Basil Vetas <basilvetas@gmail.com>",
			  to: req.body.name + " <" + req.body.email + ">",
			  subject: "Thanks for message", 
			  text: "Hi " + req.body.name + ", \n\nThanks for your message, I will get back to you as soon as I can.\n\nBest,\nBasil"
			};			

			transporter.sendMail(mailToThemOptions, function(err, resp){	  	  
			  if(err) {	  	
			    return res.send({result: "Failure 2", msg: err.Message});
			  }
			  else {
			  	return res.send({result: "Success", msg: "success"});	   	   
			  }	  
			});	
	  } 
	});	
});	// end app.post


// Listen
app.listen(port);
console.log("Server listening on port " + port);



