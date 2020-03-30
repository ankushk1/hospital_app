# hospital_app

1.Open terminal and run index.js. Then on browser run on localhost:8000.

2.Register user on POST- http://localhost:8000/doctors/register and fill name ,email and password in body/x-www-form-urlencoded.

3.Login with email and password. POST-http://localhost:8000/doctors/login and fill email and password in body/x-www-form-urlencoded. A jwt token will be generated, copy it.

NOTE - FOR EVERY OPERATION YOU NEED THE TOKEN FOR VALIDATION

4.To create a note POST- http://localhost:8000/patients/register_patient. Go into header. Fill one column with content-type = application/json and other with x-access-token = copied token value. In body/x-www-form-urlencoded fill name and number.

5.To get list of all patients. GET- http://localhost:8000/patients/getpatients.

6.To create report of patient with specific id add doctor, status and date . POST-http://localhost:8000/patients/:id/create_report.

7. to get all reports of patient with id. GET- http://localhost:8000/patients/:id/all_reports.
