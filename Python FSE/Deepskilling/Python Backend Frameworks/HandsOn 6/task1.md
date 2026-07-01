Step 1: Install the required packages
Open Terminal and run:

pip install fastapi uvicorn sqlalchemy
Step 2: Create the project structure
Create a folder like this:

handson_06/
│
├── main.py
├── schemas.py
└── requirements.txt
Step 3: Create main.py
Add the following code:

from fastapi import FastAPI

app = FastAPI(
    title="Course Management API",
    version="1.0"
)

@app.get("/")
def root():
    return {"message": "API running"}
Step 4: Create schemas.py
from pydantic import BaseModel
from typing import Optional, List
Step 5: Create the CourseCreate schema
class CourseCreate(BaseModel):
    name: str
    code: str
    credits: int
    department_id: int
Step 6: Create the CourseUpdate schema
class CourseUpdate(BaseModel):
    name: Optional[str] = None
    code: Optional[str] = None
    credits: Optional[int] = None
    department_id: Optional[int] = None
Step 7: Create the CourseResponse schema
class CourseResponse(BaseModel):
    id: int
    name: str
    code: str
    credits: int
    department_id: int
Step 8: Create the DepartmentResponse schema
class DepartmentResponse(BaseModel):
    id: int
    name: str
    courses: List[CourseResponse] = []
Step 9: Add a POST endpoint in main.py
from schemas import CourseCreate

@app.post("/api/courses/")
async def create_course(course: CourseCreate):
    return {
        "message": "Course created successfully",
        "course": course
    }
Step 10: Run the FastAPI server
uvicorn main:app --reload
Step 11: Open Swagger UI
Visit:

http://127.0.0.1:8000/docs
You should see the automatically generated API documentation.

Step 12: Test the POST endpoint
POST

http://127.0.0.1:8000/api/courses/
Example JSON:

{
  "name": "Python",
  "code": "CS101",
  "credits": 4,
  "department_id": 1
}
If any required field is missing, FastAPI automatically returns 422 Unprocessable Entity.
