import fs from "node:fs";
import proc from "node:child_process";
import url from "node:url";
import * as glogg from "glogg-lang";

const fileRegex = /\.glogg\.db$/

export default function plugin() {
  return {
    name: 'glogg',

    async load(id) {
      if (fileRegex.test(id)) {
        return await glogg.make(id);
      }
    },
  }
}
