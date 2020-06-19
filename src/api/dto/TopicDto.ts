import { IAuthor } from './AuthorDto';

interface IParent {
  id: string;
  name: string;
}

export interface ITopic {
  parent: IParent | null;
  // author: IAuthor;
  name: string;
  id: string;
  createdUtc: string;
  updatedUtc: string;
  deletedUtc: string | null;
}

export interface ITopicAdd {
  parentId?: string;
  name: string;
}

export type ITopicEdit = Partial<ITopicAdd> & { id: string };
