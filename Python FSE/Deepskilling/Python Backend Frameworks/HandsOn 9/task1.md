Implement secure password storage using bcrypt hashing and create a user registration API.

Step 1: Install the required packages
Open the terminal and run:

pip install python-jose[cryptography] passlib[bcrypt] python-multipart
Step 2: Create a User model
Create or update your models.py and add a User model with these fields:

id

email (unique)

hashed_password

is_active

Step 3: Create security.py
Create a new file:

security.py
Step 4: Create a password hashing function
In security.py, use passlib with the bcrypt algorithm.

Implement:

get_password_hash(password: str)
This function should return the hashed password.

Step 5: Create a password verification function
In the same file, implement:

verify_password(plain_password, hashed_password)
This function compares the entered password with the stored hash.

Step 6: Create the Register API
Create the endpoint:

POST /api/v1/auth/register/
Step 7: Validate the email
Before creating a user:

Check that the email format is valid.

Check whether the email already exists.

If it already exists, return:

409 Conflict
Step 8: Hash the password
Instead of saving the plain password:

password
Save:

hashed_password
using:

get_password_hash(password)
Step 9: Save the user
Store the following in the database:

Email

Hashed Password

Active Status

Never save the plain password.

Step 10: Add a comment in the code
Write a comment explaining:

bcrypt is preferred because it is slow and resistant to brute-force attacks.

MD5 and SHA-256 are fast hashes and should not be used for password storage.

Step 11: Test the API
Using Postman:

POST

/api/v1/auth/register/
Example request:

{
  "email": "student@example.com",
  "password": "Admin@123"
}
Step 12: Verify the database
Check the database.

You should see:

Email:
student@example.com

Password:
$2b$12$....
Only the hashed password should be stored.
