import { Task } from "../models/Task.model.js";

export const getTasksByBoardId = async (req, res) => {
    const { boardId } = req.params;
    try {
        const tasks = await Task.find({ boardId }).populate('assignedTo', 'name');
        res.status(200).json(tasks);
    } catch (error) {
        res.status(500).json({ message: "Error fetching tasks" });
    }
}

export const createTask = async (req, res) => {
    const { title, description, status, priority, assignedTo, dueDate } = req.body;
    const { boardId } = req.params;
    try {
        const newTask = new Task({
            title,
            description,
            status,
            priority,
            assignedTo,
            dueDate,
            boardId
        });
        await newTask.save();
        res.status(201).json(newTask);
    } catch (error) {
        res.status(500).json({ message: "Error creating task" });
    }
}   

export const updateTask = async (req, res) => {
    const { id } = req.params;
    const { title, description, status, priority, assignedTo, dueDate } = req.body;
    try {
        const updatedTask = await Task.findByIdAndUpdate(id, {
            title,
            description,
            status,
            priority,
            assignedTo,
            dueDate
        }, { new: true });
        if (!updatedTask) {
            return res.status(404).json({ message: "Task not found" });
        }
        res.status(200).json(updatedTask);
    } catch (error) {
        res.status(500).json({ message: "Error updating task" });
    }
}

export const deleteTask = async (req, res) => {
    const { id } = req.params;
    try {
        const deletedTask = await Task.findByIdAndDelete(id);
        if (!deletedTask) {
            return res.status(404).json({ message: "Task not found" });
        }
        res.status(200).json({ message: "Task deleted successfully" });
    } catch (error) {
        res.status(500).json({ message: "Error deleting task" });
    }
}

