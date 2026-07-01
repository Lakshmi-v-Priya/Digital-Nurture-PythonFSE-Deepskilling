Goal
Use FastAPI Background Tasks and customize the Swagger/OpenAPI documentation.

Step 1: Import BackgroundTasks
In main.py, add:

from fastapi import BackgroundTasks
Step 2: Create a background task function
Add:

def send_confirmation_email(student_email: str):
    print(f"Sending confirmation to {student_email}")
Step 3: Update the Enrollment POST endpoint
Modify the endpoint:

@app.post("/api/enrollments/")
Add a parameter:

background_tasks: BackgroundTasks
After creating the enrollment, schedule the task:

background_tasks.add_task(
    send_confirmation_email,
    student.email
)
Step 4: Run the server
uvicorn main:app --reload
Step 5: Test the Enrollment endpoint
Send:

POST /api/enrollments/
The API should immediately return:

201 Created
Then check the terminal. You should see:

Sending confirmation to student@example.com
Step 6: Customize OpenAPI information
Update your FastAPI app:

app = FastAPI(
    title="Course Management API",
    description="Backend API for managing courses, students and enrollments.",
    version="1.0",
    contact={
        "name": "Your Name",
        "email": "your@email.com"
    }
)
Step 7: Add tags
Group your endpoints.

Example:

@app.get(
    "/api/courses/",
    tags=["Courses"]
)
Similarly, use:

tags=["Students"]
and

tags=["Enrollments"]
Step 8: Add summary and response description
Update the create course endpoint:

@app.post(
    "/api/courses/",
    summary="Create a new course",
    response_description="Course created successfully"
)
Step 9: Open Swagger UI
Visit:

http://127.0.0.1:8000/docs
Verify that:

Endpoints are grouped by tags.

The title, description, and contact information are displayed.

The summary and response description appear for the POST endpoint.
