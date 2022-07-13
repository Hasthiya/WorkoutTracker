import React, {FC} from 'react';
import {useNavigate} from "react-router-dom";
import {Box, ListItem, ListItemButton, ListItemIcon, ListItemText, SwipeableDrawer} from "@mui/material";
import SettingsIcon from '@mui/icons-material/Settings';
import HomeIcon from '@mui/icons-material/Home';

type SideDrawerProps = {
    open: boolean
    setOpen: (open: boolean) => void
}

const SideDrawer: FC<SideDrawerProps> = ({open, setOpen}) => {
    const menuItems = [
        {name: "Home", link: "/home", icon: <HomeIcon/>},
        {name: "Settings", link: "/settings", icon: <SettingsIcon/>},
    ];

    const navigate = useNavigate();

    return (
        <aside>
            <SwipeableDrawer
                anchor={"left"}
                open={open}
                onClose={() => setOpen(false)}
                onOpen={() => setOpen(true)}
            >
                <Box sx={styles.drawer}>
                    {menuItems && menuItems.map(({name, link, icon}) => {
                        return (
                            <ListItem key={name} disablePadding>
                                <ListItemButton onClick={() => {
                                    navigate(link);
                                    setOpen(false)
                                }}>
                                    <ListItemIcon>
                                        {icon}
                                    </ListItemIcon>
                                    <ListItemText primary={name}/>
                                </ListItemButton>
                            </ListItem>
                        )
                    })}
                </Box>
            </SwipeableDrawer>
        </aside>
    );
};

export default SideDrawer;

const styles = {
    drawer: {
        marginTop: 2,
        width: 200,
    },
};