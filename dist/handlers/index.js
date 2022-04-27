"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.deleteTask = exports.putTask = exports.getTask = exports.getTasks = exports.postTask = void 0;
const Task_1 = __importDefault(require("../models/Task"));
const postTask = async (req, res) => {
    try {
        const { task, description, duration } = req.body;
        const newTask = new Task_1.default({
            task: task,
            description: description,
            duration: duration,
        });
        const saved = await newTask.save();
        return res.status(200).json({ success: true, data: saved });
    }
    catch (err) {
        console.log(err);
        return res.status(500).send("error");
    }
};
exports.postTask = postTask;
const getTasks = async (req, res) => {
    const tasks = await Task_1.default.find({});
    if (!tasks) {
        return res.status(400).json({ success: false });
    }
    else {
        return res.status(200).json({ success: true, data: tasks });
    }
};
exports.getTasks = getTasks;
const getTask = async (req, res) => {
    const { query: { id }, } = req;
    const task = await Task_1.default.findById(id);
    if (!task) {
        return res.status(400).json({ success: false });
    }
    else {
        return res.status(200).json({ success: true, data: task });
    }
};
exports.getTask = getTask;
const putTask = async (req, res) => {
    const { query: { id }, } = req;
    const body = {
        task: req.body.task,
        description: req.body.description,
        duration: req.body.duration,
    };
    const task = await Task_1.default.findByIdAndUpdate(id, body, {
        new: true,
        runValidators: true,
    });
    if (!task) {
        return res.status(400).json({ success: false });
    }
    else {
        return res.status(200).json({ success: true, data: task });
    }
};
exports.putTask = putTask;
const deleteTask = async (req, res) => {
    const { query: { id }, } = req;
    const task = await Task_1.default.deleteOne({ _id: id });
    if (!task) {
        return res.status(400).json({ success: false });
    }
    else {
        return res.status(200).json({ success: true, data: {} });
    }
};
exports.deleteTask = deleteTask;
