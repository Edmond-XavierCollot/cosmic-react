const fs = require("fs");
const path = require("path");

module.exports = () => {
  const dir = fs.readdirSync(path.resolve(__dirname, "src/components"));
  const components = dir.reduce((acc, name) => {
    if (name[0] == name[0].toUpperCase()) {
      return {
        ...acc,
        [name]: [path.resolve(__dirname, "src/components", name), "default"],
      };
    }
    return acc;
  }, {});

  return {
    React: "react",
    UI: ["cosmic-ui", "UI"],
    Grid: ["cosmic-ui", "Grid"],
    ...components,
  };
};
