import * as React from 'react';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';
import ListItemAvatar from '@mui/material/ListItemAvatar';
import Avatar from '@mui/material/Avatar';
import LocalPhoneIcon from '@mui/icons-material/LocalPhone';
import EmailIcon from '@mui/icons-material/Email';
import LocationOnIcon from '@mui/icons-material/LocationOn';

export default function Contact() {
    return (
        <>
            <h1>Contact</h1>
            <List sx={{ width: '100%', maxWidth: 360 }} className="contact-list">
                <ListItem>
                    <ListItemAvatar>
                        <Avatar>
                            <LocalPhoneIcon />
                        </Avatar>
                    </ListItemAvatar>
                    <ListItemText primary="Tel" secondary="06 06 06 06 06" />
                </ListItem>
                <ListItem>
                    <ListItemAvatar>
                        <Avatar>
                            <EmailIcon />
                        </Avatar>
                    </ListItemAvatar>
                    <ListItemText primary="Email" secondary="contact@chezgustoavocado.com" />
                </ListItem>
                <ListItem>
                    <ListItemAvatar>
                        <Avatar>
                            <LocationOnIcon />
                        </Avatar>
                    </ListItemAvatar>
                    <ListItemText primary="Adresse" secondary="3 rue du resto, 54000 Nancy" />
                </ListItem>
            </List>
        </>
    );
}
