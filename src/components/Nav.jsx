import React from "react";
import List from '@mui/material/List';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import LightbulbIcon from '@mui/icons-material/Lightbulb';
import NotificationsNoneIcon from '@mui/icons-material/NotificationsNone';
import BookmarkIcon from '@mui/icons-material/Bookmark';
import EditIcon from '@mui/icons-material/Edit';
import ArchiveIcon from '@mui/icons-material/Archive';
import DeleteIcon from '@mui/icons-material/Delete';

function Nav(){
    return(
    <section>
            <List
        sx={{ width: '100%', maxWidth: 260, bgcolor: 'background.paper' }}
        component="nav"
        aria-labelledby="nested-list-subheader">
        <ListItemButton>
          <ListItemIcon>
            <LightbulbIcon/>
          </ListItemIcon>
          <ListItemText primary="Notes" />
        </ListItemButton>
        <ListItemButton>
          <ListItemIcon>
            <NotificationsNoneIcon />
          </ListItemIcon>
          <ListItemText primary="Reminders" />
        </ListItemButton>
        <ListItemButton>
          <ListItemIcon>
            <BookmarkIcon />
          </ListItemIcon>
          <ListItemText primary="sfg" />
        </ListItemButton>
        <ListItemButton>
          <ListItemIcon>
            <EditIcon />
          </ListItemIcon>
          <ListItemText primary="Edit Labels" />
        </ListItemButton>
        <ListItemButton>
          <ListItemIcon>
            <ArchiveIcon />
          </ListItemIcon>
          <ListItemText primary="Archive" />
        </ListItemButton>
        <ListItemButton>
          <ListItemIcon>
            <DeleteIcon />
          </ListItemIcon>
          <ListItemText primary="Bin" />
        </ListItemButton>
        </List>
    </section>)

}
export default Nav;