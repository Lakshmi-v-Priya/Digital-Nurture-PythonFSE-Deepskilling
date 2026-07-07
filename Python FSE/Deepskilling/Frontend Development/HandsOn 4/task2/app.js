const loading = document.getElementById("loading");
const list = document.getElementById("notification-list");
const errorMessage = document.getElementById("error-message");
const retryButton = document.getElementById("retry-btn");

// ----------------------
// Reusable Fetch Function
// ----------------------

async function apiFetch(url){

    const response = await fetch(url);

    if(!response.ok){

        throw new Error("Unable to load notifications.");

    }

    return await response.json();

}

// ----------------------
// Load Notifications
// ----------------------

async function loadNotifications(){

    loading.style.display="block";

    list.innerHTML="";

    errorMessage.textContent="";

    retryButton.style.display="none";

    try{

        const posts = await apiFetch(
            "https://jsonplaceholder.typicode.com/posts?_limit=10"
        );

        loading.style.display="none";

        posts.forEach(post=>{

            const card=document.createElement("div");

            card.className="card";

            card.innerHTML=`

            <h3>${post.title}</h3>

            <p>${post.body}</p>

            `;

            list.appendChild(card);

        });

    }

    catch(error){

        loading.style.display="none";

        errorMessage.textContent=error.message;

        retryButton.style.display="block";

    }

}

// Initial Load

loadNotifications();

// Retry Button

retryButton.addEventListener("click",loadNotifications);