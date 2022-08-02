import * as React from 'react';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';
import ListItemAvatar from '@mui/material/ListItemAvatar';
import Avatar from '@mui/material/Avatar';

export default function Header() {
  return (
    <>
    
   
      {/* <CardHeader
        avatar={
          <Avatar src="igdtuw.jpg" aria-label="avatar"/>
        }
        action={
          <IconButton aria-label="settings">
            <MoreVertIcon />
          </IconButton>
        }
        title="IGDTUW"
        subheader="ChatBot using Rasa"
      /> */}


<List sx={{ width: '100%', bgcolor: 'background.paper' }}>


      <ListItem>
        <ListItemAvatar>
        <Avatar src="igdtuw.jpg" aria-label="avatar"/>
        </ListItemAvatar>
        <ListItemText primary="IGDTUW" secondary="ChatBot using Rasa" />
      </ListItem>
    </List>
    </>
  );
}
