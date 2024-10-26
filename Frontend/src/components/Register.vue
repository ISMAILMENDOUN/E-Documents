<script setup lang="ts">
//alert(localStorage.getItem("cookie"))
import {ref} from 'vue';
import axios from 'axios';
import NavBar from '@/components/Nav.vue'
import Footer from '@/components/Footer.vue'
import {useRouter} from 'vue-router'
const router =useRouter();
const name=ref('')
const email=ref('')
const password=ref('')
const password_confirmation=ref('')
const handleRegistration=async()=>{
  try{
    //alert(name.value)
  //alert(email.value)
  //alert(password.value)
 // alert(password_confirmation.value)
await axios.get('/sanctum/csrf-cookie',{withCredentials:true});
await axios.post('/api/register',{
   name:name.value,
    email:email.value,
    password:password.value,
    password_confirmation:password_confirmation.value,
  },{headers:{accept:'application/json','X-XSRF-TOKEN':getCookie('XSRF-TOKEN')},withCredentials:true,}).then(response=>{
  //console.log(response.data)
  if(response.data=="Registred"){router.push('/login');}
  
  });
}
  catch(err){
  
  }
}

function getCookie(name:string){

const cookie=document.cookie.split("; ").find(item =>item.startsWith(`${name}=`));
  if(!cookie){
    return null
  }
  else {
    return decodeURIComponent(cookie.split("=")[1]);}
}
</script>
<template>
    <NavBar />
    <div class="main d-flex justify-content-center">
   <form action="" class="register w-50 px-5 py-0 py-lg-3 mt-0 mt-lg-5">
    <label for="" class="h1 d-flex justify-content-center">Register</label>
    <div class="from-group">
      <label for="" class="form-title">Name</label>
      <input  type="text" class="form-control" placeholder="Name" v-model="name">
    </div><br>
    <div class="from-group">
      <label for="" class="form-title">E-Mail</label>
      <input  type="email" class="form-control" placeholder="E-Mail" v-model="email">
    </div><br>
    <div class="from-group">
      <label for="" class="form-title">Password</label>
      <input  type="password" class="form-control" placeholder="Password" v-model="password">
    </div><br>
    <div class="from-group">
      <label for="" class="form-title">Confirm Password</label>
      <input  type="password" class="form-control" placeholder="Password" v-model="password_confirmation">
    </div><br>
    <div id="errors"></div>
    <div class="d-flex justify-content-center"><button type="button" class="btn btn-primary btn-violet" @click="handleRegistration">Register</button>&nbsp;<span>Or</span> &nbsp;<router-link to="/login" class="loginRegisterLink">Login</router-link></div>
  </form>
    
  
    </div>
    <Footer></Footer>
  </template>