import {UserAction, UserActionTypes} from "../../types/user";
import {Dispatch} from "redux";
import axios from "axios";

export const fetchUserData = (id: number) => {
    return async (dispatch: Dispatch<UserAction>) => {
        try {
            dispatch({type: UserActionTypes.FETCH_USER_DATA});

            const response = await axios.get(`https://jsonplaceholder.typicode.com/users/${id}`);

            setTimeout(() => {
                dispatch({
                    type: UserActionTypes.FETCH_USER_DATA_SUCCESS,
                    payload: response.data
                });
            }, 200);
        } catch (e) {
            dispatch({
                type: UserActionTypes.FETCH_USER_DATA_ERROR,
                payload: "Cannot fetch user data"
            });
        }
    }
};
