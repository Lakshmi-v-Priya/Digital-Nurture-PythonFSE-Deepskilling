import "./App.css";

import Header from "./components/Header";
import Hero from "./components/Hero";
import CourseCard from "./components/CourseCard";
import Footer from "./components/Footer";

function App() {

    const courses = [
        {
            id: 1,
            name: "Python Programming",
            code: "CS101",
            credits: 4
        },
        {
            id: 2,
            name: "Web Development",
            code: "CS102",
            credits: 3
        },
        {
            id: 3,
            name: "Cloud Computing",
            code: "CS103",
            credits: 4
        }
    ];

    return (
        <>
            <Header />

            <Hero />

            <div className="course-grid">
                {courses.map(course => (
                    <CourseCard
                        key={course.id}
                        name={course.name}
                        code={course.code}
                        credits={course.credits}
                    />
                ))}
            </div>

            <Footer />
        </>
    );
}

export default App;