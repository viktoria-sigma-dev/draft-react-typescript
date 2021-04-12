import {UserState, UserAction, UserActionTypes} from "../../types/user";

const initialState: UserState = {
    userData: null,
    loading: false,
    error: null
};

export const userDataReducer = (state = initialState, action: UserAction): UserState => {
    switch (action.type) {
        case UserActionTypes.FETCH_USER_DATA:
            return {loading: true, error: null, userData: null};
        case UserActionTypes.FETCH_USER_DATA_SUCCESS:
            return {loading: false, error: null, userData: action.payload};
        case UserActionTypes.FETCH_USER_DATA_ERROR:
            return {loading: false, error: action.payload, userData: null};
        default:
            return state;
    }
};
