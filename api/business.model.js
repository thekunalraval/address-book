// business.model.js

const mongoose = require('mongoose');
const Schema = mongoose.Schema;

// Define collection and schema for Business
let Business = new Schema({
    first_name: {
        type: String
    },
    last_name: {
        type: String
    },
    email: {
        type: String
    },
    contact: {
        type: Number
    }
},{
    collection: 'business'
});

module.exports = mongoose.model('Business', Business);
