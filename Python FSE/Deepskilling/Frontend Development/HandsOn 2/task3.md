## styles.css

```
/* ==========================
   CSS Reset
========================== */

*{
    margin:0;
    padding:0;
    box-sizing:border-box;
}

/* ==========================
   Body
========================== */

body{
    font-family:Arial, Helvetica, sans-serif;
    background:#f4f4f4;
    color:#333;
}

/* ==========================
   Header
========================== */

header{

    background:#1e3a8a;
    color:white;

    display:flex;
    flex-direction:column;
    align-items:center;

    padding:20px;

    gap:20px;
}

/* Fluid Typography */

.logo{

    font-size:clamp(1.5rem,3vw,2.5rem);

}

/* ==========================
   Navigation
========================== */

nav ul{

    list-style:none;

    display:flex;

    flex-direction:column;

    gap:15px;

    text-align:center;

}

nav ul li a{

    text-decoration:none;

    color:white;

    font-weight:bold;

}

nav ul li a:hover{

    color:gold;

}

/* ==========================
   Hero Section
========================== */

#hero{

    min-height:40vh;

    display:flex;

    flex-direction:column;

    justify-content:center;

    align-items:center;

    text-align:center;

    padding:40px 20px;

    background:white;

}

#hero h1{

    margin-bottom:20px;

}

#hero p{

    max-width:700px;

    margin-bottom:25px;

    line-height:1.6;

}

#hero button{

    padding:12px 30px;

    border:none;

    border-radius:5px;

    background:#1e3a8a;

    color:white;

    cursor:pointer;

}

#hero button:hover{

    background:#163172;

}

/* ==========================
   Student Stats
========================== */

.stats{

    display:flex;

    flex-direction:column;

    gap:20px;

    padding:25px;

    margin:20px;

    background:white;

    border-radius:10px;

    box-shadow:0 5px 15px rgba(0,0,0,.15);

}

.stat-item{

    text-align:center;

}

/* ==========================
   Courses
========================== */

#courses{

    padding:25px;

}

#courses h2{

    text-align:center;

    margin-bottom:30px;

}

.course-grid{

    display:grid;

    grid-template-columns:1fr;

    gap:20px;

}

.course-card{

    background:white;

    padding:20px;

    border-radius:10px;

    min-height:220px;

    display:flex;

    flex-direction:column;

    justify-content:space-between;

    box-shadow:0 5px 10px rgba(0,0,0,.15);

    transition:.3s;

}

.course-card:hover{

    transform:translateY(-5px);

}

.course-card h3{

    color:#1e3a8a;

    margin-bottom:15px;

}

.course-card p{

    margin-bottom:15px;

}

.course-card span{

    font-weight:bold;

    color:#0f766e;

}

/* ==========================
   Footer
========================== */

footer{

    text-align:center;

    padding:20px;

    background:#1e3a8a;

    color:white;

    margin-top:40px;

}

/* ==========================
   Tablet (768px)
========================== */

@media(min-width:768px){

header{

    flex-direction:row;

    justify-content:space-between;

}

nav ul{

    flex-direction:row;

}

.stats{

    flex-direction:row;

    justify-content:space-around;

}

.course-grid{

    grid-template-columns:repeat(2,1fr);

}

}

/* ==========================
   Desktop (1024px)
========================== */

@media(min-width:1024px){

#hero{

    padding:100px 20px;

}

.course-grid{

    grid-template-columns:repeat(3,1fr);

}

}
```

<img width="1918" height="960" alt="image" src="https://github.com/user-attachments/assets/92bbb6b1-86ea-4a63-a91f-c96f855c9868" />
