import React, {FC} from 'react';
import Typography from '@mui/material/Typography';

export const NotFoundPage: FC = () => {
    return (
        <aside>
            <Typography variant="h1" component="div" sx={{flexGrow: 1}}>
                404 Not Found
            </Typography>
        </aside>
    );
};