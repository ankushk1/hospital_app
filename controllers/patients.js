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

}
