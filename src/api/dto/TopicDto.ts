import {IMeta} from "../../utils/interfaces";

interface IParent {
    id: string;
    name: string;
}

export interface ITopic {
    parent: IParent | null;
    name: string;
    id: string;
    createdUtc: string;
    updatedUtc: string;
    deletedUtc: string | null;
}

export interface ITopics {
    data: ITopic[];
    meta: IMeta;
}

export interface ITopicAdd {
    parentId?: string;
    name: string;
}

export type ITopicEdit = Partial<ITopicAdd> & {id: string};
