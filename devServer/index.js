const webpack = require("webpack");
const webpackDevMiddleware = require("webpack-dev-middleware");
const app = require("express")();
const http = require("http").Server(app);
const io = require("socket.io")(http);
const chokidar = require("chokidar");
const path = require("path");
const buildConfig = require("../webpack.config");

const watcher = chokidar.watch(path.resolve(__dirname, "../src"), {
  ignored: /^\./,
  persistent: true,
});

io.on("connection", (socket) => {
  console.log("a user connected");
});

const generateWebpackMiddleware = () => {
  const compiler = webpack(buildConfig());
  return webpackDevMiddleware(compiler);
};

let webackMiddleware = generateWebpackMiddleware();

app.use((...args) => {
  webackMiddleware(...args);
});

let isCompilationFinished = false;

webackMiddleware.waitUntilValid(() => {
  console.log("Valid");
  isCompilationFinished = true;
});

http.listen(3000, () => {
  console.log("Example app listening on port 3000!");
  watcher.on("change", () => {
    console.log("Reloading client");
    io.emit("content-changed");
  });

  watcher.on("add", (file) => {
    if (isCompilationFinished) {
      console.log("File added: ", file);
      console.log("Reload middleware");
      webackMiddleware = generateWebpackMiddleware();
    }
  });
});
