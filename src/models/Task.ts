import mongoose, { Schema } from "mongoose"

const Task = new Schema({
    task: {
        type: String,
        trim: true
    },
    description: {
        type: String,
        trim: true
    },
    duration: {
        type: String,
        trim: true
    },
    createdAt: {
        type: Date,
        required: true,
        default: Date.now
    },
})

export default mongoose.models.tasks || mongoose.model("tasks", Task);
