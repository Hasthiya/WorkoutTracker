import React, {FC, useEffect, useState} from "react";
import {Box, Tab, Tabs, Typography} from "@mui/material";
import WorkoutPlan from "../../Types/WorkoutPlan";

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
                    <Typography component={'span'}>{children}</Typography>
                </Box>
            )}
        </Box>
    );
};

export const WorkoutPlansTabs: FC = () => {

    const [value, setValue] = useState<number>(0);
    const [workoutPlans, setWorkoutPlans] = useState<Array<WorkoutPlan> | null>(null);

    const handleChange = (event: React.SyntheticEvent, newValue: number) => {
        setValue(newValue)
    };

    useEffect(() => {
        setWorkoutPlans(workoutPlansData)
    }, []);

    return (
        <aside>
            <Box sx={styles.tabsWrapper}>
                <Box sx={{borderBottom: 1, borderColor: 'divider'}}>
                    <Tabs value={value} variant="scrollable" onChange={handleChange}>
                        {workoutPlans && workoutPlans.map((workoutPlan) => {
                            return (
                                <Tab key={workoutPlan.id} label={workoutPlan.name}/>
                            )
                        })}
                    </Tabs>
                </Box>
                {workoutPlans && workoutPlans.map((workoutPlan, index) => {
                    return (
                        <TabPanel key={workoutPlan.id} value={value} index={index}>
                            {workoutPlan.exercises && workoutPlan.exercises.map((exercise) => {
                                return (
                                    <Box sx={styles.exerciseNameRow} key={exercise.name}>
                                        <Typography>
                                            {exercise.name}
                                        </Typography>
                                        <Box sx={styles.exerciseSetRow}>
                                            {exercise.sets && exercise.sets.map((set) => {
                                                return (
                                                    <Box sx={styles.exerciseSetColumn}>
                                                        <Typography>
                                                            {`Reps: ${set.reps}`}
                                                        </Typography>
                                                        <Typography>
                                                            {`Weight: ${set.weight}`}
                                                        </Typography>
                                                    </Box>
                                                )
                                            })}
                                        </Box>
                                    </Box>
                                )
                            })}
                        </TabPanel>
                    )
                })}
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
    exerciseNameRow: {
        display: "flex",
        flexDirection: "row",
        justifyContent: "space-between",
        backgroundColor: "primary.main",
        color: "white",
        borderRadius: 1,
        padding: 1,
        margin: 2,
    },
    exerciseSetRow: {
        display: "flex",
        flexDirection: "row",
    },
    exerciseSetColumn: {
        display: "flex",
        flexDirection: "column",
        paddingX: 2,
    },
};

const workoutPlansData = [
    {
        id: "2003IID",
        name: "Day One",
        exercises: [
            {
                name: "Dumbbell Flys",
                sets: [
                    {reps: 10, weight: 10},
                    {reps: 10, weight: 10},
                    {reps: 10, weight: 10},
                    {reps: 10, weight: 10},
                ],
            },
            {
                name: "Barbell Upright Row",
                sets: [
                    {reps: 10, weight: 50},
                    {reps: 10, weight: 50},
                    {reps: 10, weight: 50},
                    {reps: 10, weight: 50},
                ],
            },
        ],
    },
    {
        id: "2003I233",
        name: "Day Two",
        exercises: [
            {
                name: "Barbell Bicep Curl",
                sets: [
                    {reps: 10, weight: 10},
                    {reps: 10, weight: 10},
                    {reps: 10, weight: 10},
                    {reps: 10, weight: 10},
                ],
            },
            {
                name: "Dumbbell Alternative Curl",
                sets: [
                    {reps: 10, weight: 52},
                    {reps: 10, weight: 52},
                    {reps: 10, weight: 52},
                    {reps: 10, weight: 52},
                ],
            },
        ],
    },
];