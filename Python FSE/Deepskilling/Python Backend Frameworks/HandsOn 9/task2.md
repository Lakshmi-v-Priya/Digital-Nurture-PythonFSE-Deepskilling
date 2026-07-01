Generate JWT tokens, protect API endpoints, and configure CORS.

Step 1: Create the Login API
Create:

POST /api/v1/auth/login/
Step 2: Accept login credentials
The endpoint should accept:

Email

Password

Step 3: Verify the password
Use:

verify_password()
to compare the entered password with the stored hashed password.

Step 4: Generate a JWT token
If the login is successful:

Create a JWT token using python-jose.

Set the token expiry to 30 minutes.

Return:

{
  "access_token": "<jwt_token>",
  "token_type": "bearer"
}
Step 5: Create get_current_user()
Create a dependency:

get_current_user()
This should:

Read the JWT token.

Decode it.

Validate it.

Return the logged-in user.

If the token is invalid or expired:

401 Unauthorized
Step 6: Protect API endpoints
Protect these endpoints:

POST /api/v1/courses/
DELETE /api/v1/courses/{id}/
Require:

current_user = Depends(get_current_user)
Step 7: Test protected routes
Without a JWT token:

POST /api/v1/courses/
Expected:

401 Unauthorized
With a valid JWT token:

POST /api/v1/courses/
Expected:

201 Created
Step 8: Configure CORS
Allow requests from your frontend:

http://localhost:3000
Use the appropriate package based on your framework:

FastAPI: CORSMiddleware

Flask: flask-cors

Django: django-cors-headers

Step 9: Add comments about OAuth2
In your code, explain:

OAuth2 Authorization Code Flow is used for third-party login (Google, GitHub, Microsoft, etc.).

JWT Login is a simpler authentication method where your application directly issues and validates the token.

Step 10: Test the APIs
Register
POST /api/v1/auth/register/
Login
POST /api/v1/auth/login/
Get courses (public)
GET /api/v1/courses/
Create course (protected)
POST /api/v1/courses/
Delete course (protected)
DELETE /api/v1/courses/1/
