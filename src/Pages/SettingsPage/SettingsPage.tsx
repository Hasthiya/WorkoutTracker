import React, {FC} from 'react';
import Typography from '@mui/material/Typography';

export const SettingsPage: FC = () => {
    return (
        <aside>
            <Typography variant="h1" component="div" sx={{flexGrow: 1}}>
                Settings Page
            </Typography>
        </aside>
    );
};