<template>
  <div class="hello">
    <h1>Bem-vindo ao Meu Nome!</h1> 
    <h3>This is your chance to learn my name and my nicknames! ;)</h3>
    <input v-on:input="click($event.target.value)" placeholder="Try it now..">
    
    <p v-if="isRight" class="right">{{ name }}</p>
    <p v-else class="wrong">{{ name }}</p>    
  </div>
</template>

<script lang="ts">
import { Component, Prop, Vue } from "vue-property-decorator";
import { Dictionary } from 'vue-router/types/router';

@Component
export default class HelloWorld extends Vue {
  @Prop({required: true}) readonly language!: string
  
  public name = ""
  public isRight = false
  public names: Array<string> = ["jonatha", "johns", "johns", "jonny"]
  public i18n: Dictionary<Dictionary<string>> = {
    pt: {
      title: "Bem-vindo ao Meu Nome!",
      message: "Essa é sua chance de aprender o meu nome e meus apelidos! :)",
    },
    en: {
      title: "Welcome to My Name!",
      message: "This is your chance to learn my name and my nicknames! ;)",
    }
  }

  public click(value: string){
    const valueTest = value.trim()
    this.isRight = this.names.some((n) => n.includes(valueTest.toLowerCase()))
    this.name = value
  }

  get lang(){
    return this.i18n[this.language]
  }
}
  
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
.right {
  font-size: 30px;
  font-weight: bold;
  color: green;
}
.wrong {
  font-size: 30px;
  font-weight: bold;
  color: red;
}
</style>
