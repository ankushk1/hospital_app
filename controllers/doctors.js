const user = require('../models/doctors');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');


module.exports = {
    //create user
    register: function (req, res, next) {
        user.create({
            name: req.body.name,
            email: req.body.email,
            password: req.body.password
        }, function (err, result) {
            if (err)
                next(err);
            else
                res.json({
                    status: "Success",
                    message: "User registered",
                    data: null
                });

        });
    },



    //authenticate user/login
    login: function (req, res, next) {
        user.findOne({
            email: req.body.email
        }, function (err, userInfo) {
            if (err) {
                next(err);
            } else {
                if (bcrypt.compareSync(req.body.password, userInfo.password)) {
                    const token = jwt.sign({
                        id: userInfo._id
                    }, req.app.get('secretKey'), {
                        expiresIn: '2h'
                    });

                    res.json({
                        status: "Success",
                        message: "Logged in",
                        data: {
                            user: userInfo,
                            token: token
                        }
                    });
                } else {
                    res.json({
                        status: "error",
                        message: "Invalid email / password",
                        data: null
                    });
                }
            }
        });
    },
}