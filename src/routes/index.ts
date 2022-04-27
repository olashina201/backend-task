import { Router } from "express";
import { deleteTask, getTask, getTasks, postTask, putTask } from "../handlers";


const router = Router()

router.post("/add-task", postTask);
router.get("/tasks", getTasks);
router.get("/task", getTask);
router.put("/task", putTask);
router.delete("/task", deleteTask);


export default router;