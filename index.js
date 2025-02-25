import fs from "node:fs";
import proc from "node:child_process";
import url from "node:url";

// TODO: glogg-lang should probably expose an API to avoid spawning child process
const glg = url.fileURLToPath(import.meta.resolve("glogg-lang/bin"));

const fileRegex = /\.glogg\.db$/

export default function plugin() {
  return {
    name: 'glogg',

    transform(src, id) {
      if (fileRegex.test(id)) {
        // TODO: make should support outputting code to stdout
        proc.execSync(`node ${glg} make`);

        const code = fs.readFileSync("app.js", { encoding: "utf-8" });

        return {
          code: code,
          map: null, // provide source map if available
        }
      }
    },
  }
}
