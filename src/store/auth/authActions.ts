import {asyncFactory} from "typescript-fsa-redux-thunk";
import {actionCreatorFactory} from "typescript-fsa";
import {baseFetch} from "../../api/BaseFetch";
import {IAuthRequest} from "../../api/dto/AuthDto";

const create = actionCreatorFactory("AUTHORIZATION");
const createAsync = asyncFactory(create);

export const authorization = createAsync<IAuthRequest, any, Error>("AUTH", async (params: IAuthRequest, dispatch) => {
    const url = "admin/v1/Authorization";
    const res = await baseFetch(url, params, "POST");
    if (!res.error) {
        return res;
    }
    return null;
});
