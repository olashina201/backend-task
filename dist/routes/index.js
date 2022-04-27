"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const handlers_1 = require("../handlers");
const router = (0, express_1.Router)();
router.post("/add-task", handlers_1.postTask);
router.get("/tasks", handlers_1.getTasks);
router.get("/task", handlers_1.getTask);
router.put("/task", handlers_1.putTask);
router.delete("/task", handlers_1.deleteTask);
exports.default = router;
