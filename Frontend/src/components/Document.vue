<script setup>
import {ref} from 'vue'
import NavBar from '@/components/Nav.vue'
import Footer from '@/components/Footer.vue'
import {useRouter} from 'vue-router'
const route=useRouter().currentRoute._rawValue;
const documentId=route.params.id
</script>
<template>
    <NavBar></NavBar>
    <div class="main">
        <h1 class="text-center">Document Title</h1>
        {{ documentId}}
        {{ $route.params.id }}
        <iframe ></iframe>
        <div class="d-flex gap-2 justify-content-center"><button class="btn btn-success">Read</button>
        <button class="btn btn-info">Update</button>
        <button class="btn btn-danger">Delete</button></div>
        
    </div>
    <Footer></Footer>
</template>