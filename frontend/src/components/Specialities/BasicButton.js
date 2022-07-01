import React from 'react';
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';
import { Link } from 'react-router-dom';

export default function BasicButton() {

    return (
        <div>
            <Stack spacing={2} direction="row">
                <Button
                    variant="outlined"
                    className="show-button"
                >
                    <Link to={'/show'}>
                        Voir
                    </Link>
                </Button>
            </Stack>
        </div>
    );
}