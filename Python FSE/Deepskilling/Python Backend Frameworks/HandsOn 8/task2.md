Add API versioning, pagination, filtering, and consistent error responses.

Step 1: Add API versioning
Change your URLs from:

/api/courses/
to:

/api/v1/courses/
Step 2: Add a comment about versioning
In your code, write a comment explaining two versioning strategies.

# URL Versioning:
# /api/v1/courses/

# Header Versioning:
# Accept: application/vnd.api+json;version=1
Step 3: Add pagination
Update:

GET /api/v1/courses/
to accept query parameters:

?page=1&page_size=2
Example:

GET /api/v1/courses/?page=1&page_size=2
Step 4: Return a pagination response
Return data in this format:

{
  "count": 10,
  "next": "/api/v1/courses/?page=2&page_size=2",
  "previous": null,
  "results": [
    {
      "id": 1,
      "name": "Python",
      "code": "CS101"
    },
    {
      "id": 2,
      "name": "Java",
      "code": "CS102"
    }
  ]
}
Step 5: Add filtering
Allow searching by course name or code.

Example:

GET /api/v1/courses/?search=python
The search should be case-insensitive.

Step 6: Standardize error responses
Return errors in this format:

{
  "error": {
    "code": "NOT_FOUND",
    "message": "Course with id 99 does not exist",
    "field": null
  }
}
Step 7: Update all error handlers
Use the same error format for:

400 Bad Request

401 Unauthorized

404 Not Found

422 Unprocessable Entity

Step 8: Test the API
Verify the following requests:

Versioned endpoint

GET /api/v1/courses/
Pagination

GET /api/v1/courses/?page=1&page_size=2
Search

GET /api/v1/courses/?search=python
Invalid course

GET /api/v1/courses/99
Expected error:

{
  "error": {
    "code": "NOT_FOUND",
    "message": "Course with id 99 does not exist",
    "field": null
  }
}
