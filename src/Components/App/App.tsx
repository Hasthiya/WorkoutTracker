import React, {useContext} from 'react';
import {ThemeProvider} from "@mui/material";
import {BrowserRouter, Route, Routes} from 'react-router-dom';

import './App.css';
import {AuthContext} from "../../Modules/Auth/AuthContext";
import {LoginPage} from "../../Pages/LoginPage/LoginPage";
import {HomePage} from "../../Pages/HomePage/HomePage";
import {SettingsPage} from "../../Pages/SettingsPage/SettingsPage";
import WorkoutTracker from "../WorkoutTracker/WorkoutTracker";
import {NotFoundPage} from "../../Pages/NotFoundPage/NotFoundPage";
import globalTheme from "../../Modules/Theme/globalTheme";

function App() {

    const user = useContext(AuthContext);

    return (
        <div className={'App'}>
            <ThemeProvider theme={globalTheme}>
                <BrowserRouter>
                    <Routes>
                        {user ?
                            <Route path="/" element={<WorkoutTracker/>}>
                                <Route path="home" element={<HomePage/>}/>
                                <Route path="settings" element={<SettingsPage/>}/>
                                <Route path="settings" element={<SettingsPage/>}/>
                                <Route path="*" element={<NotFoundPage/>}/>
                            </Route>
                            :
                            <Route path="/login" element={<LoginPage/>}/>
                        }
                    </Routes>
                </BrowserRouter>
            </ThemeProvider>
        </div>
    );
}

export default App;
