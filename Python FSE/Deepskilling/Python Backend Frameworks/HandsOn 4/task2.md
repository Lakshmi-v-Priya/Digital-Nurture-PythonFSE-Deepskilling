Step 1: Open courses/routes.py
Open:

flask_coursemanager/
└── courses/
    └── routes.py
Step 2: Create a helper function
Add this below the courses = [] list:

def make_response_json(data, status_code):
    return jsonify({
        "status": "success",
        "data": data
    }), status_code
This keeps all successful responses in the same format.

Step 3: Update the GET route
Replace:

return jsonify(courses)
with:

return make_response_json(courses, 200)
Step 4: Update the POST route
Replace the existing POST function with:

@courses_bp.route("/", methods=["POST"])
def add_course():
    data = request.get_json()

    if not data:
        return jsonify({"error": "Invalid JSON"}), 400

    required = ["name", "code", "credits"]

    for field in required:
        if field not in data:
            return jsonify({"error": f"{field} is required"}), 400

    course = {
        "id": len(courses) + 1,
        "name": data["name"],
        "code": data["code"],
        "credits": data["credits"]
    }

    courses.append(course)

    return make_response_json(course, 201)
This:

Reads JSON from the request.

Checks that name, code, and credits are present.

Creates a new course.

Returns 201 Created.

Step 5: Add GET by ID
Add:

@courses_bp.route("/<int:course_id>/", methods=["GET"])
def get_course(course_id):
    for course in courses:
        if course["id"] == course_id:
            return make_response_json(course, 200)

    return jsonify({"error": "Course not found"}), 404
Step 6: Add PUT (Update)
Add:

@courses_bp.route("/<int:course_id>/", methods=["PUT"])
def update_course(course_id):
    data = request.get_json()

    for course in courses:
        if course["id"] == course_id:
            course.update(data)
            return make_response_json(course, 200)

    return jsonify({"error": "Course not found"}), 404
Step 7: Add DELETE
Add:

@courses_bp.route("/<int:course_id>/", methods=["DELETE"])
def delete_course(course_id):
    for course in courses:
        if course["id"] == course_id:
            courses.remove(course)
            return make_response_json(
                {"message": "Course deleted"},
                200
            )

    return jsonify({"error": "Course not found"}), 404
Step 8: Open app.py
Open:

flask_coursemanager/
└── app.py
Step 9: Add JSON error handlers
Inside create_app(), after registering the blueprint, add:

@app.errorhandler(404)
def not_found(error):
    return jsonify({"error": "Resource not found"}), 404

@app.errorhandler(500)
def internal_error(error):
    return jsonify({"error": "Internal Server Error"}), 500
Step 10: Run the application
python app.py
Step 11: Test in Postman or Thunder Client
Get all courses
GET http://127.0.0.1:5000/api/courses/
Add a course
POST http://127.0.0.1:5000/api/courses/
Body (JSON):

{
    "name": "Python",
    "code": "CS101",
    "credits": 4
}
Expected:

{
    "status": "success",
    "data": {
        "id": 1,
        "name": "Python",
        "code": "CS101",
        "credits": 4
    }
}
Get course by ID
GET http://127.0.0.1:5000/api/courses/1/
Update course
PUT http://127.0.0.1:5000/api/courses/1/
Body:

{
    "name": "Advanced Python"
}
Delete course
DELETE http://127.0.0.1:5000/api/courses/1/
