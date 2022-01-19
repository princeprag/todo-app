import { Document } from 'mongoose';

export default interface ITodo extends Document {
    text: String;
    completed: Boolean;
}
