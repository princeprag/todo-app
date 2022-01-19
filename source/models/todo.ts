import mongoose, { model, Schema } from 'mongoose';
import ITodo from '../interfaces/todo';

const todoSchema = new Schema(
    {
        text: {
            type: String,
            required: true
        },
        completed: {
            type: Boolean,
            require: true
        }
    },
    {
        timestamps: true
    }
);

export default model<ITodo>('todo', todoSchema);
