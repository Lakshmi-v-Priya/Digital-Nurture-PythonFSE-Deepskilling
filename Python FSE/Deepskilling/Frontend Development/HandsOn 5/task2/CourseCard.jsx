function CourseCard({

    id,
    name,
    code,
    credits,
    grade,
    onEnroll

}){

    return(

        <div className="card">

            <h3>{name}</h3>

            <p>Course Code : {code}</p>

            <p>Credits : {credits}</p>

            <p>Grade : {grade}</p>

            <button
            onClick={()=>onEnroll(id)}
            >
                Enroll
            </button>

        </div>

    );

}

export default CourseCard;