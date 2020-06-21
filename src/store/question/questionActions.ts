import {asyncFactory} from "typescript-fsa-redux-thunk";
import {actionCreatorFactory} from "typescript-fsa";
import {baseFetch} from "../../api/BaseFetch";
import {IQuestion, IQuestionAdd, IQuestions} from "../../api/dto/QuestionDto";

const create = actionCreatorFactory("QUESTION");
const createAsync = asyncFactory(create);

export const getQuestions = createAsync<{}, IQuestions | null, Error>("GET_QUESTIONS", async (params, dispatch) => {
    const url = "admin/v1/Question";
    const res = await baseFetch(url, {}, "GET");
    if (res.error) {
        return null;
    }
    return res as IQuestions;
});

export const getQuestion = createAsync<string, IQuestion | null, Error>("GET_QUESTION", async (id) => {
    const url = `admin/v1/Question/${id}`;
    const res = await baseFetch(url, {}, "GET");
    if (res.error) {
        return null;
    }
    return res.result as IQuestion;
});

export const createQuestion = createAsync<IQuestionAdd, IQuestion, Error>(
    "CREATE_QUESTION",
    async (params: IQuestionAdd) => {
        const url = "admin/v1/Question";
        const res = await baseFetch(url, params, "POST");

        return res.result as IQuestion;
    },
);

export const deleteQuestion = createAsync<void, void, Error>("DELETE_QUESTION", async (id) => {
    const url = `admin/v1/Question/${id}`;
    const res = await baseFetch(url, {}, "DELETE");
    return res.result;
});
