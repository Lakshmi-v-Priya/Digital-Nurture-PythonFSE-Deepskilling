<template>
  <div class="card">
    <h2>{{ course.name }}</h2>

    <p>Course Code : {{ course.code }}</p>

    <p>Credits : {{ course.credits }}</p>

    <p>Grade : {{ course.grade }}</p>
  </div>
</template>

<script setup>
defineProps({
  course: Object
});
</script>

<style scoped>
.card{
    background:white;
    padding:20px;
    margin:20px 0;
    border-radius:10px;
    box-shadow:0 5px 10px rgba(0,0,0,.2);
}
</style>