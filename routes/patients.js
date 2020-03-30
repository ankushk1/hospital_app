const express = require('express');
const router = express.Router();
const ApiController = require('../controllers/patients');
const rpcontroller=require('../controllers/register_patients');

router.post('/register_patient', rpcontroller.register);
router.get('/getpatients',rpcontroller.getAll);
router.post('/:id/create_report', ApiController.create);
router.get('/:id/all_reports',ApiController.getAllstatus);

//export router
module.exports = router;