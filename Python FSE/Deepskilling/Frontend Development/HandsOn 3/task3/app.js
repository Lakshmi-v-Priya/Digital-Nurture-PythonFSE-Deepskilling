import { courses } from "./data.js";

const courseGrid = document.querySelector(".course-grid");
const totalCredits = document.getElementById("total-credits");
const searchInput = document.getElementById("search-courses");
const sortButton = document.getElementById("sort-btn");
const selectedCourse = document.getElementById("selected-course");

let displayedCourses = [...courses];

// Render Courses
function renderCourses(courseList){

    courseGrid.innerHTML = "";

    let credits = 0;

    courseList.forEach(course=>{

        credits += course.credits;

        const article = document.createElement("article");

        article.className="course-card";

        article.dataset.id=course.id;

        article.innerHTML=`

        <h3>${course.name}</h3>

        <p>Course Code : ${course.code}</p>

        <p>Credits : ${course.credits}</p>

        <p>Grade : ${course.grade}</p>

        `;

        courseGrid.appendChild(article);

    });

    totalCredits.textContent=`Total Credits : ${credits}`;

}

// Initial Render
renderCourses(displayedCourses);

// Search
searchInput.addEventListener("input",()=>{

    const text=searchInput.value.toLowerCase();

    const filtered=courses.filter(course=>

        course.name.toLowerCase().includes(text)

    );

    displayedCourses=filtered;

    renderCourses(displayedCourses);

});

// Sort

sortButton.addEventListener("click",()=>{

    displayedCourses.sort((a,b)=>b.credits-a.credits);

    renderCourses(displayedCourses);

});

// Event Delegation

courseGrid.addEventListener("click",(event)=>{

    const card=event.target.closest(".course-card");

    if(!card) return;

    const id=Number(card.dataset.id);

    const course=courses.find(c=>c.id===id);

    selectedCourse.textContent=
    `Selected Course : ${course.name} | Grade : ${course.grade}`;

});