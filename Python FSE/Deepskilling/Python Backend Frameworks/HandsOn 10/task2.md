Allow one service to call another and create a simple API Gateway.

Step 1: Install Requests
pip install requests
Step 2: Add an Enrollment endpoint
In Student Service, create:

POST /api/students/<id>/enroll
Step 3: Call the Course Service
Before enrolling the student, verify the course exists.

Call:

GET http://localhost:5001/api/courses/<course_id>/
using Python's requests library.

Step 4: Handle connection errors
If the Course Service is unavailable, catch the exception and return:

503 Service Unavailable
Example message:

{
    "error": "Course Service is unavailable"
}
Step 5: Create the API Gateway
Create another folder:

gateway/
Inside it create:

gateway/
    app.py
Run the gateway on port 5000.

Step 6: Route requests
Configure the gateway to forward requests:

Gateway URL	Forward To
/api/courses/*	Course Service (5001)
/api/students/*	Student Service (5002)
Use:

requests.request()
to forward the incoming request.

Step 7: Run all services
Open three terminals.

Terminal 1
cd course_service
python app.py
Terminal 2
cd student_service
python app.py
Terminal 3
cd gateway
python app.py
Gateway:

http://localhost:5000
Step 8: Test through the Gateway
Send:

POST http://localhost:5000/api/students/1/enroll
Include the course ID in the request body.

Flow:

Client
   ↓
Gateway (5000)
   ↓
Student Service (5002)
   ↓
Course Service (5001)
The Student Service checks the Course Service before enrolling the student.

Step 9: Test Service Failure
Stop the Course Service.

Try the enrollment request again.

Expected response:

503 Service Unavailable
Step 10: Update README.md
Add a short explanation comparing communication methods:

Synchronous (HTTP)
Immediate request and response

Easy to implement

If one service is down, the request fails

Asynchronous (Message Queue)
Services communicate through queues

More reliable for large systems

Better for background tasks

Examples: RabbitMQ, Kafka
