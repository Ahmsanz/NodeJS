const bodyParser = require('body-parser');

let data = [{item: 'get milk'}, {item: 'walk the doggies'}, {item: 'kick some ass in Aikido'}];

let urlencodedParser = bodyParser.urlencoded({extended: false});



module.exports = function(app){

  app.get('/todo', (req, res) => {
    res.render('todo', {todos: data});
  });

  app.post('/todo', urlencodedParser, (req, res) => {

    data.push(req.body);
    res.json(data);

  });

  app.delete('/todo', (req, res) => {

  });

};
