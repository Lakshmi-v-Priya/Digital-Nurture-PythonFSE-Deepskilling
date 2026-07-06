import { courses } from "./data.js";

// Select Grid
const courseGrid = document.querySelector(".course-grid");

// Total Credits
let totalCredits = 0;

// Loop through courses
courses.forEach(course => {

    totalCredits += course.credits;

    const article = document.createElement("article");

    article.className = "course-card";

    article.innerHTML = `
        <h3>${course.name}</h3>
        <p>Course Code : ${course.code}</p>
        <p>Credits : ${course.credits}</p>
        <p>Grade : ${course.grade}</p>
    `;

    courseGrid.appendChild(article);

});

// Update Total Credits

document.getElementById("total-credits").textContent =
`Total Credits : ${totalCredits}`;