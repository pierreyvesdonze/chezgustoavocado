import React, { useState } from 'react';
import BottomNavigation from '@mui/material/BottomNavigation';
import BottomNavigationAction from '@mui/material/BottomNavigationAction';
import EventSeatIcon from '@mui/icons-material/EventSeat';
import HomeIcon from '@mui/icons-material/Home';
import CallIcon from '@mui/icons-material/Call';
import Paper from '@mui/material/Paper';
import { Link } from 'react-router-dom';

export default function FixedBottomNavigation() {
    const [value, setValue] = useState(0);

    return (
        <Paper className="bottom-app-bar" sx={{ position: 'fixed', bottom: 0, backgroundColor: "#c0d4ab00" }} elevation={3}>
            <BottomNavigation
                className="bottom-app-bar-content"
                showLabels
                value={value}
                onChange={(event, newValue) => {
                    setValue(newValue);
                }}
            >
                <BottomNavigationAction
                    component={Link}
                    to="/reservation"
                    icon={<EventSeatIcon sx={{ color: "white" }} />
                    }
                />

                <BottomNavigationAction
                    component={Link}
                    to="/"
                    icon={<HomeIcon sx={{ color: "white" }} />
                    }
                />

                <BottomNavigationAction
                    component={Link}
                    to="/contact"
                    icon={<CallIcon sx={{ color: "white" }} />
                    }
                />
            </BottomNavigation>
        </Paper>
    );
}
