import React, {useEffect} from 'react';
import {useTypedSelector} from "../hooks/useTypedSelector";
import {fetchUsers} from "../store/action-creators/users";
import {useActions} from "../hooks/useActions";
import UserData from "./UserData";

const UserList = () => {
    const {users, loading, error} = useTypedSelector(state => state.users);
    const {fetchUsers, fetchUserData} = useActions();

    useEffect(() => {
        fetchUsers();
    }, []);

    if (loading) {
        return (
            <div>Loading...</div>
        );
    }

    if (error) {
        return (
            <div>Error - {error}</div>
        );
    }

    return (
        <div>
            {users.map(user => (
                <div key={user.id}>
                    {user.name}
                    <button onClick={() => fetchUserData(user.id)}>Detailed data</button>
                </div>
            ))}
            <br/><br/>
            ========================================================
            <br/><br/>
            <UserData/>
        </div>
    );
};

export default UserList;
