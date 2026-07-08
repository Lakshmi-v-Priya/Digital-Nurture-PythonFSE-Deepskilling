import courses from "../data/courses";
import CourseCard from "../components/CourseCard";

function CoursesPage(){

return(

<div className="course-grid">

{

courses.map(course=>

<CourseCard

key={course.id}

{...course}

/>

)

}

</div>

);

}

export default CoursesPage;