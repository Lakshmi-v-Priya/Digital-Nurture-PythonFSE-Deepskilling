## HTML CODE : 

```
<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Student Portal</title>

    <link rel="stylesheet" href="styles.css">
</head>

<body>

    <header>

        <h2 class="logo">Student Portal</h2>

        <nav>
            <ul>
                <li><a href="#">Home</a></li>
                <li><a href="#">Courses</a></li>
                <li><a href="#">Profile</a></li>
                <li><a href="#">Grades</a></li>
            </ul>
        </nav>

    </header>

    <main>

        <section id="hero">

            <h1>Welcome to the Student Portal</h1>

            <p>
                Access your profile, courses, grades and notifications in one place.
            </p>

            <button>Explore Courses</button>

        </section>

        <!-- Student Statistics -->

        <section class="stats">

            <div class="stat-item">
                <h3>3</h3>
                <p>Courses Enrolled</p>
            </div>

            <div class="stat-item">
                <h3>3.8</h3>
                <p>GPA</p>
            </div>

            <div class="stat-item">
                <h3>6</h3>
                <p>Semester</p>
            </div>

        </section>

        <section id="courses">

            <h2>Available Courses</h2>

            <article class="course-card">
                <h3>Python Programming</h3>
                <p>Learn Python Programming from beginner to advanced.</p>
                <span>Credits : 4</span>
            </article>

            <article class="course-card">
                <h3>Web Development</h3>
                <p>Learn HTML, CSS and JavaScript.</p>
                <span>Credits : 3</span>
            </article>

            <article class="course-card">
                <h3>Database Management</h3>
                <p>Learn SQL and Database Design.</p>
                <span>Credits : 4</span>
            </article>

        </section>

    </main>

    <footer>

        <p>&copy; 2026 Student Portal. All Rights Reserved.</p>

    </footer>

</body>

</html>
```

## css code

```
/* Reset */

*{
    margin:0;
    padding:0;
    box-sizing:border-box;
}

/* Body */

body{
    font-family:Arial, Helvetica, sans-serif;
    background:#f4f4f4;
    color:#333;
}

/* Header */

header{
    background:#1e3a8a;
    color:white;
    display:flex;
    justify-content:space-between;
    align-items:center;
    padding:20px 50px;
}

.logo{
    font-size:28px;
}

/* Navigation */

nav{
    display:flex;
}

nav ul{
    list-style:none;
    display:flex;
    gap:25px;
    align-items:center;
}

nav ul li a{
    text-decoration:none;
    color:white;
    font-weight:bold;
}

nav ul li a:hover{
    color:gold;
}

/* Hero Section */

#hero{
    display:flex;
    flex-direction:column;
    justify-content:center;
    align-items:center;
    text-align:center;
    padding:80px 20px;
    background:white;
}

#hero h1{
    margin-bottom:20px;
}

#hero p{
    margin-bottom:25px;
    max-width:700px;
    line-height:1.6;
}

#hero button{
    padding:12px 30px;
    background:#1e3a8a;
    color:white;
    border:none;
    border-radius:5px;
    cursor:pointer;
}

#hero button:hover{
    background:#163172;
}

/* Student Statistics */

.stats{
    display:flex;
    justify-content:space-evenly;
    align-items:center;
    background:#ffffff;
    padding:30px;
    margin:30px;
    border-radius:10px;
    box-shadow:0 5px 15px rgba(0,0,0,.1);
}

.stat-item{
    text-align:center;
    flex:1;
}

.stat-item h3{
    color:#1e3a8a;
    font-size:32px;
}

.stat-item p{
    margin-top:10px;
}

/* Courses */

#courses{
    padding:40px;
}

#courses h2{
    text-align:center;
    margin-bottom:30px;
}

.course-card{
    background:white;
    padding:20px;
    margin-bottom:20px;
    border-radius:10px;
    box-shadow:0 5px 10px rgba(0,0,0,.15);
}

.course-card h3{
    margin-bottom:15px;
}

.course-card p{
    margin-bottom:15px;
}

.course-card span{
    font-weight:bold;
    color:#1e3a8a;
}

/* Footer */

footer{
    text-align:center;
    background:#1e3a8a;
    color:white;
    padding:20px;
    margin-top:40px;
}
```

<img width="1917" height="815" alt="image" src="https://github.com/user-attachments/assets/f449df5f-e1ea-4250-8e1a-4855c0a6e9d3" />
