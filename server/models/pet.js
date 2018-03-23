const mongoose = require('mongoose');
   
const Schema = mongoose.Schema;
const PetSchema = new mongoose.Schema({
    name: {type: String, required: [true, 'Name must be at least 3 characters'], unique: ['name exists' ,true], minlength: 3},
    type:{type: String, lowercase: true, required: [true, 'Min Length of 3 characters'], minlength: 3},
    description: {type: String, required: [true, 'Description Required'], minlength: 3},
    skill1: {type: String},
    skill2: {type: String},
    skill3: {type: String},
    likes: {type: Number, default: 0},
}, {timestamps:true});
mongoose.model('Pet', PetSchema);