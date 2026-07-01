Step 1: Update courses/views.py
Replace your previous APIView classes with:

from rest_framework import viewsets
from rest_framework.decorators import action
from rest_framework.response import Response

from .models import Course, Student, Enrollment
from .serializers import (
    CourseSerializer,
    StudentSerializer,
    EnrollmentSerializer
)


class CourseViewSet(viewsets.ModelViewSet):
    queryset = Course.objects.all()
    serializer_class = CourseSerializer

    @action(detail=True, methods=['get'])
    def students(self, request, pk=None):
        course = self.get_object()
        enrollments = Enrollment.objects.filter(course=course)
        students = [enrollment.student for enrollment in enrollments]
        serializer = StudentSerializer(students, many=True)
        return Response(serializer.data)


class StudentViewSet(viewsets.ModelViewSet):
    queryset = Student.objects.all()
    serializer_class = StudentSerializer


class EnrollmentViewSet(viewsets.ModelViewSet):
    queryset = Enrollment.objects.all()
    serializer_class = EnrollmentSerializer
Step 2: Update courses/urls.py
Replace the previous URL patterns with:

from django.urls import path, include
from rest_framework.routers import DefaultRouter
from .views import (
    CourseViewSet,
    StudentViewSet,
    EnrollmentViewSet
)

router = DefaultRouter()
router.register(r'courses', CourseViewSet)
router.register(r'students', StudentViewSet)
router.register(r'enrollments', EnrollmentViewSet)

urlpatterns = [
    path('', include(router.urls)),
]
Step 3: Check coursemanager/urls.py
from django.contrib import admin
from django.urls import path, include

urlpatterns = [
    path("admin/", admin.site.urls),
    path("api/", include("courses.urls")),
]
Step 4: Run the server
python manage.py runserver
Step 5: Test the endpoints
List all courses

GET http://127.0.0.1:8000/api/courses/
Get one course

GET http://127.0.0.1:8000/api/courses/1/
Create a course

POST http://127.0.0.1:8000/api/courses/
Update a course

PUT http://127.0.0.1:8000/api/courses/1/
Delete a course

DELETE http://127.0.0.1:8000/api/courses/1/
Get students enrolled in a course (custom action)

GET http://127.0.0.1:8000/api/courses/1/students/
