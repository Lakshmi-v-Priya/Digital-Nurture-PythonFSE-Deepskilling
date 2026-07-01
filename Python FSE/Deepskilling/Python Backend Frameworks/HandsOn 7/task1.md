Step 1: Open main.py
Open your FastAPI project:

handson_07/
│── main.py
│── schemas.py
│── database.py
Step 2: Import required modules
At the top of main.py, add:

from fastapi import HTTPException, status
Also import your response schemas:

from schemas import CourseResponse
Step 3: Update the POST endpoint
Use a response model and return 201 Created.

@app.post(
    "/api/courses/",
    response_model=CourseResponse,
    status_code=status.HTTP_201_CREATED
)
Step 4: Update the GET endpoint
Return a single course using:

@app.get(
    "/api/courses/{id}",
    response_model=CourseResponse
)
Step 5: Complete the PUT endpoint
Create:

PUT /api/courses/{id}
Update the course details in the database.

If the course does not exist, return:

raise HTTPException(
    status_code=404,
    detail="Course not found"
)
Step 6: Complete the DELETE endpoint
Create:

DELETE /api/courses/{id}
Use:

status_code=status.HTTP_204_NO_CONTENT
Delete the course and return no response body.

Step 7: Handle invalid IDs
Whenever a course is not found, use:

raise HTTPException(
    status_code=404,
    detail="Course not found"
)
FastAPI automatically returns a JSON error response.

Step 8: Add Students endpoint
Create:

GET /api/courses/{id}/students/
Use a JOIN query to return all students enrolled in that course.

Step 9: Implement CRUD for Students
Create:

GET /api/students/
POST /api/students/
GET /api/students/{id}
PUT /api/students/{id}
DELETE /api/students/{id}
Use the same pattern as the Course endpoints.

Step 10: Implement CRUD for Enrollments
Create:

GET /api/enrollments/
POST /api/enrollments/
GET /api/enrollments/{id}
PUT /api/enrollments/{id}
DELETE /api/enrollments/{id}
Follow the same response model and status code conventions.

Step 11: Run the server
uvicorn main:app --reload
Step 12: Test the API
Test:

GET /api/courses/

POST /api/courses/

PUT /api/courses/1

DELETE /api/courses/1

GET /api/courses/1/students/

Expected Outcome
✅ POST returns 201 Created

✅ DELETE returns 204 No Content

✅ Invalid course ID returns 404

✅ Student and Enrollment CRUD works correctly.
