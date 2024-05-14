import  Typography  from '@mui/material/Typography';
import Box from '@mui/material/Box';
import React from 'react'

const CustomTabPanelUI = (props) => {
    const { children, value, index, ...other } = props;

    return (
        <div
            
            role="tabpanel"
            hidden={value !== index}
            id={`simple-tabpanel-${index}`}
            aria-labelledby={`simple-tab-${index}`}
            {...other}
        >
            {value === index && (
                <Box sx={{ p: 3 }}>
                    <Typography>{children}</Typography>
                </Box>
            )}
        </div>
    );
}

export default CustomTabPanelUI