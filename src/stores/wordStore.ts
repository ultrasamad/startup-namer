import { defineStore } from "pinia";
import randomWords from "random-words";
import type { Word } from "@/types/Word";

export const useWordsStore = defineStore("counter", {
  state: () => ({
    wordList: [] as Word[],
  }),
  getters: {
    favorites: (state) => state.wordList.filter((i) => i.favorited),
  },
  actions: {
    generateWords() {
      return new Promise((resolve, reject) => {
        const entries = randomWords({
          exactly: 30,
          formatter: (word) => word.toUpperCase(),
        }).map((item) => ({ name: item, favorited: false }));

        this.wordList = [...this.wordList, ...entries];

        if (entries.length) {
          resolve(resolve(this.wordList));
        } else {
          reject("Error generating words");
        }
      });
    },
    favoriteWord(name: string) {
      this.wordList = this.wordList.map((item) =>
        item.name === name ? { ...item, favorited: !item.favorited } : item
      );
    },
  },
});
