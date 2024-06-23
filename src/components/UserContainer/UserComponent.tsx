import React from 'react';
import styles from './User.module.css';
import {useNavigate} from "react-router-dom";

const UserComponent = () => {
    const userName = "Tetiana";
    const navigate = useNavigate();

    const handleUserClick = () => {
        navigate('/user-details');
    };


    return (
        <div className={styles.userContainer} onClick={handleUserClick}>
            <img src={'girl-avatar.jpg'} alt="User Avatar" className={styles.avatar}/>
            <span className={styles.userName}>{userName}</span>
        </div>
    );
};

export default UserComponent;
