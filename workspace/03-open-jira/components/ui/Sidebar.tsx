import { useContext } from "react";
import { Box, Drawer, Divider, List, Typography, ListItemButton, ListItemIcon, ListItemText } from "@mui/material"

import InboxOutlinedIcon from '@mui/icons-material/InboxOutlined';
import EmailOutlinedIcon from '@mui/icons-material/EmailOutlined';

import { UIContext } from "../../context/ui";

const menuItems: string[] = ['Inbox', 'Starred', 'Send Email', 'Drafts'];


export const Sidebar = () => {

    const { sideMenuOpen, closeSideMenu } = useContext(UIContext);


    return (
        <Drawer anchor="left" open={sideMenuOpen} onClose={closeSideMenu}>

            <Box sx={{ width: 220 }}>

                <Box sx={{ padding: '5px 10px' }}>
                    <Typography variant="h5">Menú</Typography>
                </Box>

                <List>
                    {
                        menuItems.map((text, index) => (
                            <ListItemButton key={text}>
                                <ListItemIcon>
                                    {index % 2 ? <InboxOutlinedIcon /> : <EmailOutlinedIcon />}
                                </ListItemIcon>
                                <ListItemText primary={text} />
                            </ListItemButton>
                        ))
                    }
                </List>

                <Divider />

                <List>
                    {
                        menuItems.map((text, index) => (
                            <ListItemButton key={text}>
                                <ListItemIcon>
                                    {index % 2 ? <InboxOutlinedIcon /> : <EmailOutlinedIcon />}
                                </ListItemIcon>
                                <ListItemText primary={text} />
                            </ListItemButton>
                        ))
                    }
                </List>
            </Box>
        </Drawer >
    )
}
