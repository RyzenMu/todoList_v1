const express = require('express')
const bodyParser = require('body-parser');

const app = express();

app.get('/', function(req, res){
    const today = new Date();
    if (today.getDay()===6 || today.getDay()===0){
        res.send("It is the weekend");
    } else {
        res.sendFile(__dirname +'/index.html');
    }
});

app.listen(8000, function(req, res){
    console.log('Server started on port 8000');
    
})