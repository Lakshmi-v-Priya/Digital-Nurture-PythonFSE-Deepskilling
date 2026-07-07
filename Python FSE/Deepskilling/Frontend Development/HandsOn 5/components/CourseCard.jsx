function CourseCard({ name, code, credits }) {
    return (
        <div className="card">
            <h3>{name}</h3>
            <p>Course Code: {code}</p>
            <p>Credits: {credits}</p>
        </div>
    );
}

export default CourseCard;