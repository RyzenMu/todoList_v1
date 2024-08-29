const express = require('express')
const bodyParser = require('body-parser');
const app = express();
app.use(bodyParser.urlencoded({extended:true}));

let items = [];
let workItems =[];

app.set('view engine', 'ejs');

app.use(express.static('public'));

app.get('/', function(req, res){
    const today = new Date();
    const now = new Date();
    let options = {
        weekday: 'long',
        year: 'numeric',
        month: 'long',
        day: 'numeric'
    };
    let formattedDate = new Intl.DateTimeFormat('en-US', options).format(new Date());
    console.log(formattedDate);

    let day = today.toLocaleDateString("en-US", options);
    
    if (today.getDay()===6 || today.getDay()===0){
        res.render('list', {day : day, now, method:"get",
            items
        });
    } else {
        res.render('list', {day : day, now, method:"get",
            items
        });
    }    
});

app.post('/', function(req, res){
    let item = req.body.itemName;
    items.push(item);
    // res.render('list', {item : true, method :'post', itemn});
    console.log(req.body.itemName);
    if (req.body.list === "work"){
        workItems.push(item)
        res.redirect("/work");
    } else {
        items.push(item);
        res.redirect("/");
    }
    
});

app.get('/work', function(req, res){
    res.render('list', {
        listTitle : "work list",
        newListItems : workItems,
    })
});

app.post("/work", function(req, res){
    let item = req.body.item;
    workItems.push(item);
    res.redirect('/work');
})

app.listen(8000, function(req, res){
    console.log('Server started on port 8000');
    
})