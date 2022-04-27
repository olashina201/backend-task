import { Router } from "express";
import { getTasks, postTask } from "../handlers";


const router = Router()

router.post("/add-task", postTask);
router.get("tasks", getTasks);

export default router;