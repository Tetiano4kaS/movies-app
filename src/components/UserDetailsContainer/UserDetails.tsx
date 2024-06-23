import React, { FC } from 'react';
import styles from './UserDetails.module.css';

const UserDetails: FC = () => {
    return (
        <div className={styles.container}>
            <h1>User Details</h1>
            <div className={styles.infoContainer}>
                <div className={styles.avatarContainer}>
                    <img src="girl-avatar.jpg" alt="User Avatar" className={styles.avatar} />
                </div>
                <div className={styles.detailsContainer}>
                    <p><strong>First Name:</strong> Tetiana</p>
                    <p><strong>Login:</strong> girl2024</p>
                    <p><strong>Email:</strong> girl2024@example.com</p>
                    <p><strong>Bio:</strong> Avid movie enthusiast and critic.</p>
                    <p><strong>Favorite Genres:</strong> Drama, Sci-Fi, Fantasy</p>
                    <p><strong>Favorite Movies:</strong> Inception, The Matrix, Interstellar</p>
                </div>
            </div>
        </div>
    );
};

export default UserDetails;
