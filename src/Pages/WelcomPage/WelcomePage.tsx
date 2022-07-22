import React, {FC, useEffect, useState} from 'react';
import {useNavigate} from "react-router-dom";
import {Box, Button, Typography} from "@mui/material";
import FitnessCenterIcon from '@mui/icons-material/FitnessCenter';

export const WelcomePage: FC = () => {
    const [showLoader, setShowLoader] = useState<boolean>(true);
    const navigate = useNavigate();

    useEffect(() => {
        setTimeout(() => {
            setShowLoader(false)
        }, 1500)
    });

    return (
        <aside>
            <Box sx={styles.welcomeContainer}>
                {showLoader ?
                    <Box sx={styles.loaderContainer}>
                        <Typography variant="h4" color={"primary"}>
                            {"Loading"}
                        </Typography>
                        <FitnessCenterIcon sx={styles.loaderSpinIcon} fontSize={"large"}/>
                    </Box>
                    :
                    <Box sx={styles.welcomeTextContainer}>
                        <Typography variant="h4" color={"primary"}>
                            {"Welcome To"}
                        </Typography>
                        <Typography variant="h2" color={"primary"}>
                            {"Workout Tracker"}
                        </Typography>
                        <Button onClick={() => {
                            navigate("signup")
                        }} variant="contained" size={"large"} sx={styles.button}>{"Become a Tracker"}</Button>
                        <Button onClick={() => {
                            navigate("login")
                        }} variant="contained" size={"large"} sx={styles.button}>{"Already have an account"}</Button>
                    </Box>
                }
            </Box>
        </aside>
    );
};

const styles = {
    welcomeContainer: {
        position: "absolute",
        top: 0,
        bottom: 0,
        left: 0,
        right: 0,
        display: "flex",
        flexWrap: "wrap",
        alignItems: "center",
        justifyContent: "center",
    },
    welcomeTextContainer: {
        display: "flex",
        flexDirection: "column",
    },
    button: {
        margin: 1,
    },
    loaderContainer: {
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
    },
    loaderSpinIcon: {
        animation: "spin 2s linear infinite",
        "@keyframes spin": {
            "0%": {
                transform: "rotate(360deg)",
            },
            "100%": {
                transform: "rotate(0deg)",
            },
        },
    }
};