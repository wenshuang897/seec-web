<template>
  <div class="about">
    <h1>This is an about page</h1>
  </div>
</template>
<script>
import instance from "@/api/api"
export default {
  created(){
    instance.post("/acd").then(res=>{
      console.log(res.data)
    })
  }
}
</script>