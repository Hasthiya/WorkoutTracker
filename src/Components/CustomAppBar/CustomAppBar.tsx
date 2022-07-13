import React, {FC} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import {useNavigate} from "react-router-dom";
import {bindActionCreators} from "redux";
import {
    Box,
    AppBar,
    IconButton,
    Typography,
    Button,
    Toolbar
} from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';

import User from "../../Types/User";
import {actionCreators, State} from "../../State/index";
import {logOut} from "../../Modules/Auth/functions";

type CustomAppBarProps = {
    title: string
    setOpen: (open: boolean) => void
}

export const CustomAppBar: FC<CustomAppBarProps> = ({title, setOpen}) => {
    const dispatch = useDispatch();
    const {AuthUser} = bindActionCreators(actionCreators, dispatch);
    const userState = useSelector((state: State) => state.user);
    const navigate = useNavigate();

    const user: User = {
        isLoggedIn: !userState.isLoggedIn,
    };

    const onLoginClick = () => {
        AuthUser(user)
    };

    const onLogoutClicked = () => {
        logOut(); //TODO: handle navigation after successful logout ::HASTHI
        navigate("/login")
    };

    return (
        <Box sx={{flexGrow: 1}}>
            <AppBar position="static">
                <Toolbar>
                    <IconButton
                        size="large"
                        edge="start"
                        color="inherit"
                        aria-label="menu"
                        sx={{mr: 2}}
                        onClick={() => {
                            setOpen(true)
                        }}
                    >
                        <MenuIcon/>
                    </IconButton>
                    <Typography variant="h6" component="div" sx={{flexGrow: 1}}>
                        {title}
                    </Typography>
                    <Button color="inherit"
                            onClick={() => onLogoutClicked()}>{'logout'}</Button>
                </Toolbar>
            </AppBar>
        </Box>
    );
};

