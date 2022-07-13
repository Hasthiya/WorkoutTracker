import React, {FC, useState} from 'react';
import {Box, Button, TextField, Typography} from "@mui/material";
import {signIn} from "../../Modules/Auth/functions";

export const LoginPage: FC = () => {
    const [email, setEmail] = useState<string | null>(null);
    const [password, setPassword] = useState<string | null>(null);

    const loginOnClick = async (email: string | null, password: string | null) => {
        try {
            if (email === null) {
                console.log("userName is null")
            } else if (password === null) {
                console.log("passWord is null")
            } else {
                const signInResponse = await signIn(email, password)
            }
        } catch (e) {
            console.log(e)
        }
    };

    return (
        <aside>
            <Box sx={styles.loginContainer}>
                <Box sx={styles.loginColumn}>
                    <Box sx={styles.headerText}>
                        <Typography variant={"h3"}>
                            {"Welcome to \n Workout Tracker"}
                        </Typography>
                    </Box>
                    <TextField onChange={(e) => {
                        setEmail(e.target.value)
                    }} sx={styles.textBox} label="E Mail" variant="outlined"/>
                    <TextField onChange={(e) => {
                        setPassword(e.target.value)
                    }} sx={styles.textBox} label="Password" variant="outlined"/>
                    <Button onClick={() => {
                        loginOnClick(email, password)
                    }} variant="contained" size={"large"} sx={styles.loginButton}>Login</Button>
                </Box>
            </Box>
        </aside>
    );
};

const styles = {
    loginContainer: {
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
    loginColumn: {
        marginX: 3,
        maxWidth: 420,
        display: "flex",
        flexDirection: "column",
    },
    textBox: {
        margin: 1,
    },
    loginButton: {
        margin: 1,
        marginTop: 4,
    },
    headerText: {
        marginBottom: 4,
    }
};
