Step 1: Add a GET endpoint by ID
In main.py:

@app.get("/api/courses/{course_id}")
async def get_course(course_id: int):
    return {"course_id": course_id}
Step 2: Add a GET endpoint with query parameters
from typing import Optional

@app.get("/api/courses/")
async def get_courses(
    skip: int = 0,
    limit: int = 10,
    department_id: Optional[int] = None
):
    return {
        "skip": skip,
        "limit": limit,
        "department_id": department_id
    }
Step 3: Configure an async SQLAlchemy engine
Create a database configuration file (for example, database.py):

from sqlalchemy.ext.asyncio import create_async_engine

DATABASE_URL = "sqlite+aiosqlite:///courses.db"

engine = create_async_engine(DATABASE_URL)
Step 4: Create a database dependency
async def get_db():
    yield "Database Session"
Step 5: Inject the database dependency
from fastapi import Depends

@app.get("/api/all-courses/")
async def all_courses(db=Depends(get_db)):
    return {
        "message": "Using database dependency"
    }
Step 6: Implement async CRUD operations
Examples:

await db.execute(...)
await db.commit()
Use these for:

Create

Read

Update

Delete

operations on courses.

Step 7: Test pagination
Open:

GET http://127.0.0.1:8000/api/courses/?skip=0&limit=2
Expected:

Returns the first 2 courses.

Next:

GET http://127.0.0.1:8000/api/courses/?skip=2&limit=2
Expected:

Returns the next 2 courses.

Step 8: Test filtering
Example:

GET http://127.0.0.1:8000/api/courses/?department_id=1
Expected:

Returns only courses belonging to department 1.

Step 9: Verify the API
Test these endpoints:

GET /

POST /api/courses/

GET /api/courses/{course_id}

GET /api/courses/?skip=0&limit=2

GET /api/courses/?department_id=1

