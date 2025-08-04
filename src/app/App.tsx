import React from 'react';
import './styles/index.scss'
import {classNames} from "shared/lib/classNames/classNames";
import {useTheme} from "app/providers/ThemeProvider";
import AppRouter from "app/providers/router/ui/AppRouter";
import {Navbar} from "widgets/Navbar";


const App = () => {
    const {theme, toggleTheme} = useTheme()

    return (
        <div className={classNames('app', {}, [theme])}>
            <button onClick={toggleTheme}>TOGGLE</button>

            <AppRouter />
            <Navbar />
        </div>
    );
};

export default App;