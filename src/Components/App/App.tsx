import React from 'react';
import './App.css';
import {CustomAppBar} from "../CustomAppBar/CustomAppBar";
import {createTheme, ThemeProvider} from "@mui/material";
import Typography from "@mui/material/Typography";

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
                <Typography variant="h1" component="div" sx={{flexGrow: 1}}>
                    Workout Tracker
                </Typography>
            </ThemeProvider>
        </div>
    );
}

export default App;
