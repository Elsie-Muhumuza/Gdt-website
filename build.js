/**
 * Vercel runs this so the deploy output folder `public/` is created by the build step.
 */
const fs = require("fs");
const path = require("path");

const root = __dirname;
const src = path.join(root, "www");
const dest = path.join(root, "public");

if (!fs.existsSync(path.join(src, "index.html"))) {
  console.error("Missing www/index.html");
  process.exit(1);
}

fs.rmSync(dest, { recursive: true, force: true });
fs.cpSync(src, dest, { recursive: true });
console.log("Built public/ from www/");
