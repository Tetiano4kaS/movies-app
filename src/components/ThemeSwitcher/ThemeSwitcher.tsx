import React from 'react';
import {useAppDispatch, useAppSelector} from "../../hooks/useHooks";
import Switch from "react-switch";
import {themeActions} from "../../redux/slices/themeSlice";
import styles from "./ThemeSwitcher.module.css"

const ThemeSwitcher = () => {
    const dispatch = useAppDispatch();
    const {theme} = useAppSelector(state => state.theme)
    return (
        <div>
            <Switch
                onChange={() => dispatch(themeActions.changeTheme({}))}
                checked={theme}
                offColor="#bbb"
                onColor="#000"
                offHandleColor="#fff"
                onHandleColor="#fff"
                uncheckedIcon={false}
                checkedIcon={false}
                className="react-switch"

            />
        </div>
    );
};

export default ThemeSwitcher;