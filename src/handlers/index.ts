import { Response, Request } from "express";
import Task from "../models/Task";

const postTask = async (req: Request, res: Response) => {
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

const getTasks = async (req: Request, res: Response) => {
  const { method } = req;
  const tasks = await Task.find({});
  if (!tasks) {
    return res.status(400).json({ success: false });
  } else {
    return res.status(200).json({ success: true, data: tasks });
  }
};

const defaultMethod = async (res: Response) => {
  return res.status(400).json({ success: false });
};

const handlers = {
  POST: postTask,
  GET: getTasks,
  ["undefined"]: defaultMethod,
};

// export default async function Tasks(
//     req: Request,
//     res: Response
//   ) {
//     await Promise.all([connect(), handlers[req.method as keyof handlers](req, res)]);
//   }
  