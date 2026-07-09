<template>

<h2>{{course.name}}</h2>

<p>ID : {{course.id}}</p>

<button @click="enroll">

Enroll

</button>

</template>

<script setup>

import { useRoute,useRouter } from "vue-router";

const route=useRoute();

const router=useRouter();

const courses=[

{id:1,name:"Python Programming"},

{id:2,name:"Web Development"},

{id:3,name:"Cloud Computing"}

];

const course=courses.find(

c=>c.id==route.params.id

);

function enroll(){

alert("Enrollment Successful");

router.push("/profile");

}

</script>