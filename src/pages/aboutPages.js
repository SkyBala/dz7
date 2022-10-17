import React from 'react';
import { useLocation } from 'react-router-dom';
import { Box, Typography} from '@mui/material'

const AboutCharecter = () => {
    const location = useLocation()

    const char = location?.state?.item;

    console.log(char);
    return (
        <div>
            <Box>
                <Typography>{char.name}</Typography>
            </Box>
        </div>
    );
}

export default AboutCharecter;