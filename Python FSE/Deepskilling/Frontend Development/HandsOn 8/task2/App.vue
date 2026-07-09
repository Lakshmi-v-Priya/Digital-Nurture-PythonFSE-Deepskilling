<template>

<header>

<h1>Student Portal</h1>

<nav>

<RouterLink to="/">Home</RouterLink>

<RouterLink to="/courses">Courses</RouterLink>

<RouterLink to="/profile">Profile</RouterLink>

</nav>

</header>

<hr>

<RouterView />

</template>

<script setup>

import { RouterLink, RouterView } from "vue-router";

</script>

<style>

nav{

display:flex;

gap:20px;

margin:20px;

}

a{

text-decoration:none;

font-weight:bold;

}

</style>