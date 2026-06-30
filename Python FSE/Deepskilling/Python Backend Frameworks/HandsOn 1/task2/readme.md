step 1
Installed Django

pip install django
Step 2

Create project

django-admin startproject coursemanager

This creates

coursemanager/
│
├── manage.py
├── coursemanager/
│      settings.py
│      urls.py
│      asgi.py
│      wsgi.py
│      __init__.py
Step 3

Open these files and write a one-line comment at the top.

settings.py
# Stores project configuration and installed apps.
urls.py
# Defines URL routes for the project.
wsgi.py
# WSGI entry point for synchronous deployment.
asgi.py
# ASGI entry point for asynchronous deployment.
