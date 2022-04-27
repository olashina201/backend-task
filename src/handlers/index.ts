import { Response, Request } from "express";
import Task from "../models/Task";

export const postTask = async (req: Request, res: Response) => {
  try {
    const { task, description, duration } = req.body;
    const newTask = new Task({
      task: task,
      description: description,
      duration: duration,
    });
    const saved = await newTask.save();
    return res.send(saved);
  } catch (err) {
    console.log(err);
    return res.status(500).send("error");
  }
};

export const getTasks = async (req: Request, res: Response) => {
  const tasks = await Task.find({});
  if (!tasks) {
    return res.status(400).json({ success: false });
  } else {
    return res.status(200).json({ success: true, data: tasks });
  }
};

export const getTask = async (req: Request, res: Response) => {
  const {
    query: { id },
    method,
  } = req;
  const task = await Task.findById(id);
  if (!task) {
    return res.status(400).json({ success: false });
  } else {
    return res.status(200).json({ success: true, data: task });
  }
};

export const putTask = async (req: Request, res: Response) => {
  const {
    query: { id },
  } = req;
  const body = {
    task: req.body.task,
    description: req.body.description,
    duration: req.body.duration,
  };
  const task = await Task.findByIdAndUpdate(id, body, {
    new: true,
    runValidators: true,
  });
  if (!task) {
    return res.status(400).json({ success: false });
  } else {
    return res.status(200).json({ success: true, data: task });
  }
};

export const deleteTask = async (req: Request, res: Response) => {
  const {
    query: { id },
  } = req;

  const task = await Task.deleteOne({ _id: id });
  if (!task) {
    return res.status(400).json({ success: false });
  } else {
    return res.status(200).json({ success: true, data: {} });
  }
};



  