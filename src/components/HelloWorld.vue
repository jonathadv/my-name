<template>
  <div class="hello">
    <h1>{{title}}</h1> 
    <h3>{{message}}</h3>
    <p v-if="isRight" class="right">{{ name }}</p>
    <p v-else class="wrong">{{ name }}</p>    
    <input v-on:input="click($event.target.value)" placeholder="Try it now..">    
    
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
      message: "Esta é sua chance de provar que você sabe meu nome e apelidos corretamente! :)",
    },
    en: {
      title: "Welcome to My Name!",
      message: "This is your chance to prove you know my name and nicknames right! ;)",
    }
  }

  public click(value: string){
    const valueTest = value.trim()
    this.isRight = this.names.some((n) => n.includes(valueTest.toLowerCase()))
    this.name = value
  }

  get title(){
    return this.i18n[this.language].title
  }

  get message(){
    return this.i18n[this.language].message
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
