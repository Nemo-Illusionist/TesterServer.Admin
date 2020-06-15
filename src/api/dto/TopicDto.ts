import { IAuthor } from "./AuthorDto";

export interface ITopic {
    parentId?: string;
    author: IAuthor;
    name: string;
    description?: string;
}