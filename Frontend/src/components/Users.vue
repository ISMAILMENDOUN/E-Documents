<script setup>
import {ref,reactive,onMounted} from 'vue';
import NavBar from '@/components/Nav.vue'
import Footer from '@/components/Footer.vue'
import axios from 'axios'
const data=reactive({users:ref('')});
onMounted(async()=>{try{
axios.get('/api/users').then(
  response=>{

    localStorage.setItem('users', JSON.stringify(response.data));
  });
}
  catch(err){
    alert(err)
  }
data.users=JSON.parse(localStorage.getItem('users'));}



)

async function deleteUser(id){
  await axios.get('/sanctum/csrf-cookie',{withCredentials:true});
  await axios.delete('/api/deleteUser/'+id);
  alert("deleted");
  
  
}
</script>
<template>
    <NavBar></NavBar>
    <div class="main ">
        <div>
            <h1 class="text-center">Users</h1>
            <table class="table mt-5 mx-3">
              <thead><tr>
                    <th>Id</th>
                    <th>Last Name</th>
                    <th>First Name</th>
                    <th>Email</th>
                    <th>Action</th>
                </tr></thead>
                <tbody><tr v-for="user in data.users">
                <td>{{ user.id }}</td>
                <td>{{ user.name }}</td>
                <td>{{ user.name }}</td>
                <td>{{ user.email }}</td>
                <td><i class="bi-pen text-success"></i><a @click ="deleteUser(user.id)"><i class="bi-trash text-danger"></i></a></td>
              </tr></tbody>
              
              
            </table>
        </div>

    </div>
    <Footer></Footer>
</template>