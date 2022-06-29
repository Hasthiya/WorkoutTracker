import React from 'react';
import {createTheme, ThemeProvider} from "@mui/material";
import { Outlet } from 'react-router-dom';

import './App.css';
import {CustomAppBar} from "../CustomAppBar/CustomAppBar";

const globalTheme = createTheme({
    palette: {
        mode: 'dark',
    },
});

function App() {
    return (
        <div className={'App'}>
            <ThemeProvider theme={globalTheme}>
                <CustomAppBar title={"Workout Tracker"}/>
                <div>
                    <Outlet />
                </div>
            </ThemeProvider>
        </div>
    );
}

export default App;
