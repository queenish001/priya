import React, { useState } from 'react';
import Chatbox from './Chatbox'
import Fab from '@mui/material/Fab';
import { StoreProvider } from './Store';
import MessageIcon from '@mui/icons-material/Message';
export default function App() {
 
  const [show, setShow] = useState(false);
  return (
    <StoreProvider>
    <Fab sx={{ position: 'absolute',bottom: 16,right: 16}} color="primary" onClick={() => setShow(prev => !prev)}>
        <MessageIcon />
      </Fab>
   
     {show && <Chatbox></Chatbox>}
    </StoreProvider>
  );
}
