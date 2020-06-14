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
