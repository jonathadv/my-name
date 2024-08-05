<template>
  <div class="home">
    <img alt="logo" src="../assets/logo.jpg" width="160px" />
    <HelloWorld language="en" />
  </div>
</template>

<script>
// @ is an alias to /src
import HelloWorld from "@/components/HelloWorld.vue";

export default {
  name: "English",
  components: {
    HelloWorld
  }
};
</script>
