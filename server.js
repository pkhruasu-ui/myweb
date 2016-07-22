var express = require('express');
var app = express();

app.use(express.static('public') );

app.get('/',function(req,res,next){
	res.sendFile(__dirname + "/public/index.html");
})

app.listen(80,function(){
	console.log('listening');
})