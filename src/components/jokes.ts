import { Dictionary } from "vue-router/types/router";

const jokes: Dictionary<Dictionary<Array<string>>> = {
  pt: {
    right: ["Está indo bem...", "Aee...", "Boaa...", "Tá ótimo"],
    wrong: ["não!", "péera!!", "aiiii", "aff.", "Errrradoo!"]
  },
  en: {
    right: ["It's going well...", "Aeee!!", "Goooood", "So good!"],
    wrong: ["no!", "stoop!!", "Ouch!", "aff.", "Wrronnng!"]
  }
};

export default jokes;
