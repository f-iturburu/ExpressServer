import { Router } from "express";
import { createEpisode } from "../controllers/episodes.controllers.js";
import { getAll } from "../controllers/episodes.controllers.js";
import { getAllMovies } from "../controllers/episodes.controllers.js";
import { getAllEpisodes } from "../controllers/episodes.controllers.js";
import { getByEpisode } from "../controllers/episodes.controllers.js";
import { getEpisodeById } from "../controllers/episodes.controllers.js";
import { deleteEpisode } from "../controllers/episodes.controllers.js";
import { deleteEpisodeById } from "../controllers/episodes.controllers.js";
import { getById } from "../controllers/episodes.controllers.js";

const router = Router()

router.get("/", getAll)
router.get("/movies", getAllMovies)
router.get("/episodes", getAllEpisodes)
router.get("/episodes/:season/:episode", getByEpisode)
router.get("/episodes/:id",getEpisodeById)
router.get("/:id",getById)
router.post("/episodes", createEpisode)

router.delete("/episodes/:season/:episode",deleteEpisode)
router.delete("/episodes/:id/",deleteEpisodeById)

router.post("")
export default router