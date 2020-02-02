const express = require('express');

const app = express();

const todoController = require('./controllers/todo-controller')


//set up template engine

app.set('view engine', 'ejs');

//serving static files

app.use(express.static('./public'));


//fire controllers

todoController(app);

//listening to port..

app.listen(3000);
console.log('listening to port 3000');
