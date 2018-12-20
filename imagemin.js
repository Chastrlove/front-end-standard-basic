const imagemin = require("imagemin");
const imageminJpegtran = require("imagemin-jpegtran");
const imageminPngquant = require("imagemin-pngquant");
const chokidar = require("chokidar");
const path = require("path");
const _ = require("lodash");
const chalk = require("chalk");

// const argv = require("yargs").argv;

let filesPattern = path.join("src/original", "/**/*.{jpg,png,jpeg}");

const writeFile = async path => {
  const file =  await imagemin([path], "src/resource", {
    plugins: [imageminJpegtran(), imageminPngquant({ quality: "75-85" })]
  });
  logInfo(file)
};

function logInfo(file) {
  _.each(file, fileInfo => {
    console.log(chalk.green(fileInfo.path));
  });
  console.log(chalk.underline.green("Compress original images complete."));
}


writeFile(filesPattern);

const watcher = chokidar.watch([filesPattern], {
  ignoreInitial: true
});

watcher
  .on("ready", () =>
    console.log(chalk.underline.green("Initial scan complete. Ready for changes..."))
  )
  .on("add", writeFile)
  .on("change", writeFile);
