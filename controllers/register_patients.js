const registerpatient=  require('../models/register_patient');

module.exports = {
    //create user
    register: function (req, res, next) {
        registerpatient.create({
            name: req.body.name,
            number: req.body.number,
            
        }, function (err, result) {
            if (err)
                next(err);
            else
                res.json({
                    status: "Success",
                    message: "patient added successfully",
                    data: null
                });

        });
    },

    //get reports list with id
    getAll: function (req, res, next) {
        let patientlist = [];
        registerpatient.find({}, function (err, patients) {
            if (err) {
                next(err);
            } else {
                for (let patient of patients) {
                    patientlist.push({
                        id: patient._id,
                        name: patient.name,
                        number: patient.number
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