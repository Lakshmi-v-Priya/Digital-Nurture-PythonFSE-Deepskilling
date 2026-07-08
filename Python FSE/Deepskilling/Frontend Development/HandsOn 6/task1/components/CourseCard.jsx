import { useNavigate } from "react-router-dom";

function CourseCard({

id,
name,
code,
credits,
grade

}){

const navigate = useNavigate();

const handleEnroll=()=>{

alert("Enrolled Successfully!");

navigate("/profile");

};

return(

<div className="card">

<h3>{name}</h3>

<p>{code}</p>

<p>Credits : {credits}</p>

<p>Grade : {grade}</p>

<button onClick={()=>navigate(`/courses/${id}`)}>

View Details

</button>

<button onClick={handleEnroll}>

Enroll

</button>

</div>

);

}

export default CourseCard;
