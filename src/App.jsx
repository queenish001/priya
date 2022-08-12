import React, { useState } from 'react';
import Chatbox from './Chatbox'
import Mic from './Mic'
import Fab from '@mui/material/Fab';
import { StoreProvider } from './Store';
import MessageIcon from '@mui/icons-material/Message';

import {
  SpeechProvider
} from "@speechly/react-client";

import {
  PushToTalkButton,
  PushToTalkButtonContainer,
  BigTranscript,
  BigTranscriptContainer,
  IntroPopup
} from "@speechly/react-ui";

export default function App() {
 
  const [show, setShow] = useState(false);
  return (
    <StoreProvider>
    <Mic></Mic>
    <Chatbox></Chatbox>
    </StoreProvider>
  );
}
