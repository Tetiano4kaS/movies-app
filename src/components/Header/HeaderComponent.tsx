import React from 'react';

import ThemeSwitcher from "../ThemeSwitcher/ThemeSwitcher";
import SearchComponent from "../Search/SearchComponent";
import styles from "./Header.module.css"
import UserComponent from "../UserContainer/UserComponent";
import cn from "classnames";
import {useAppSelector} from "../../hooks/useHooks";

const HeaderComponent = () => {
    const {theme} = useAppSelector(state => state.theme)
    return (
        <div className={cn(styles.header, {[styles.header_dark!]: theme})}>
            <ThemeSwitcher/>
            <div className={styles.rightContainer}><SearchComponent/>
                <UserComponent/></div>
        </div>
    );
};

export default HeaderComponent;
