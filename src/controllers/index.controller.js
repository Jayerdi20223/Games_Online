import config from "../config";
import fs from "fs";
import { v4 } from "uuid";

const json_games = fs.readFileSync("src/games.json", "utf-8");
let games = JSON.parse(json_games );

export const renderIndexPage = (req, res) => res.render("index", { games });

export const renderAboutPage = (req, res) => res.render("about", config);

export const renderNewEntryPage = (req, res) => res.render("new-entry");

export const createNewEntry = (req, res) => {
  const { title, author, image, description } = req.body;

  if (!title || !author || !image || !description) {
    res.status(400).send("Entries must have a title and body");
    return;
  }

  var newGames = {
    id: v4(),
    title,
    author,
    image,
    description,
  };

  // add a new game to the array
  games.push(newGames);

  // saving the array in a file
  const json_games  = JSON.stringify(games);
  fs.writeFileSync("src/games.json", json_games , "utf-8");

  res.redirect("/");
};

export const deleteGame = (req, res) => {
  console.log({ games });
  games = games.filter((game) => game.id != req.params.id);

  // saving data
  const json_games  = JSON.stringify(games);
  fs.writeFileSync("src/games.json", json_games );
  res.redirect("/");
};
