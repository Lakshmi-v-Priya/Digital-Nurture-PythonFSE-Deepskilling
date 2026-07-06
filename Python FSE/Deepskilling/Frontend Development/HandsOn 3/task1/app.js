import { courses } from "./data.js";

console.log("===== All Courses =====");

courses.forEach(({ name, credits }) => {
    console.log(`${name} - ${credits} Credits`);
});

console.log("\n===== map() =====");

const formattedCourses = courses.map(course =>
    `${course.code} — ${course.name} (${course.credits} credits)`
);

console.log(formattedCourses);

console.log("\n===== filter() =====");

const highCreditCourses = courses.filter(course => course.credits >= 4);

console.log(highCreditCourses);

console.log("Total High Credit Courses:", highCreditCourses.length);

console.log("\n===== reduce() =====");

const totalCredits = courses.reduce(
    (sum, course) => sum + course.credits,
    0
);

console.log("Total Credits:", totalCredits);

console.log("\n===== Arrow Function =====");

courses.forEach(course =>
    console.log(`${course.name} Grade : ${course.grade}`)
);