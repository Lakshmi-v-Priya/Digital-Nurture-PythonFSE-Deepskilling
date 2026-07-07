import { courses } from "./data.js";

// ---------------------------
// Promise using then()
// ---------------------------

function fetchUser(id){

    return fetch(`https://jsonplaceholder.typicode.com/users/${id}`)
        .then(response => response.json())
        .then(user => {

            console.log("Promise User:", user.name);

            return user;

        });

}

fetchUser(1);

// ---------------------------
// async / await
// ---------------------------

async function fetchUserAsync(id){

    try{

        const response = await fetch(
            `https://jsonplaceholder.typicode.com/users/${id}`
        );

        const user = await response.json();

        console.log("Async User:", user.name);

    }

    catch(error){

        console.log(error);

    }

}

fetchUserAsync(2);

// ---------------------------
// Simulated Network Delay
// ---------------------------

function fetchAllCourses(){

    return new Promise(resolve=>{

        setTimeout(()=>{

            resolve(courses);

        },1000);

    });

}

const loading=document.getElementById("loading");

const grid=document.querySelector(".course-grid");

fetchAllCourses().then(data=>{

    loading.style.display="none";

    data.forEach(course=>{

        const card=document.createElement("article");

        card.className="course-card";

        card.innerHTML=`

        <h3>${course.name}</h3>

        <p>${course.code}</p>

        <p>Credits : ${course.credits}</p>

        `;

        grid.appendChild(card);

    });

});

// ---------------------------
// Promise.all()
// ---------------------------

Promise.all([

fetchUser(1),

fetchUser(2)

]).then(users=>{

console.log("Both Users Loaded");

users.forEach(user=>{

console.log(user.name);

});

});
