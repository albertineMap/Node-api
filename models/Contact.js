const mongoose = require("mongoose");
// Setup schema
var shema = mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true
    },
    gender: String,
    phone: String,
    create_date: {
        type: Date,
        default: Date.now
    }
},{ collection : 'contact' });
const contact = module.exports= mongoose.model("node-api",shema,"contact");

module.exports.get = function (callback, limit) {
    contact.find(callback).limit(limit);
    
}