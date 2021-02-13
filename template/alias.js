const path = require("path");
const fs = require("fs");

const SRC_PATH = path.resolve(__dirname, "src");
const toSrcPath = (p) => path.resolve(SRC_PATH, p);

module.exports = () => {
  const srcAlias = fs
    .readdirSync(SRC_PATH, {
      withFileTypes: true,
    })
    .reduce(
      (acc, d) =>
        d.isDirectory() ? { ...acc, [`@${d.name}`]: toSrcPath(d.name) } : acc,
      {}
    );

  return {
    ...srcAlias,
  };
};
