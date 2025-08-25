import express from "express"
import { usernameController, searchController } from "./controller.js"

const router = express.Router();

// router.get("/:username", usernameController);
router.get("/search", searchController);

export default router;