import React, {FC, useState} from "react";
import {Box, Tab, Tabs, Typography} from "@mui/material";

interface TabPanelProps {
    children?: React.ReactNode;
    index: number;
    value: number;
}

const TabPanel = (props: TabPanelProps) => {
    const {children, value, index} = props;

    return (
        <Box>
            {value === index && (
                <Box sx={{p: 3}}>
                    <Typography>{children}</Typography>
                </Box>
            )}
        </Box>
    );
};

export const WorkoutsTabs: FC = () => {

    const [value, setValue] = useState<number>(0);
    const handleChange = (event: React.SyntheticEvent, newValue: number) => {
        setValue(newValue)
    };

    return (
        <aside>
            <Box sx={styles.tabsWrapper}>
                <Box sx={{borderBottom: 1, borderColor: 'divider'}}>
                    <Tabs value={value} variant="scrollable" onChange={handleChange}>
                        <Tab label="Day One"/>
                        <Tab label="Day Two"/>
                        <Tab label="Day Three"/>
                        <Tab label="Day Three"/>
                        <Tab label="Day Three"/>
                    </Tabs>
                </Box>
                <TabPanel value={value} index={0}>
                    Day One
                </TabPanel>
                <TabPanel value={value} index={1}>
                    Day Two
                </TabPanel>
                <TabPanel value={value} index={2}>
                    Day Three
                </TabPanel>
            </Box>
        </aside>
    );
};

const styles = {
    tabsWrapper: {
        width: "100%",
        border: 1,
        borderColor: 'divider',
        borderRadius: 1,
    },
};