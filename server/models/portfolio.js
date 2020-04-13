const mongoose = require('mongoose');
const Schema = mongoose.Schema;

//FUNCTION TO SET STRING TYPES
const setStringType = (maxLength) => ({ type: String, required: true, maxlength: maxLength })

const portfolioSchema = new Schema({
    userId: { type: String, required: true },
    title: { type: String },
    company: { type: String },
    location: { type: String },
    position: { type: String },
    description: { type: String },
    shortDescription: { type: String },
    projectName: { type: String },
    category: { type: String },
    client: { type: String },
    completion: { type: Date },
    role: { type: String },
    repositoryLink: { type: String },
    deployedLink: { type: String },
    imageLink:  { type: String },
    projectDescription: { type: String },
    startDate: { type: Date },
    endDate: Date
});

module.exports = mongoose.model('Portfolio', portfolioSchema);