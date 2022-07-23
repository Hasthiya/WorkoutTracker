import React, {FC} from 'react';
import {Grid, Box, Typography} from "@mui/material";
import {WCard} from "../../Components/WCard/WCard";
import {WorkoutPlansTabs} from "../../Components/WorkoutTabs/WorkoutTabs";

export const HomePage: FC = () => {
    return (
        <aside>
            <Box sx={styles.homeContentWrapper}>
                <Grid container spacing={2}>
                    <Grid item xs={12} md={6}>
                        <WCard title={"Workout Plans"}>
                            <WorkoutPlansTabs/>
                        </WCard>
                    </Grid>
                    <Grid item xs={12} md={6}>
                        <WCard title={"Personal Info"}>
                            <Typography variant="body1">
                                {"This is your personal information"}
                            </Typography>
                        </WCard>
                    </Grid>
                </Grid>
            </Box>
        </aside>
    );
};

const styles = {
    homeContentWrapper: {
        flexGrow: 1
    },
};
