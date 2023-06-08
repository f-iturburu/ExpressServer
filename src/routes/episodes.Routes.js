import { Router } from "express";
import { createEpisode } from "../controllers/episodes.controllers.js";
import { getEpisodes } from "../controllers/episodes.controllers.js";
import { getByEpisode } from "../controllers/episodes.controllers.js";
const router = Router()

router.get("/episodes", getEpisodes)
router.get("/episodes/:season/:episode", getByEpisode)
router.post("/episodes", createEpisode)

export default router