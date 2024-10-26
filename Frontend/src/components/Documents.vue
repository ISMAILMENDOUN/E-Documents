<script setup>
import NavBar from '@/components/Nav.vue'
import Footer from '@/components/Footer.vue'
import { ref } from 'vue'
let items = ref([10, 20, 30, 40, 50, 60, 70, 80, 90, 100, 110, 120, 130, 140, 150, 160, 170]);
let i=0;
</script>


<template>



    <NavBar></NavBar>
    <div class="main ">
        <h1 class="text-center">Documents</h1>
        <div class="d-flex flex-row w-100 flex-wrap gap-3 justify-content-center">
             <div v-for="item in items " class="card w-25 col-6">
                <router-link :to="{name:'document',params:{'id':item}}" class="">
                <div class="card-body">
                    <img src="@/assets/E_Documents.png" class="card-img">

                    </img>

                </div>
                <div class="card-title">Document {{ i++ }}</div>
            </router-link>
            </div></div>
           
        
    </div>
    <Footer></Footer>
</template>