var catalog = require("../models/catalog.js");

exports.all = all;
exports.findByID = findByID;
exports.findBySKU = findBySKU;
exports.createNew = createNew;
exports.change = change;
exports.changeBySKU = changeBySKU;
exports.deleteOne = deleteOne;
exports.deleteBySKU = deleteBySKU;

function all(req,res){
  catalog.all(function(err,docs){
    if (err){
      console.log(err);
      return res.sendStatus(500);
    }
    res.send(docs);
  });
};

function findByID(req,res){
  catalog.findByID(req.params.id,function(err,doc){
    if (err){
      console.log(err);
      return res.sendStatus(500);
    };
    res.send(doc);
  });
};

function findBySKU(req,res){
  catalog.findBySKU(req.params.SKU,function(err,doc){
    if (err){
      console.log(err);
      return res.sendStatus(500);
    };
    res.send(doc);
  });
};

function createNew(req,res){
  var object = {
    SKU: req.body.SKU, Title: req.body.Title, Type: req.body.Type, Price: req.body.Price
  };
  catalog.createNew(object, function(err,result){
    if (err){
      console.log(err);
      return res.sendStatus(500);
    };
  res.send(object);
  });
};

function change(req,res){
  catalog.change(req.params.SKU, {SKU: req.body.SKU}, {Title: req.body.Title}, {Type: req.body.Type}, {Price: req.body.Price}, function(err,result){
    if (err) {
      console.log(err);
      return res.sendStatus(500);
      };
    res.sendStatus(200);
  });
};

function changeBySKU(req,res){
  catalog.changeBySKU(req.params.SKU, {SKU: req.body.SKU},{Title: req.body.Title}, {Type: req.body.Type}, {Price: req.body.Price}, function(err,result){
    if (err){
      console.log(err);
      return res.sendStatus(500);
    };
    res.sendStatus(200);
  });
};

function deleteOne(req,res){
  catalog.deleteOne(req.params.id, function(err,result){
  if (err) {
    console.log(err);
    return res.sendStatus(500);
    };
  res.sendStatus(200);
  });
};

function deleteBySKU(req,res){
  catalog.deleteBySKU(req.params.SKU, function(err,result){
    if (err){
      console.log(err);
      return res.sendStatus(500);
      };
    res.sendStatus(200);
  });
};
