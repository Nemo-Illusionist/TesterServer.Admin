import { IAuthor } from './AuthorDto';

export interface ITest {
  id: string;
  name: string;
  description?: string;
  author?: IAuthor;
  createdUtc: string;
  updatedUtc: string;
  deletedUtc: string | null;
}

export type ITestAdd = Pick<ITest, "name" | "description"> 
export type ITestEddit = Partial<Pick<ITest, "name" | "description">> & Pick<ITest, "id">