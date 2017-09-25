var mongoose = require('mongoose');

var schema = mongoose.Schema,
    ObjectId = schema.ObjectId;


var category = new Schema({
    _id: { type: ObjectId, auto: true },
    name: { type: String, required: true },
    description: { type: string },
    createdDate: { type: Date, default: Date.now }
}, { versionKey: false });



var category = mongoose.model("categories", category);

module.exports = category;