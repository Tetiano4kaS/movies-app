import React from 'react';
import ThemeSwitcher from "../ThemeSwitcher/ThemeSwitcher";
import SearchComponent from "../Search/SearchComponent";
import styles from "./Header.module.css"
const HeaderComponent = () => {
    return (
        <div className={styles.header}>
            <ThemeSwitcher/>
            <SearchComponent/>
        </div>
    );
};

export default HeaderComponent;