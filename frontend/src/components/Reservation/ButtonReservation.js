import React from 'react';
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';

export default function ButtonReservation() {

    return (
        <div>
            <div className="flex-center">
                <Stack spacing={2} direction="row">
                    <Button
                        variant="outlined"
                        className="shipping-button"
                    >
                        Réserver
                    </Button>
                </Stack>
            </div>
        </div>
    );
}