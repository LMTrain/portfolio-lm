const mongoose = require('mongoose');
const Schema = mongoose.Schema;

//FUNCTION TO SET STRING TYPES
const setStringType = (maxLength) => ({ type: String, required: true, maxlength: maxLength })

const portfolioSchema = new Schema({
    userId: { type: String, required: true },
    title: setStringType(256),
    company: setStringType(256),
    location: setStringType(128),
    position: setStringType(1000),
    description: setStringType(7000),
    Category: { type: String },
    Client: { type: String },
    Completion: { type: Date },
    Role: { type: String },
    RepositoryLink: { type: String },
    DeployedLink: { type: String },
    ProjectDescription: { type: String },
    startDate: { type: Date, required: true },
    endDate: Date
});

module.exports = mongoose.model('Portfolio', portfolioSchema);