const mongoose = require('mongoose');
const Schema = mongoose.Schema;
//patientSchema
const patientSchema = new Schema({
    doctor: {
        type: String,

        required: true,
    },
    status: {
        type: String,
        required: true
    },

    date:{
        type:String,
        required:true
    }
    
}, {
    timestamps: true
});

//export
module.exports = mongoose.model('patient',patientSchema);
