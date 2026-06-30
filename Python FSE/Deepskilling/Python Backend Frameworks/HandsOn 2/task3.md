## Handson 2 
# Task 3: Django Admin Interface

```
Create a Superuser

Run:

python manage.py createsuperuser

Enter the following details:

Username: admin
Email: admin@college.edu
Password: Admin@123
Password (again): Admin@123

If the password is considered too common, Django may ask:

Bypass password validation and create user anyway? [y/N]

Type:
y
```



courses/admin.py

```
from django.contrib import admin
from .models import Department, Course, Student, Enrollment


@admin.register(Course)
class CourseAdmin(admin.ModelAdmin):
    list_display = ["name", "code", "credits", "department"]
    search_fields = ["name", "code"]
    list_filter = ["department"]


admin.site.register(Department)
admin.site.register(Student)
admin.site.register(Enrollment)
```

# output :

<img width="1918" height="1021" alt="image" src="https://github.com/user-attachments/assets/3778d1d7-6da2-4e7b-a973-978060a6f1bc" />

<img width="1918" height="1023" alt="image" src="https://github.com/user-attachments/assets/834d9280-c416-420d-872c-467dc4238529" />
