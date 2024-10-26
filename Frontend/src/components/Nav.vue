<script setup>

const x = '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 384 512"><!--!Font Awesome Free 6.6.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2024 Fonticons, Inc.--><path fill="#ffffff" d="M376.6 84.5c11.3-13.6 9.5-33.8-4.1-45.1s-33.8-9.5-45.1 4.1L192 206 56.6 43.5C45.3 29.9 25.1 28.1 11.5 39.4S-3.9 70.9 7.4 84.5L150.3 256 7.4 427.5c-11.3 13.6-9.5 33.8 4.1 45.1s33.8 9.5 45.1-4.1L192 306 327.4 468.5c11.3 13.6 31.5 15.4 45.1 4.1s15.4-31.5 4.1-45.1L233.7 256 376.6 84.5z"/></svg>';
const bar = '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"><!--!Font Awesome Free 6.6.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2024 Fonticons, Inc.--><path fill="#fff" d="M0 96C0 78.3 14.3 64 32 64l384 0c17.7 0 32 14.3 32 32s-14.3 32-32 32L32 128C14.3 128 0 113.7 0 96zM0 256c0-17.7 14.3-32 32-32l384 0c17.7 0 32 14.3 32 32s-14.3 32-32 32L32 288c-17.7 0-32-14.3-32-32zM448 416c0 17.7-14.3 32-32 32L32 448c-17.7 0-32-14.3-32-32s14.3-32 32-32l384 0c17.7 0 32 14.3 32 32z"/></svg>';
var a = 0;
function hideNav() {
   var hides = document.querySelectorAll(".hide");
   document.getElementById('svg').innerHTML = bar;
   hides.forEach(element => {
      if (element.style.display === "none") {

         element.style.display = "block";
         document.getElementById("svg").innerHTML = x;
         a = 1;
      } else {
         element.style.display = "none";
         document.getElementById("svg").innerHTML = bar;
         a = 0;
      }
   }


   );

   if (a == 1) {
      document.getElementById('nav').setAttribute('style', 'height:100%');
   }
   else {
      document.getElementById('nav').setAttribute('style', 'height:5rem');
   }


}
</script>
<template>
   <nav id="nav" class="d-flex flex-column flex-lg-row">
      <router-link id="home" class="hide d-lg-inline" to="/" style="display:none;"><i class="bi-house"></i>
         Home</router-link>
      <router-link class="hide d-lg-inline" to="/Documents" style="display:none;"><i class="bi-files"></i>
         Documents</router-link>
         <router-link class="hide d-lg-inline" to="/myDocuments" style="display:none;"><i class="bi-file-earmark-person"></i>
            My Documents</router-link>
         <router-link class="hide d-lg-inline" to="/users" style="display:none;"><i class="bi-people"></i>
            Users</router-link>
      <router-link class="hide d-lg-inline" to="/login" style="display:none;"><i class="bi bi-box-arrow-in-right"> </i>
         Login</router-link>
      <a id="svg" @click.native="hideNav()" v-html="bar"></a>
   </nav>

</template>