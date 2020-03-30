const mongoose = require('mongoose');
const Schema = mongoose.Schema;

//Registerpatient schema
const Registerpatient= new Schema({
    name: {
        type: String,
        required: true,
    },
    number: {
        type: Number,
        required: true
    }
   

},{
    timestamps:true
});

//export
module.exports = mongoose.model('registerpatient',Registerpatient);