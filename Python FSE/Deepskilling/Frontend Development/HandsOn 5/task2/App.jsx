import { useState } from "react";

import "./App.css";

import Header from "./components/Header";
import Hero from "./components/Hero";
import Footer from "./components/Footer";
import CourseCard from "./components/CourseCard";

import courseData from "./data/courses";

function App(){

const [courses]=useState(courseData);

const [searchTerm,setSearchTerm]=useState("");

const [enrolledCourses,setEnrolledCourses]=useState([]);

const handleEnroll=(id)=>{

const selected=courses.find(course=>course.id===id);

if(selected && !enrolledCourses.some(course=>course.id===id)){

setEnrolledCourses([...enrolledCourses,selected]);

}

};

const filteredCourses=courses.filter(course=>

course.name.toLowerCase().includes(

searchTerm.toLowerCase()

)

);

return(

<>

<Header enrolledCount={enrolledCourses.length}/>

<Hero/>

<div className="search-box">

<input

type="text"

placeholder="Search Courses..."

value={searchTerm}

onChange={(e)=>setSearchTerm(e.target.value)}

/>

</div>

<div className="course-grid">

{

filteredCourses.map(course=>

<CourseCard

key={course.id}

{...course}

onEnroll={handleEnroll}

/>

)

}

</div>

<Footer/>

</>

);

}

export default App;