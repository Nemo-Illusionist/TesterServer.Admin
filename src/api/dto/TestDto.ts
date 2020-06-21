import {IAuthor} from "./AuthorDto";
import {IMeta} from "../../utils/interfaces";

export interface ITest {
    id: string;
    name: string;
    description?: string;
    author?: IAuthor;
    createdUtc: string;
    updatedUtc: string;
    deletedUtc: string | null;
}

export interface ITests {
    data: ITest[];
    meta: IMeta;
}

export type ITestAdd = Pick<ITest, "name" | "description">;
export type ITestEddit = Partial<Pick<ITest, "name" | "description">> & Pick<ITest, "id">;
