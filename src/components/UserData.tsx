import React from 'react';
import {useTypedSelector} from "../hooks/useTypedSelector";

const UserData = () => {
    const {userData, loading, error} = useTypedSelector(state => state.userData);

    if (loading) {
        return (
            <div>User data is loading...</div>
        );
    }

    if (error) {
        return (
            <div>Error - {error}</div>
        );
    }

    if (!userData) {
        return (
            <div>Choose any user to review information</div>
        );
    }

    console.log("userData", userData);

    return (
        <div>
            <h3>User Data:</h3>

            <div>Name: {userData.name};</div>
            <div>Email: {userData.email};</div>
            <div>Phone: {userData.phone};</div>
            <div>Company: {userData.company.name};</div>
        </div>
    );
};

export default UserData;
