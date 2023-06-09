import { database } from "../database/db.js";
import * as crypto from 'crypto';

export class Episode {
    constructor(season,episodeNumber,title,summary,airingDate,image,opening){
        this.season = season;
        this.episode = episodeNumber;
        this.title = title;
        this.summary = summary;
        this.airingDate = airingDate;
        this.image = image;
        this.opening = opening
        this.id = crypto.randomUUID()
        database.seasons[season].push(this)
    }
}