import * as React from 'react';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Typography from '@mui/material/Typography';
import AccessTimeIcon from '@mui/icons-material/AccessTime';
import ForestIcon from '@mui/icons-material/Forest';
import PetsIcon from '@mui/icons-material/Pets';
import DeliveryDiningIcon from '@mui/icons-material/DeliveryDining';

export default function SimplePaper() {
    return (
        <Box
            sx={{
                display: 'flex',
                justifyContent: 'center',
                flexWrap: 'wrap',
                marginTop: '6em',
                '& > :not(style)': {
                    m: 1,
                    width: 128,
                    height: 128,
                },
            }}
        >
            <Paper className="paper">
                <Typography>
                    <AccessTimeIcon />
                    <br />
                    24/24 7/7
                </Typography>
            </Paper>
            <Paper className="paper">
                <Typography>
                    <ForestIcon />
                    <br />
                    100% naturel
                </Typography>
            </Paper>
            <Paper className="paper">
                <Typography>
                    <PetsIcon />
                    <br />
                    100% végétal
                </Typography>
            </Paper>
            <Paper className="paper">
                <Typography>
                    <DeliveryDiningIcon />
                    <br />
                    Livraison offerte
                </Typography>
            </Paper>
        </Box>
    );
}