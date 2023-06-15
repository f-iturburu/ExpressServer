import { database } from "../database/db.js";
import { Episode } from "../models/episode.Model.js";

export const createEpisode = (req, res) => {
  console.log(req.body);
  res.status(200);
};

export const getAll = (req, res) => {
  const db = database;
  res.status(200).json(db);
};

export const getById = (req, res) => {
  const { id } = req.params;
  const array = [];
  const length = Object.keys(database.seasons);

  for (let i = 1; i < length.length + 1; i++) {
    for (let j = 1; j < database.seasons[i].length + 1; j++) {
      if (database.seasons[j].length > 0) {
        array.push(database.seasons[j]);
      }
    }
  }

  array.push(database.movies);
  const flatArray = array.flat();
  const resObj = flatArray.find((i) => i.id == id);

  if (!resObj) {
    return res.status(404).json({ message: "Not found" });
  }

  res.status(200).json(resObj);
};

export const getAllEpisodes = (req, res) => {
  const episodes = database.seasons;
  res.status(200).json(episodes);
};

export const getByEpisode = (req, res) => {
  const { season, episode } = req.params;
  const episodeRes = database.seasons[season].filter(
    (i) => i.episode == episode
  );

  if (episodeRes.length == 0) {
    res.status(404).json({message:"Not found"});
  }

  res.status(200).json(episodeRes);
};

export const getEpisodeById = (req, res) => {
  const { id } = req.params;
  const array = [];
  const length = Object.keys(database.seasons);

  for (let i = 1; i < length.length + 1; i++) {
    for (let j = 1; j < database.seasons[i].length + 1; j++) {
      if (database.seasons[j].length > 0) {
        array.push(database.seasons[j]);
      }
    }
  }

  const flatArray = array.flat();
  const resObj = flatArray.find((i) => i.id == id);

  if (!resObj) {
    return res.status(404).json({ message: "Not found" });
  }

  res.status(200).json(resObj);
};

export const deleteEpisode = (req, res) => {
  const { season, episode } = req.params;
  const episodeIndex = database.seasons[season].findIndex(
    (i) => i.episode == episode
  );

  if (episodeIndex == -1) {
    return res.status(404).json({ message: "Not found" });
  }

  database.seasons[season].splice(episodeIndex, 1);
  res.status(200).json(database.seasons[season]);
};

export const getAllMovies = (req, res) => {
  const movies = database.movies;
  res.status(200).json(movies);
};

export const getMovieById = (req, res) => {

};

export const deleteMovieById = (req, res) => {

};

export const deleteEpisodeById = (req, res) => {

};

export const updateEpisode = (req, res) => {

};
