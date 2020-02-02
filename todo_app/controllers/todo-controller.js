const bodyParser = require('body-parser');

const mongoose = require('mongoose');

const keys = require('../keys/app_keys.js')

//connect to the DB

mongoose.connect(keys.mongoURI, {useNewUrlParser: true, useUnifiedTopology: true});

//sechema for data

let todoSchema = new mongoose.Schema({
  item: {
    type: String
  }
});

let Todo = mongoose.model('Todo', todoSchema);



let urlencodedParser = bodyParser.urlencoded({extended: false});



module.exports = function(app){

  app.get('/todo', (req, res) => {
    //get data from mongoDB and pass it to the view

    Todo.find({}, (err, data) => {
      if (err) throw err;
      res.render('todo', {todos: data});
    })

  });

  app.post('/todo', urlencodedParser, (req, res) => {
      //get data from the view and add it to MongoDB
      let newTodo = Todo(req.body).save((err, data) => {
        if (err) throw err;
        res.json(data);
      })

  });

  app.delete('/todo/:item', (req, res) => {
    //delete requested item from MongoDB
    Todo.find({item: req.params.item.replace(/\-/g, " ")}).remove((err, data) => {
      if (err) throw err;
      res.json(data);
    })

  });

};
