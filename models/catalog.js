var db = require('../db');
var ObjectID = require('mongodb').ObjectID;

exports.all = all;
exports.findByID = findByID;
exports.findBySKU = findBySKU;
exports.createNew = createNew;
exports.change = change;
exports.changeBySKU = changeBySKU;
exports.deleteOne = deleteOne;
exports.deleteBySKU = deleteBySKU;

function all(cb){
  db.get().collection('catalog').find().toArray(function(err,docs){
    cb(err,docs);
  });
};

function findByID(id,cb){
  db.get().collection('catalog').findOne({_id: ObjectID(id)}, function(err,doc){
    cb(err,doc);
  });
};

function findBySKU(SKU,cb){
  db.get().collection('catalog').findOne({SKU: SKU}, function(err,doc){
    cb(err,doc);
  });
};

function createNew(object, cb){
  db.get().collection('catalog').insertOne(object, function(err,result){
    cb(err,result);
  });
};

function change(id, SKUNew, TitleNew, TypeNew, PriceNew, cb){
  old_data = findByID(id, cb);
  if (SKUNew == null){
    SKUNew = old_data["SKU"]
  }
  db.get().collection('catalog').updateOne(
    {_id: ObjectID(id)}, {$set: {SKU: SKUNew, Title: TitleNew, Type: TypeNew, Price: PriceNew}}, function(err,result) {
      cb(err,result);
    });
};

function changeBySKU(SKUOld, SKUNew, TitleNew, TypeNew, PriceNew, cb){
  old_data = findBySKU(SKUOld, cb);
  if (SKUNew == null){
    SKUNew = old_data["SKU"]
  }
  db.get().collection('catalog').updateOne(
    {SKU: SKUOld}, {$set: {SKU: SKUNew, Title: TitleNew, Type: TypeNew, Price: PriceNew}}, function(err,result){
      cb(err,result);
    });
};

function deleteOne(id, cb){
  db.get().collection('catalog').deleteOne({_id: ObjectID(id)}, function(err,result){
    cb(err,result);
  });
};

function deleteBySKU(SKU,cb){
  db.get().collection('catalog').deleteOne({SKU: SKU}, function(err,result){
    cb(err,result);
  });
};
