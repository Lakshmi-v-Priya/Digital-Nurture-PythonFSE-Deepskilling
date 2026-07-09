<template>

<h2>Available Courses</h2>

<div

v-for="course in courses"

:key="course.id"

class="card"

>

<h3>{{course.name}}</h3>

<p>Code : {{course.code}}</p>

<p>Credits : {{course.credits}}</p>

<p>Grade : {{course.grade}}</p>

<button

@click="store.enroll(course)"

>

Enroll

</button>

</div>

</template>

<script setup>

import { useEnrollmentStore } from "../stores/enrollment";

const store = useEnrollmentStore();

const courses=[

{
id:1,
name:"Python Programming",
code:"CS101",
credits:4,
grade:"A"
},

{
id:2,
name:"Web Development",
code:"CS102",
credits:3,
grade:"A+"
},

{
id:3,
name:"Cloud Computing",
code:"CS103",
credits:4,
grade:"B+"
},

{
id:4,
name:"Database Management",
code:"CS104",
credits:3,
grade:"A"
},

{
id:5,
name:"Artificial Intelligence",
code:"CS105",
credits:5,
grade:"A+"
}

];

</script>

<style scoped>

.card{

padding:20px;

margin:20px;

border:1px solid gray;

border-radius:10px;

}

button{

padding:10px 20px;

cursor:pointer;

}

</style>