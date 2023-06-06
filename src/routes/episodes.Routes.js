import { Router } from "express";
import { createEpisode } from "../controllers/episodes.controllers.js";
import { getEpisodes } from "../controllers/episodes.controllers.js";
const router = Router()

router.get("/episodes", getEpisodes)
router.post("/episodes", createEpisode)

export default router