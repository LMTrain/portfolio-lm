const mongoose = require('mongoose');
const Schema = mongoose.Schema;

//FUNCTION TO SET STRING TYPES
const setStringType = (maxLength) => ({ type: String, required: true, maxlength: maxLength })

const portfolioSchema = new Schema({
    userId: { type: String, required: true },    
    projectName: { type: String },
    category: { type: String },
    client: { type: String },
    completion: { type: Date },
    role: { type: String },
    repositoryLink: { type: String },
    deployedLink: { type: String },
    imageLink:  { type: String },
    projectDescription: { type: String },    
});

module.exports = mongoose.model('Portfolio', portfolioSchema);