import { Board } from "../models/Board.model.js";


export const getAllBoards = async (req, res) => {
    try {
        const boards = await Board.find();
        res.status(200).json(boards);
    } catch (error) {
        res.status(500).json({ message: "Error fetching boards" });
    }
}

export const createBoard = async (req, res) => {
    const { name } = req.body;
    try {
        const newBoard = new Board({ name });
        await newBoard.save();
        res.status(201).json(newBoard);
    } catch (error) {
        res.status(500).json({ message: "Error creating board" });
    }
}

