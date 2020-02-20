const mongoose = require('mongoose');
const Schema = mongoose.Schema;

//FUNCTION TO SET STRING TYPES
const setStringType = (maxLength) => ({ type: String, required: true, maxlength: maxLength })

const blogSchema = new Schema({
    userId: { type: String, required: true },
    slug: { type: String, unique: true, sparse: true},
    title: setStringType(256),
    subTitle: setStringType(256),
    story: setStringType(600),   
    createdAt: { type: Date, default: Date.now},
    updatedAt: { type: Date, default: Date.now},
    status: { type: String, default: 'draft'},
    author: setStringType(256),
});

module.exports = mongoose.model('Blog', blogSchema);