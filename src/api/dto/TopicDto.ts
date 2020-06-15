import { IAuthor } from './AuthorDto';

interface IParent {
  id: string;
  name: string;
}

export interface ITopic {
  parent: IParent | null;
  author: IAuthor;
  name: string;
  description?: string;
}

export interface ITopicAdd {
  parentId?: string;
  name: string;
  description?: string;
}

export type ITopicEdit = Partial<ITopicAdd> & { id: string };
