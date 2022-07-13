import React, {useContext} from 'react';
import {createTheme, ThemeProvider} from "@mui/material";
import {Outlet} from 'react-router-dom';

import './App.css';
import {CustomAppBar} from "../CustomAppBar/CustomAppBar";
import {AuthContext} from "../../Modules/Auth/AuthContext";
import {LoginPage} from "../../Pages/LoginPage/LoginPage";

const globalTheme = createTheme({
    palette: {
        mode: 'light',
    },
});

function App() {

    const user = useContext(AuthContext);

    return (
        <div className={'App'}>
            <ThemeProvider theme={globalTheme}>
                {!user ?
                    <LoginPage/>
                    :
                    <aside>
                        <CustomAppBar title={"temp"}/>
                        <div>
                            <Outlet/>
                        </div>
                    </aside>}
            </ThemeProvider>
        </div>
    );
}

export default App;
