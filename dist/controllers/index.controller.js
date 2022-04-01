"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.renderNewEntryPage = exports.renderIndexPage = exports.renderAboutPage = exports.deleteGame = exports.createNewEntry = void 0;

var _config = _interopRequireDefault(require("../config"));

var _fs = _interopRequireDefault(require("fs"));

var _uuid = require("uuid");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var json_games = _fs["default"].readFileSync("src/games.json", "utf-8");

var games = JSON.parse(json_games);

var renderIndexPage = function renderIndexPage(req, res) {
  return res.render("index", {
    games: games
  });
};

exports.renderIndexPage = renderIndexPage;

var renderAboutPage = function renderAboutPage(req, res) {
  return res.render("about", _config["default"]);
};

exports.renderAboutPage = renderAboutPage;

var renderNewEntryPage = function renderNewEntryPage(req, res) {
  return res.render("new-entry");
};

exports.renderNewEntryPage = renderNewEntryPage;

var createNewEntry = function createNewEntry(req, res) {
  var _req$body = req.body,
      title = _req$body.title,
      author = _req$body.author,
      image = _req$body.image,
      description = _req$body.description;

  if (!title || !author || !image || !description) {
    res.status(400).send("Entries must have a title and body");
    return;
  }

  var newGames = {
    id: (0, _uuid.v4)(),
    title: title,
    author: author,
    image: image,
    description: description
  }; // add a new game to the array

  games.push(newGames); // saving the array in a file

  var json_games = JSON.stringify(games);

  _fs["default"].writeFileSync("src/games.json", json_games, "utf-8");

  res.redirect("/");
};

exports.createNewEntry = createNewEntry;

var deleteGame = function deleteGame(req, res) {
  console.log({
    games: games
  });
  games = games.filter(function (game) {
    return game.id != req.params.id;
  }); // saving data

  var json_games = JSON.stringify(games);

  _fs["default"].writeFileSync("src/games.json", json_games);

  res.redirect("/");
};

exports.deleteGame = deleteGame;