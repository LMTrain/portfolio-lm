const mongoose = require('mongoose');
const Schema = mongoose.Schema;

//FUNCTION TO SET STRING TYPES
const setStringType = (maxLength) => ({ type: String, required: true, maxlength: maxLength })

const resumeSchema = new Schema({
    userId: { type: String, required: true },
    title: { type: String },
    company: { type: String },
    location: { type: String },
    position: { type: String },
    description: { type: String },
    shortDescription: { type: String },   
    startDate: { type: Date },
    endDate: Date
});

module.exports = mongoose.model('Resume', resumeSchema);