import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { CourseCardComponent } from '../course-card/course-card';

@Component({
  selector: 'app-course-list',
  standalone: true,
  imports: [
    CommonModule,
    FormsModule,
    CourseCardComponent
  ],
  templateUrl: './course-list.html',
  styleUrl: './course-list.css'
})
export class CourseListComponent {

  searchTerm='';

  enrolledCount=0;

  courses=[

  {
    id:1,
    name:'Python Programming',
    code:'CS101',
    credits:4,
    grade:'A',
    fee:25000
  },

  {
    id:2,
    name:'Web Development',
    code:'CS102',
    credits:3,
    grade:'A+',
    fee:20000
  },

  {
    id:3,
    name:'Cloud Computing',
    code:'CS103',
    credits:4,
    grade:'B+',
    fee:30000
  },

  {
    id:4,
    name:'Database Management',
    code:'CS104',
    credits:3,
    grade:'A',
    fee:22000
  },

  {
    id:5,
    name:'Artificial Intelligence',
    code:'CS105',
    credits:5,
    grade:'A+',
    fee:35000
  }

  ];

  get filteredCourses(){

    return this.courses.filter(course=>

    course.name.toLowerCase()

    .includes(this.searchTerm.toLowerCase())

    );

  }

  enrollStudent(id:number){

    this.enrolledCount++;

    alert("Enrolled Course ID : "+id);

  }

  trackByCourse(index:number,course:any){

    return course.id;

  }

}