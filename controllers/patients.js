const patient = require('../models/patients');

module.exports = {
    
    //create user
    create: function (req, res, next) {
        patient.findByIdAndUpdate(req.params.id,{
            doctor:req.body.name,
            status:req.body.number,
            date:req.body.date,
        } ,function (err, result) {
            if (err) {
                next(err);
            } else {
                res.json({
                    status: "Success",
                    message: "report created",
                    data: {
                        report: result
                    }
                });
            }
        });
    },


    //get all patients
    getAllstatus: function (req, res, next) {
        let patientlist = [];
        patient.findById( function (err, patients) {
            if (err) {
                next(err);
            } else {
                for (let p of patients) {
                    patientlist.push({
                        doctor: p.doctor,
                        status:p.status,
                        date: p.date,
                    });
                }
                res.json({
                    status: "Success",
                    message: "List found",
                    data: {
                        patients: patientlist
                    }
                });

            }
        });
    },

}