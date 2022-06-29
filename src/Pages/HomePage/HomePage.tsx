import React, {FC} from 'react';
import Typography from '@mui/material/Typography';

export const HomePage: FC = () => {
    return (
        <aside>
            <Typography variant="h1" component="div" sx={{flexGrow: 1}}>
                'Home Page'
            </Typography>
        </aside>
    );
};

