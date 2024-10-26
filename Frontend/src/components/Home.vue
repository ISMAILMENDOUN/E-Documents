<script setup lang="ts">

import { ref, onMounted, reactive } from 'vue'
import axios from 'axios';
import { useRouter } from 'vue-router'
import NavBar from '@/components/Nav.vue'
import Footer from '@/components/Footer.vue'
const data = reactive({ user: ref('') });
const router = useRouter();
onMounted( async()=>{
  
  try {
    await axios.get('/api/user').then(response => {
      //console.log(response.data)
      localStorage.setItem('user', JSON.stringify(response.data));
      data.user = JSON.parse(localStorage.getItem("user"));
      
    });
  }
  catch (err) {
    //alert(err)
  }
}
  

);

/***logout function */
const logout = async () => {
  try {
   localStorage.removeItem("users");
    localStorage.removeItem("user");
    //await axios.post('/api/logout', { headers: {'Authorization': localStorage.getItem("cookie") }, withCredentials: true, }).then(response => {
    //alert("removed")
    // }
    //);
    await axios.post('/api/logout').then(
      response => {
        //localStorage.removeItem("users");
    //localStorage.removeItem("user");
      }
    );
    router.push('/login');
  }
  catch (err) {
    // alert(err)
  }
}
/***get the cookie ***/
async function getCookie(name: string) {
  await axios.get('/sanctum/csrf-cookie', { withCredentials: true });
  const cookie = document.cookie.split("; ").find(item => item.startsWith(`${name}=`));
  if (!cookie) {
    return null
  }
  else { return decodeURIComponent(cookie.split("=")[1]); }
}

</script>
<template>
  <NavBar />

  <div class="main ps-5 pe-0 row mb-5 gap-1">
    <div v-if="data.user !== null&&data.user!=''" class="userHome">Welcome {{ data.user["name"] }} <button @click="logout()">Logout</button>
    </div>

    <img src="C:\Users\ISMAIL\Desktop\E-Documents\Frontend\src\assets\splash.jpg" alt="" class="w-50 h-25 imgDocs ">

    <div class="h-25 w-25 mt-lg-5 eDocs">



      <h1>E-Docs</h1>
      <div class="violet">
        <p>Welcome To E-Docs</p>
      </div>
      <div>
        <p>E-Docs is plateforme to:<br><span>Share</span> E-Documents <span>Read</span> and
          <span>Download</span>
          them.
        </p>
      </div>
      <div class="d-flex gap-1">
        <router-link to="/login" class="btn btn-success btn-violet">Login</router-link>
        <router-link to="/register" class="btn btn-success btn-violet">Register</router-link>
      </div>
    </div>

  </div>


  <Footer></Footer>
</template>

<style>
span {

  color: #1F7194;
  font-weight: bold;
}
</style>
