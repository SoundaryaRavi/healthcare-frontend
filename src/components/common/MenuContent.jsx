import * as React from 'react';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemText from '@mui/material/ListItemText';
import Stack from '@mui/material/Stack';
import Link from '@mui/material/Link';

const mainListItems = [
    { text: 'Dashboard', path: '/dashboard' },
    { text: 'My Profile', path: '/profile' },
    { text: 'Wellness Goals', path: '/goals' },
    { text: 'Messages', path: '/messages' },
];

export default function MenuContent() {
    return (
        <Stack sx={{ flexGrow: 1, p: 1, justifyContent: 'space-between' }}>
            <List dense>
                {mainListItems.map((item, index) => (
                    <ListItem key={index} disablePadding sx={{ display: 'block' }}>
                        <ListItemButton selected={index === 0}>
                            <Link
                                href={item.path}
                                variant="body2"
                                sx={{ alignSelf: 'center', color: '#000', textDecoration: 'none' }}
                            >
                                <ListItemText primary={item.text} />
                            </Link>
                        </ListItemButton>
                    </ListItem>
                ))}
            </List>
        </Stack>
    );
}
