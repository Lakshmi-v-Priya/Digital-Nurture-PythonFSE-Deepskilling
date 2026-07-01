Break your Course Management API into separate microservices and run them independently.

Step 1: Review your existing project
Use the Course Management API you built in the previous hands-ons.

Step 2: Identify microservices
Create a file named:

README.md
Document the services in a table like this:

Service Name	Responsibility	Endpoints	Database
Course Service	Manage courses and departments	/api/courses/	course.db
Student Service	Manage students and enrollments	/api/students/	student.db
Auth Service	Login, registration, JWT	/api/auth/	auth.db
Notification Service	Send email notifications	Internal	notification.db
Step 3: Create the project structure
Create folders:

handson_10/
│
├── course_service/
│   ├── app.py
│   └── course.db
│
├── student_service/
│   ├── app.py
│   └── student.db
│
└── README.md
Step 4: Create the Course Service
Inside course_service/app.py, create a simple Flask application.

Run it on port 5001.

Example endpoint:

GET /api/courses/
This service should only handle:

Course CRUD

Department CRUD

Step 5: Create the Student Service
Inside student_service/app.py, create another Flask application.

Run it on port 5002.

This service should handle:

Student CRUD

Enrollment

Step 6: Give each service its own database
Example:

course_service/
    course.db

student_service/
    student.db
Do not share the same database.

Step 7: Run both services
Open two terminals.

Terminal 1
cd course_service
python app.py
Runs on:

http://localhost:5001
Terminal 2
cd student_service
python app.py
Runs on:

http://localhost:5002
Step 8: Test both services
Course Service:

GET http://localhost:5001/api/courses/
Student Service:

GET http://localhost:5002/api/students/
Both services should work independently.

