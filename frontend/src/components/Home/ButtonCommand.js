import React from 'react';
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';
import { Link } from 'react-router-dom';

export default function ButtonCommand() {

    return (
        <div>
            <div className="flex-center">
                <Stack spacing={2} direction="row">
                    <Button
                        variant="outlined"
                        className="shipping-button"
                    >
                        <Link to={'/Reservation'}>
                            Commander
                        </Link>
                    </Button>
                </Stack>
            </div>
        </div>
    );
}