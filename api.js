var express = require ('express');
var bodyParser = require('body-parser');
var db = require('./db.js');
var catalogController = require("./controllers/catalog.js");

var exp = express();
const PORT = process.env.PORT || 3000;

exp.use(bodyParser.json());
exp.use(bodyParser.urlencoded({extenden : true}));

exp.get('/catalog', catalogController.all);
exp.get('/catalog/:id', catalogController.findByID);
exp.get('/catalog/:SKU/i', catalogController.findBySKU);
exp.get('/catalog/:type/t', catalogController.findByType);
exp.post('/catalog', catalogController.createNew);
exp.put('/catalog/:id', catalogController.change);
exp.put('/catalog/:SKU/i', catalogController.changeBySKU);
exp.delete('/catalog/:id', catalogController.deleteOne);
exp.delete('/catalog/:SKU/i', catalogController.deleteBySKU);

db.connect('mongodb+srv://koshevoy:Aj3MD5OK@apiforxsolla.bca1h.mongodb.net/apiforxsolla?retryWrites=true&w=majority', function(err){
  if (err){
    return console.log(err);
  }
  exp.listen(PORT, () => {
    console.log("its okay man, chill!!");
  });
});
