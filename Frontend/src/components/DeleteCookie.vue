
<script setup>
function deleteCookie(){

    localStorage.clear();
    alert("deleted");

}
</script>
<template>
    <button @click="deleteCookie()">Delete Cookie</button>
</template>      