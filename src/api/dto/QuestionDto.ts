export const TypeQuestion = {
  OPEN: 0,
  MULTISELECTION: 1,
  ORDERREDLIST: 2,
  CONFORMITY: 3,
  SINGLESELECTION: 4,
};

export interface IQuestionAdd {
  topicId: string;
  name: string;
  description?: string;
  hint?: string;
  type: typeof TypeQuestion;
  answer: string;
  authorId: string;
}

export interface IQuestion {
  type: number;
  createdUtc: string;
  deletedUtc: string | null;
  id: string;
  name: string;
}
