import { database } from "../database/db.js";
import * as crypto from 'crypto';

export class Movie {
    constructor(title,summary,airingDate,image,trailer){
        this.title = title;
        this.summary = summary;
        this.airingDate = airingDate;
        this.image = image;
        this.trailer = trailer
        this.id = crypto.randomUUID()
        database.movies.push(this)
    }
}