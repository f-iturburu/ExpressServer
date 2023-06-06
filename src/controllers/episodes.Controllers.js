import { database } from "../database/db.js"
import { Episode } from "../models/episode.Model.js";

export const createEpisode = (req,res) =>{
   console.log(req.body);

   res.status(200)
}

export const getEpisodes = (req,res) =>{
    const episodes = database
    res.status(200).json({episodes});
}