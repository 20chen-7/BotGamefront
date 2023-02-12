<template>
  <div>
    <NavBar />
  </div>
  <router-view></router-view>
</template>
<script>
import NavBar from './components/NavBar.vue'
import "bootstrap/dist/css/bootstrap.min.css"
import "bootstrap/dist/js/bootstrap"
// import $ from "jquery"
export default{
  components: {
    NavBar
  },
  setup(){
    // $.ajax({
    //   url: "http://localhost:3000/user/account/token/",
    //   type: "post",
    //   data: {
    //     username: 'gyf',
    //     password: 'gyf1',
    //   },
    //   success(resp){
    //     console.log(resp);
    //   },
    //   error(resp){
    //     console.log(resp);
    //   }
    // });
    // $.ajax({
    //   url: "http://localhost:3000/user/account/info/",
    //   type: "get",
    //   headers: {
    //     Authorization: "Bearer " + "eyJhbGciOiJIUzI1NiJ9.eyJqdGkiOiJjMjVjMDViYTFhNGY0M…jEyfQ.VBDmppi7k-UHPgn1-_Mx14YJrUumQ0Kcxp-P00ARAjM",
    //   },
    //   success(resp){
    //     console.log(resp);
    //   },
    //   error(resp){
    //     console.log(resp);
    //   }
    // })
    // $.ajax({
    //   url: "http://localhost:3000/user/account/register/",
    //   type: "post",
    //   data: {
    //     username: 'cxy2',
    //     password: 'cxy3',
    //     confirmedPassword: 'cxy3',
    //   },
    //   success(resp){
    //     console.log(resp);
    //   },
    //   error(resp){
    //     console.log(resp);
    //   }
    // })
  }
}
</script>
<style>
body{
  background-image: url("@/assets/images/background.jpg");
  background-size: cover;
}
</style>