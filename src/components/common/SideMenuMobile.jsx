import * as React from 'react';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import Divider from '@mui/material/Divider';
import Drawer, { drawerClasses } from '@mui/material/Drawer';
import Stack from '@mui/material/Stack';
import Typography from '@mui/material/Typography';
import LogoutRoundedIcon from '@mui/icons-material/LogoutRounded';
import NotificationsRoundedIcon from '@mui/icons-material/NotificationsRounded';
import MenuButton from './MenuButton';
import MenuContent from './MenuContent';

export default function SideMenuMobile({ open, toggleDrawer }) {
    return (
        <Drawer
            anchor="right"
            open={open}
            onClose={toggleDrawer(false)}
            sx={{
                zIndex: (theme) => theme.zIndex.drawer + 1,
                [`& .${drawerClasses.paper}`]: {
                    backgroundImage: 'none',
                    backgroundColor: 'background.paper',
                },
            }}
        >
            <Stack
                sx={{
                    maxWidth: '70dvw',
                    height: '100%',
                }}
            >
                <Stack sx={{ flexGrow: 1 }}>
                    <MenuContent />
                    <Divider />
                </Stack>
                <Stack sx={{ p: 2 }}>
                    <Button variant="outlined" fullWidth startIcon={<LogoutRoundedIcon />}>
                        Logout
                    </Button>
                </Stack>
            </Stack>
        </Drawer>
    );
}
