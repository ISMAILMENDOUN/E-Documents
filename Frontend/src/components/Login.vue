
<script setup lang="ts">
import {ref, onMounted,watch,reactive} from 'vue'
import axios from 'axios';
import {useRouter} from 'vue-router';
import NavBar from '@/components/Nav.vue';
import Footer from '@/components/Footer.vue';

var test=ref('');
const email=ref('');
const password=ref('');
const router =useRouter();
const data=reactive({errorsEmail:ref(''),
errorsPass:ref('')});

if(
  localStorage.getItem("user")!==null){

  router.push('/'); 
}
const handleLogin=async()=>{
try{
  //alert(email.value)
  //alert(password.value)
 await axios.get('/sanctum/csrf-cookie').then(async response=>{
 localStorage.setItem("cookie",getCookie('XSRF-TOKEN'));
  //alert(localStorage.getItem("cookie"));
  await axios.post('/api/login',{
    email:email.value,
    password:password.value,
    remember:false,
  },{headers:{accept:'application/json','X-XSRF-TOKEN':localStorage.getItem("cookie")},withCredentials:true,}).then(response=>{
    console.log(response.data);
    if(response.data=="Logged"){
      router.push("/")
    }

  } 
  
  ).catch(function (error){

data.errorsEmail=error.response.data.errors.email;
data.errorsPass=error.response.data.errors.password;

  });
}); 
  
}
  catch(err){  
    

      //console.log(er)
    //alert(err)
  }
 
   
}
function getCookie(name:string){

const cookie=document.cookie.split(";").find(item =>item.startsWith(`${name}=`));
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
 <form action="" class="w-50 px-5 py-0 py-lg-3 mt-0 mt-lg-5">
  <label for="" class="h1 d-flex justify-content-center">Login</label>
  <div class="from-group">
    <label for="" class="form-title">E-Mail</label>
    <input  type="email" class="form-control" placeholder="E-Mail" v-model="email">
  </div><br>
  <div class="from-group">
    <label for="" class="form-title">Password</label>
    <input  type="password" class="form-control" placeholder="Password" v-model="password">
  </div><br>
  <div id="errors" class="alert alert-danger" v-if="data.errorsEmail">{{ data.errorsEmail[0] }}</div>
  <div id="errors" class="alert alert-danger" v-if="data.errorsPass">{{ data.errorsPass[0] }}</div>
  <div class="d-flex justify-content-center"><button type="button" class="btn btn-primary btn-violet" @click="handleLogin">Login</button>&nbsp;<span>Or</span> &nbsp;<router-link to="/register" class="loginRegisterLink">Register</router-link></div>
</form>
        
 
  </div>
  <Footer></Footer>  
</template>
<script lang="ts">

/** axios*/
//var a ;
//var b;
//import axios from 'axios'
//import httpApi from '@/axiosInstance/axiosInstance'
//export default {
  /*data() {
    return {
      a:''
    }
  },
  mounted() {
    axios.get('/sanctum/csrf-cookie').then(response => {
    axios
      .get('http://127.0.0.1:8000/api/test')
      .then((response) => {
        this.a=response.data[0];
        console.log(a);
      })});
      return a;
  }*/


  //data() {
   // return {
   //   email: '',
   //   password: '',
    
   // }
 // },
  //methods: {

    
   // async login() {
      /*
      const data = {
        email: this.email,
        password: this.password,
      }
      axios.get('http://127.0.0.1:8000/sanctum/csrf-cookie').then(response => {
       
    console.log(response.data)


      axios
        .post('http://127.0.0.1:8000/login', data)
        .then((res) => {
          console.log(res)
          /*const userData = res.data
          userData.user.token = userData.token
          this.$store.commit('setUserDetails', userData.user)
          this.$toasted.show('You have logged in successfully', {
            position: 'top-center',
            duration: 500,
            type: 'success',
          })
          this.$router.push('/')*/
        /*})
        .catch((err) => {
          console.log(err)
        })
      });
















    */
  // const getToken=async()=>{
   // await axios.get('/sanctum/csrf-cookie');
  // }
  // const login =async()=>{
  //  await getToken();
  //  await axios.post("http://127.0.0.1:8000/login",{
     // email,
     // password,
  //  });
  // };
  
  //},
    
  //},

/*** ***/  
//}

</script>

