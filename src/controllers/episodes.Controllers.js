import { database } from "../database/db.js"
import { Episode } from "../models/episode.Model.js";

export const createEpisode = (req,res) =>{
   console.log(req.body);
   res.status(200)
}

export const getEpisodes = (req,res) =>{
    const seasons = database.seasons
    res.status(200).json({seasons});
}

export const getByEpisode = (req,res) =>{
    const {season, episode} = req.params
    const episodeRes = database.seasons[season].filter(i => i.episode == episode)
    res.status(200).json({episodeRes});
}

export const getEpisodeById = (req,res) =>{

}

export const deleteEpisode = (req,res) =>{

}

export const updateEpisode = (req,res) =>{
    
}