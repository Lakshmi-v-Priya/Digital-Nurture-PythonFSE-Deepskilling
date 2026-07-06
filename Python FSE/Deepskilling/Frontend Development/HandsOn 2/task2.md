## HTML code

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

    <div class="course-grid">

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

        <article class="course-card">
            <h3>Cloud Computing</h3>
            <p>Learn AWS, Azure and Google Cloud services.</p>
            <span>Credits : 4</span>
        </article>

        <article class="course-card">
            <h3>Artificial Intelligence</h3>
            <p>Learn Machine Learning and Deep Learning concepts.</p>
            <span>Credits : 5</span>
        </article>

    </div>

</section>

    </main>

    <footer>

        <p>&copy; 2026 Student Portal. All Rights Reserved.</p>

    </footer>

</body>

</html>
```

## CSS code

```
/* Courses */

#courses{
    padding:50px;
}

#courses h2{
    text-align:center;
    margin-bottom:40px;
}

/* Grid Layout */

.course-grid{
    display:grid;

    /* Responsive Grid */
    grid-template-columns:repeat(auto-fit,minmax(280px,1fr));

    gap:25px;
}

/* Course Card */

.course-card{

    background:white;

    padding:25px;

    border-radius:10px;

    min-height:220px;

    display:flex;

    flex-direction:column;

    justify-content:space-between;

    align-self:stretch;

    box-shadow:0 5px 15px rgba(0,0,0,.15);

    transition:.3s;
}

.course-card:hover{

    transform:translateY(-8px);

    box-shadow:0 12px 20px rgba(0,0,0,.2);

}

.course-card h3{

    margin-bottom:15px;

    color:#1e3a8a;

}

.course-card p{

    line-height:1.6;

    margin-bottom:20px;

}

.course-card span{

    font-weight:bold;

    color:#0f766e;

}
```

<img width="1915" height="967" alt="image" src="https://github.com/user-attachments/assets/cf297716-710a-4f5e-820f-fa137e49fd63" />

