'use strict';

var Mongoose = require('mongoose');

/**
 * Each connection object represents a user connected through a unique socket.
 * Each connection object composed of {userId + socketId}. Both of them together are unique.
 *
 */
var MessagesSchema = new Mongoose.Schema({
    roomId: { type: String, required: true },
    messages: { type: [{ userId: String, message: String, timestamp: String }] }
});

var messagesModel = Mongoose.model('messages', MessagesSchema);

module.exports = messagesModel;
