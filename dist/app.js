"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _express = _interopRequireDefault(require("express"));

var _path = _interopRequireDefault(require("path"));

var _morgan = _interopRequireDefault(require("morgan"));

var _routes = _interopRequireDefault(require("./routes"));

var _config = _interopRequireDefault(require("./config"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var app = (0, _express["default"])(); // Settings

app.set("port", _config["default"].PORT);
app.set("views", _path["default"].resolve(__dirname, "views"));
app.set("view engine", "ejs"); // Middlewares

app.use((0, _morgan["default"])("dev"));
app.use(_express["default"].urlencoded({
  extended: false
})); // global variables

app.use(function (req, res, next) {
  console.log(_config["default"].APPID);
  app.locals.APPID = _config["default"].APPID;
  next();
}); // Routes

app.use(_routes["default"]);
app.use(_express["default"]["static"](_path["default"].join(__dirname, "public"))); // 404 handler

app.use(function (req, res, next) {
  res.status(404).render("404");
});
var _default = app;
exports["default"] = _default;