import * as glogg from "glogg-lang";

const fileRegex = /\.glogg\.db$/;

export default function plugin() {
  return {
    name: "rollup-plugin-glogg",

    async load(id) {
      if (fileRegex.test(id)) {
        return await glogg.make(id);
      }
    },
  };
}
