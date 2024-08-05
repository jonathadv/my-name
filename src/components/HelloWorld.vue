<template>
  <div class="hello">
    <h2>{{ title }}</h2>
    <p class="msg">{{ message }}</p>
    <p class="joke">{{ joke }}</p>
    <p v-if="isRight" class="right">{{ name }}</p>
    <p v-else-if="isRight === null" class="special">{{ name }}</p>
    <p v-else class="wrong">{{ name }}</p>
    <input
      autofocus
      class="button"
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
import i18n from "./i18n";
import faces from "./faces";
import answersNames from "./answersNames";
import answers from "./answers";

@Component
export default class HelloWorld extends Vue {
  @Prop({ required: true }) readonly language!: string;

  public name = this.getDefaultName();
  public currentJoke = "";
  public joke = this.getDefaultJoke();
  public isRight: boolean | null = true;
  public names: Array<string> = answersNames;
  public mensages: Dictionary<string> =
    this.language == "pt" ? i18n.pt : i18n.en;
  public myfaces: Dictionary<Array<string>> = faces;

  public click(value: string) {
    const valueTest = value.trim();
    if (valueTest === " ") {
      return;
    }
    this.isRight = this.names.some(n => n.startsWith(valueTest.toLowerCase()));
    this.name = value;
    this.joke = this.getJoke();

    if (valueTest === "") {
      this.name = this.getDefaultName();
      this.joke = this.getDefaultJoke();
    }
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
    for (let i = 0; i < answers.length; i++) {
      if (answers[i][0] === this.name.toLowerCase()) {
        this.isRight = null;
        return answers[i][1] ? answers[i][1] : this.getRand(this.myfaces.right);
      }
    }

    if (this.isRight) {
      return this.getRand(this.myfaces.right);
    }
    return this.getRand(this.myfaces.wrong);
  }

  private getRand(arr: Array<string>) {
    return arr[Math.floor(Math.random() * arr.length)];
  }

  private getDefaultName() {
    return "-------";
  }

  private getDefaultJoke() {
    return "...";
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
h2 {
  margin: 10px 0 0;
}
p {
  margin: 10px;
}
a {
  color: #42b983;
}
.msg {
  font-weight: bold;
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

.special {
  font-size: 30px;
  font-weight: bold;
  color: blue;
}

.joke {
  font-size: 40px;
}

.quote {
  font-style: italic;
}

.button {
  box-sizing: border-box;
  color: rgb(73, 80, 87);
  flex-basis: auto;
  flex-grow: 1;
  flex-shrink: 1;
  font-family: sans-serif;
  font-size: 16px;
  font-weight: 400;
  line-height: 24px;
  margin-bottom: 0px;
  margin-left: 0px;
  margin-right: 0px;
  margin-top: 0px;
  overflow: visible;
  overflow-x: visible;
  overflow-y: visible;
  padding-bottom: 6px;
  padding-left: 12px;
  padding-right: 12px;
  padding-top: 6px;
  position: relative;
  text-align: center;
  transition-delay: 0s, 0s;
  transition-duration: 0.15s, 0.15s;
  transition-property: border-color, box-shadow;
  transition-timing-function: ease-in-out, ease-in-out;
}
</style>
