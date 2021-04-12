export interface UserState {
    userData: any;
    loading: boolean;
    error: null | string;
}

export enum UserActionTypes {
    FETCH_USER_DATA = 'FETCH_USER',
    FETCH_USER_DATA_SUCCESS = 'FETCH_USER_SUCCESS',
    FETCH_USER_DATA_ERROR = 'FETCH_USER_ERROR'
}

export interface FetchUserAction {
    type: UserActionTypes.FETCH_USER_DATA;
}

export interface FetchUserSuccessAction {
    type: UserActionTypes.FETCH_USER_DATA_SUCCESS;
    payload: any[] ;
}

export interface FetchUserErrorAction {
    type: UserActionTypes.FETCH_USER_DATA_ERROR;
    payload: string;
}

export type UserAction = FetchUserAction | FetchUserSuccessAction | FetchUserErrorAction;
