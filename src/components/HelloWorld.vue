<template>
  <div class="hello">
    <h1>{{ title }}</h1>
    <h3>{{ message }}</h3>
    <p>{{ joke }}</p>
    <p v-if="isRight" class="right">{{ name }}</p>
    <p v-else class="wrong">{{ name }}</p>
    <input
      autofocus
      v-on:input="click($event.target.value)"
      placeholder="Try it now.."
    />
    <div>
      <p class="quote">{{ quote }}</p>
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Prop, Vue } from "vue-property-decorator";
import { Dictionary } from "vue-router/types/router";
import jokes from "./jokes";
import i18n from "./i18n";
import nameOptions from "./nameOptions";
import dani from "./dani";
import familia from "./familia";

@Component
export default class HelloWorld extends Vue {
  @Prop({ required: true }) readonly language!: string;

  public name = this.getDefaultName();
  public currentJoke = "";
  public joke = "";
  public isRight = true;
  public names: Array<string> = nameOptions;
  public mensages: Dictionary<string> =
    this.language == "pt" ? i18n.pt : i18n.en;
  public myJokes: Dictionary<Array<string>> =
    this.language == "pt" ? jokes.pt : jokes.en;

  public click(value: string) {
    const valueTest = value.trim();
    this.isRight = this.names.some(n => n.includes(valueTest.toLowerCase()));
    this.name = value;
    if (valueTest === "") {
      this.name = this.getDefaultName();
    }
    this.joke = this.getJoke();
  }

  get title() {
    return this.mensages.title;
  }

  get message() {
    return this.mensages.message;
  }

  get quote() {
    const ptbr = '"Meu nome não é johnny"';
    const enus = '"My Name Ain\'t Johnny"';
    return this.language === "pt" ? ptbr : enus;
  }

  private getJoke() {
    if (dani.includes(this.name.toLowerCase())) {
      this.isRight = true;
      return "💕 Só da Daniela Cavalheiro! 💕";
    }

    if (familia.includes(this.name.toLowerCase())) {
      this.isRight = true;
      return "💕 Só da minha família! 💕";
    }

    if (this.isRight) {
      return this.getRand(this.myJokes.right);
    }
    return this.getRand(this.myJokes.wrong);
  }

  private getRand(arr: Array<string>) {
    return arr[Math.floor(Math.random() * arr.length)];
  }

  private getDefaultName() {
    return "-------";
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

.quote {
  font-style: italic;
}
</style>
