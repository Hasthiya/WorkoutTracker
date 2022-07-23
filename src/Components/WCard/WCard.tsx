import React, {FC, ReactNode} from 'react';
import {Box, Typography} from "@mui/material";

interface Props {
    title: string
    children?: ReactNode;
}

export const WCard: FC<Props> = ({children = <aside/>, title}) => {
    return (
        <aside>
            <Box sx={styles.cardWrapper}>
                <Typography variant="h5" sx={styles.header}>
                    {title}
                </Typography>
                <Box sx={styles.body}>
                    {children}
                </Box>
            </Box>
        </aside>
    );
};

const styles = {
    cardWrapper: {
        flexGrow: 1
    },
    header: {
        padding: 2,
        paddingBottom: 0,
    },
    body: {
        padding: 2,
    }
};