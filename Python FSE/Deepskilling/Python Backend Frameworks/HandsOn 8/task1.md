Review your existing API and update it to follow REST API best practices.

Step 1: Open your project
Use the project you created in Django, Flask, or FastAPI (choose one framework).

Step 2: Review all API endpoints
Check all your URLs and ensure they follow REST naming rules.

✅ Use nouns, not verbs.

Correct:

/api/courses/
/api/students/
/api/enrollments/
Incorrect:

/api/getCourses/
/api/createCourse/
/api/deleteStudent/
Step 3: Make resource names plural
Use plural resource names.

Correct:

/api/courses/
/api/students/
Incorrect:

/api/course/
/api/student/
Step 4: Use hyphens instead of underscores
For multi-word resources, use hyphens.

Correct:

/api/course-details/
Incorrect:

/api/course_details/
Step 5: Verify HTTP methods
Ensure each endpoint uses the correct HTTP method.

Method	Purpose
GET	Read data
POST	Create data
PUT	Replace an entire resource
PATCH	Partially update a resource
DELETE	Delete a resource
Step 6: Add a PATCH endpoint
Create:

PATCH /api/courses/{id}/
This endpoint should update only the fields provided instead of replacing the entire course.

Step 7: Verify HTTP status codes
Ensure your API returns the correct status codes.

Operation	Status Code
GET	200 OK
PUT	200 OK
PATCH	200 OK
POST	201 Created
DELETE	204 No Content
Validation Error	400 Bad Request
Unauthorized	401 Unauthorized
Not Found	404 Not Found
Schema Validation Error	422 Unprocessable Entity
Step 8: Add a Location header for POST
After creating a new course, include a Location header pointing to the new resource.

Example:

response.headers["Location"] = f"/api/courses/{new_course.id}/"
Step 9: Test your API
Using Postman or Thunder Client, verify:

GET /api/courses/

POST /api/courses/

PUT /api/courses/{id}/

PATCH /api/courses/{id}/

DELETE /api/courses/{id}/

