const express = require('express')
const bodyParser = require('body-parser');

const app = express();

app.set('view engine', 'ejs');

app.get('/', function(req, res){
    const today = new Date();
    const now = new Date();
    if (today.getDay()===6 || today.getDay()===0){
        res.render('list', {day : today.getDay(), now});
    } else {
        res.render('list', {day : today.getDay(), now});
    }
});

app.listen(8000, function(req, res){
    console.log('Server started on port 8000');
    
})