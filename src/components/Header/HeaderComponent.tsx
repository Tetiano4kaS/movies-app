import React from 'react';

import ThemeSwitcher from "../ThemeSwitcher/ThemeSwitcher";
import SearchComponent from "../Search/SearchComponent";
import styles from "./Header.module.css"
import UserComponent from "../UserContainer/UserComponent";
import cn from "classnames";
import {useAppSelector} from "../../hooks/useHooks";
import {PiFilmSlateBold} from "react-icons/pi";
import {useNavigate} from "react-router-dom";

const HeaderComponent = () => {
    const {theme} = useAppSelector(state => state.theme);
    const navigate = useNavigate();
    const handleClickIcon = () => {
        navigate('/movies')
    }

    return (
        <div className={cn(styles.header, {[styles.header_dark!]: theme})}>
            <div className={styles.leftContainer}>
                <PiFilmSlateBold className={styles.icon} onClick={handleClickIcon}/>
                <ThemeSwitcher/>
            </div>
            <div className={styles.rightContainer}><SearchComponent/>
                <UserComponent/></div>
        </div>
    );
};

export default HeaderComponent;
