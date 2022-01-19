import { NextFunction, Request, Response } from 'express';
import mongoose from 'mongoose';
import todo from '../models/todo';

const createTodo = (req: Request, res: Response, next: NextFunction) => {
    let { text, completed } = req.body;

    const Todo = new todo({
        _id: new mongoose.Types.ObjectId(),
        text,
        completed
    });

    return Todo.save()
        .then((result) => {
            return res.status(201).json({ todo: result });
        })
        .catch((error) => {
            return res.status(501).json({ message: error.message, error });
        });
};

const getAllTodo = (req: Request, res: Response, next: NextFunction) => {
    return todo
        .find()
        .exec()
        .then((result) => {
            return res.status(200).json({ todo: result, count: result.length });
        })
        .catch((error) => {
            return res.status(501).json({ message: error.message, error });
        });
};

const deleteTodo = (req: Request, res: Response, next: NextFunction) => {
    return todo
        .deleteOne(req.body)
        .then((result) => {
            return res.status(200).json({ deleted: result });
        })
        .catch((error) => {
            return res.status(501).json({ message: error.message, error });
        });
};

const updateTodo = (req: Request, res: Response, next: NextFunction) => {
    let { textOld, text, completed } = req.body;
    console.log(req.body);

    return todo
        .updateOne({ text: textOld }, { text: text, completed: completed })
        .then((result) => {
            return res.status(200).json({ updated: result });
        })
        .catch((error) => {
            return res.status(501).json({ message: error.message, error });
        });
};

export default { getAllTodo, createTodo, deleteTodo, updateTodo };
