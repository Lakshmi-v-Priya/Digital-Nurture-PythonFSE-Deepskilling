<template>

<h2>Available Courses</h2>

<input
v-model="searchTerm"
placeholder="Search Course"
/>

<div
v-if="filteredCourses.length"
>

<CourseCard

v-for="course in filteredCourses"

:key="course.id"

:course="course"

/>

</div>

<h2 v-else>

No Courses Found

</h2>

</template>

<script setup>

import { ref, computed } from "vue";

import CourseCard from "./CourseCard.vue";

const searchTerm = ref("");

const courses = ref([

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

]);

const filteredCourses = computed(()=>

courses.value.filter(course=>

course.name

.toLowerCase()

.includes(

searchTerm.value.toLowerCase()

)

)

);

</script>

<style scoped>

input{

width:300px;

padding:12px;

display:block;

margin:20px auto;

font-size:16px;

}

</style>