import * as UsersActionCreators from './users';
import * as UserDataActionCreators from './userData';

export default {
    ...UsersActionCreators,
    ...UserDataActionCreators
};
