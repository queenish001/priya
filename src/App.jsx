import React, { useState } from 'react';
import Chatbox from './Chatbox'
import Fab from '@mui/material/Fab';
import { StoreProvider } from './Store';
import MessageIcon from '@mui/icons-material/Message';
export default function App() {
 
  const [show, setShow] = useState(false);
  return (
    <StoreProvider>
    {<Chatbox></Chatbox>}
    </StoreProvider>
  );
}
