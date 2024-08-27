const express = require('express');
const serverless = require('serverless-http');

const app = express();

const router = express.Router();

router.get('/', (req, res)=>{
    res.write('Hi this is netlify');
    res.write('Hi this is netlify');
    res.write('Hi this is netlify');
    res.send();
})

router.get('/test', (req, res)=>{
    res.write('<h1>Hi this is test</h1>');
    res.write('<h2>Hi this is test</h2>');
    res.write('<h3>Hi this is test</h3>');
    res.send();
})

app.use('/.netlify/functions/api', router);

module.exports.handler = serverless(app);