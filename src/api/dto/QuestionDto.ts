import {IAuthor} from "./AuthorDto"
import { ITopic } from "./TopicDto";

export const TypeQuestion = {
    "OPEN": 0,
    "MULTISELECTION": 1,
    "ORDERREDLIST": 2,
    "CONFORMITY": 3,
    "SINGLESELECTION": 4
}

export interface IQuestion {
    topic: ITopic;
    name: string;
    description?: string;
    hint?: string;
    type: typeof TypeQuestion;
    answer: string;
    author: IAuthor;
}

