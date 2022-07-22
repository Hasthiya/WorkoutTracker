import React, {FC, useState} from 'react';
import {useNavigate} from "react-router-dom";
import {Alert, Box, Button, TextField, Typography} from "@mui/material";

import {signIn} from "../../Modules/Auth/functions";

type LoginErrorProps = {
    isLoginError: boolean,
    loginErrorText: string | null,
};

export const LoginPage: FC = () => {
    const [email, setEmail] = useState<string | null>(null);
    const [isEmailValid, setIsEmailValid] = useState<boolean>(false);
    const [emailErrorText, setEmailErrorText] = useState<string | null>(null);

    const [password, setPassword] = useState<string | null>(null);
    const [isPasswordValid, setIsPasswordValid] = useState<boolean>(false);
    const [passwordErrorText, setPasswordErrorText] = useState<string | null>(null);

    const [isLoginError, setIsLoginError] = useState<boolean>(false);
    const [loginErrorText, setLoginErrorText] = useState<any>(null);

    const navigate = useNavigate();

    const loginOnClick = async (email: string | null, password: string | null) => {
        try {
            setIsLoginError(false);
            if (email === null || email === "") {
                setIsEmailValid(true);
                setEmailErrorText("Email cannot be empty");
            } else if (password === null || password === "") {
                setIsPasswordValid(true);
                setPasswordErrorText("Password cannot be empty");
            } else {
                setIsEmailValid(false);
                setEmailErrorText(null);
                setIsPasswordValid(false);
                setPasswordErrorText(null);
                await signIn(email, password);
                navigate("/home")
            }
        } catch (err) {
            if (err instanceof Error) {
                console.log(err);
                setIsLoginError(true);
                setLoginErrorText(err.message);
            } else {
                console.log('Unexpected error', err);
                setIsLoginError(true);
                setLoginErrorText("Unexpected error occurred");
            }

        }
    };

    const LoginError = ({isLoginError, loginErrorText}: LoginErrorProps): JSX.Element => {
        if (isLoginError) {
            return (
                <Alert sx={styles.errorAlert} severity="error">{loginErrorText}</Alert>
            )
        } else {
            return <aside/>
        }
    };

    return (
        <aside>
            <Box sx={styles.loginContainer}>
                <Box sx={styles.loginColumn}>
                    <Box sx={styles.headerText}>
                        <Typography variant={"h3"} color={"primary"}>
                            {"Welcome to \n Workout Tracker"}
                        </Typography>
                    </Box>
                    <TextField onChange={(e) => {
                        setEmail(e.target.value)
                    }} sx={styles.textBox} label="E Mail" variant="outlined" error={isEmailValid}
                               helperText={emailErrorText}/>
                    <TextField onChange={(e) => {
                        setPassword(e.target.value)
                    }} sx={styles.textBox} label="Password" variant="outlined" error={isPasswordValid}
                               helperText={passwordErrorText}/>
                    <LoginError isLoginError={isLoginError} loginErrorText={loginErrorText}/>
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
    },
    errorAlert: {
        margin: 1,
    }
};
