import * as React from 'react';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';
import ListItemAvatar from '@mui/material/ListItemAvatar';
import Avatar from '@mui/material/Avatar';

export default function Header() {
  return (
    <>


<List sx={{ width: '100%', bgcolor: 'background.paper' }}>


      <ListItem>
        <ListItemAvatar>
        <Avatar src="igdtuw.jpg" aria-label="avatar"/>
        </ListItemAvatar>
        <ListItemText primary="IGDTUW Assistant" secondary="Indira Gandhi Delhi Technical University for Women" />
      </ListItem>
    </List>
    </>
  );
}
