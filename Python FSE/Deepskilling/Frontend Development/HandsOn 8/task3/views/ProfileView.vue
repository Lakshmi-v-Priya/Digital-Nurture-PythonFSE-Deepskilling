<template>

<h2>My Courses</h2>

<div

v-if="store.enrolledCourses.length"

>

<div

v-for="course in store.enrolledCourses"

:key="course.id"

class="card"

>

<h3>{{course.name}}</h3>

<p>{{course.code}}</p>

<p>{{course.credits}} Credits</p>

<button

@click="store.unenroll(course.id)"

>

Remove

</button>

</div>

<h3>

Total Credits :

{{store.totalCredits}}

</h3>

</div>

<h3

v-else

>

No Courses Enrolled

</h3>

</template>

<script setup>

import { useEnrollmentStore } from "../stores/enrollment";

const store = useEnrollmentStore();

</script>

<style scoped>

.card{

padding:20px;

margin:20px;

border:1px solid gray;

}

</style>