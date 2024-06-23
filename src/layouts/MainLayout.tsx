import React from 'react';
import {Outlet} from "react-router-dom";
import HeaderComponent from "../components/Header/HeaderComponent";
import cn from "classnames";
import styles from "../components/ThemeSwitcher/ThemeSwitcher.module.css";
import {useAppSelector} from "../hooks/useHooks";

const MainLayout = () => {
    const {theme} = useAppSelector(state => state.theme)
    return (

        <div className={cn(styles.container, {
            [styles.container_dark!]: theme
        })}>
            <HeaderComponent/>
            <Outlet/>
        </div>
    );
};

export default MainLayout;