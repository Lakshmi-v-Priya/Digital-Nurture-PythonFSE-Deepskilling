<template>

<h2>Available Courses</h2>

<ul>

<li
v-for="course in courses"
:key="course.id"
>

<RouterLink :to="'/courses/'+course.id">

{{course.name}}

</RouterLink>

</li>

</ul>

</template>

<script setup>

import { RouterLink } from "vue-router";

const courses=[

{id:1,name:"Python Programming"},

{id:2,name:"Web Development"},

{id:3,name:"Cloud Computing"}

];

</script>