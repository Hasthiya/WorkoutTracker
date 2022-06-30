import React, {FC} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import {bindActionCreators} from "redux";
import Box from '@mui/material/Box';
import AppBar from '@mui/material/AppBar';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import Toolbar from '@mui/material/Toolbar';
import User from "../../Types/User";
import {actionCreators, State} from "../../State/index";

type CustomAppBarProps = {
    title: string
}

export const CustomAppBar: FC<CustomAppBarProps> = ({title}) => {
    const dispatch = useDispatch();
    const {AuthUser} = bindActionCreators(actionCreators, dispatch);
    const userState = useSelector((state: State) => state.user);

    const user: User = {
        isLoggedIn: !userState.isLoggedIn,
    };

    const onLoginClick = () => {
        AuthUser(user)
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
                    >
                        <MenuIcon/>
                    </IconButton>
                    <Typography variant="h6" component="div" sx={{flexGrow: 1}}>
                        {title}
                    </Typography>
                    <Button color="inherit"
                            onClick={() => onLoginClick()}>{userState.isLoggedIn ? 'logout' : 'login'}</Button>
                </Toolbar>
            </AppBar>
        </Box>
    );
};

