'use strict';

var messagesModel   = require('../database').models.messages;


var create = function (data, callback){
	var newMessage = new messagesModel(data);
	newMessage.save(callback);
};

var find = function (data, callback){
	messagesModel.find(data, callback);
};

var findOne = function (data, callback){
	messagesModel.findOne(data, callback);
};

var findById = function (id, callback){
	messagesModel.findById(id, callback);
};

var findByIdAndUpdate = function(id, data, callback){
	messagesModel.findByIdAndUpdate(id, data, { new: true }, callback);
};



module.exports = { 
	create, 
	find, 
	findOne, 
	findById,
	findByIdAndUpdate
};