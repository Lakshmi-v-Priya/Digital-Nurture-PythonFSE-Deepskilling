// -----------------------------
// Axios Request Interceptor
// -----------------------------

axios.interceptors.request.use(config => {

    console.log("API Call Started:", config.url);

    return config;

});

// -----------------------------
// Axios API Function
// -----------------------------

async function apiFetch(){

    try{

        const response = await axios.get(

            "https://jsonplaceholder.typicode.com/posts",

            {
                params:{
                    userId:1
                },
                timeout:5000
            }

        );

        return response.data;

    }

    catch(error){

        throw error;

    }

}

// -----------------------------
// Load Posts
// -----------------------------

async function loadPosts(){

    const loading=document.getElementById("loading");

    const postsContainer=document.getElementById("posts");

    try{

        const posts=await apiFetch();

        loading.style.display="none";

        posts.forEach(post=>{

            const card=document.createElement("div");

            card.className="card";

            card.innerHTML=`

            <h3>${post.title}</h3>

            <p>${post.body}</p>

            `;

            postsContainer.appendChild(card);

        });

    }

    catch(error){

        loading.textContent="Unable to load posts.";

        console.error(error);

    }

}

loadPosts();

/*
=========================================
Fetch vs Axios

1. Fetch does NOT automatically parse JSON.
   Axios automatically parses JSON.

2. Fetch requires checking response.ok.
   Axios throws errors automatically for
   non-2xx responses.

3. Fetch is built into browsers.
   Axios is an external library with
   interceptors, timeout and request config.
=========================================
*/