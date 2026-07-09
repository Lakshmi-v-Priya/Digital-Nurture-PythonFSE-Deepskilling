import { Component, Input, Output, EventEmitter } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-course-card',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './course-card.html',
  styleUrl: './course-card.css'
})
export class CourseCardComponent {

  @Input() id = 0;
  @Input() name = '';
  @Input() code = '';
  @Input() credits = 0;
  @Input() grade = '';
  @Input() fee = 0;

  @Output() enroll = new EventEmitter<number>();

  enrollCourse() {
    this.enroll.emit(this.id);
  }
}