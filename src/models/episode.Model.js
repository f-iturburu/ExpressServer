import { database } from "../database/db.js";

export class Episode {
    constructor(season,episodeNumber,title,summary,airingDate,image,opening){
        this.season = season;
        this.episode = episodeNumber;
        this.title = title;
        this.summary = summary;
        this.airingDate = airingDate;
        this.image = image;
        this.opening = opening
        database.seasons[season].push(this)
        this.id = database.seasons[1].length;
    }
}