## HTML code

```
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

<img width="1915" height="837" alt="image" src="https://github.com/user-attachments/assets/a8c016ea-c0ea-41f0-8488-12073028fea1" />
