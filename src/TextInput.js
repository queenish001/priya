import React, { useContext, useState } from 'react'
import TextField from '@material-ui/core/TextField';
import { createStyles, makeStyles, Theme } from "@material-ui/core/styles";
import SendIcon from '@material-ui/icons/Send';
import Button from '@material-ui/core/Button';
import MicIcon from '@mui/icons-material/Mic';
import MicOffIcon from '@mui/icons-material/MicOff';
import { Controller, useForm } from 'react-hook-form';
import axios from 'axios';
import { Store } from './Store';

import { SpeechProvider } from "@speechly/react-client";

import { PushToTalkButton, PushToTalkButtonContainer,
  BigTranscript,
  BigTranscriptContainer,
  IntroPopup } from "@speechly/react-ui";


const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    wrapForm: {
      display: "flex",
      justifyContent: "center",
      width: "95%",
      margin: `${theme.spacing(0)} auto`
    },
    wrapText: {
      width: "100%"
    },
    button: {
      //margin: theme.spacing(1),
    },
  })
);



export const TextInput = () => {
  const { dispatch } = useContext(Store);
  const {
    handleSubmit, resetField,
    control,reset ,
    formState: { errors } } = useForm();
  const classes = useStyles();
  const [micIcon, setMicIcon] = useState(<MicIcon />);




 async function submitHandler({ message }) {
    resetField('message');
    const { data } = await axios.post(`https://15db-106-210-32-126.in.ngrok.io/webhooks/rest/webhook`, {
      sender: "test_user",
      message: message
    });

    console.log("data response", data);
    let res =data[0].text;
    dispatch({ type: 'USER_MESSAGE_SEND', payload: { message, direction: "right" } });
    
    if(data[1] === undefined){
        console.log("res",{res, direction: "left"});
        dispatch({ type: 'USER_MESSAGE_SEND', payload: { res, direction: "left"} });
    }
    else{
      dispatch({ type: 'USER_MESSAGE_SEND', payload: { res, direction: "left" , image:data[1].image?data[1].image:null} });
    }

  };

  speechResponseSpeak("");

  function speechResponseSpeak(message)
  {
     let message_stripped = message.replace("?", "");
  
    var msg = new SpeechSynthesisUtterance();
  
    // These lines list all of the voices which can be used in speechSynthesis
    var voices = speechSynthesis.getVoices();
    //console.log(voices);
    
    
    msg.default = false;
      msg.voiceURI = "Veena";
    msg.voice = voices[40];
    msg.localService = true;
      msg.text = message_stripped;
      msg.lang = "en-IN";
    msg.rate = 1.3;
    msg.volume = 100;
      window.speechSynthesis.speak(msg);
  
  }

  async function speechSubmitHandler(message) {
    const { data } = await axios.post(`https://15db-106-210-32-126.in.ngrok.io/webhooks/rest/webhook`, {
      sender: "test_user",
      message: message
    });

    console.log("data response", data);
    let res =data[0].text;
    if (res === "")
    res = "ERROR"
    dispatch({ type: 'USER_MESSAGE_SEND', payload: { message, direction: "right" } });
    
    if(data[1] === undefined){
        console.log("res",{res, direction: "left"});
        dispatch({ type: 'USER_MESSAGE_SEND', payload: { res, direction: "left"} });
    }
    else{
      dispatch({ type: 'USER_MESSAGE_SEND', payload: { res, direction: "left" , image:data[1].image?data[1].image:null} });
    }
    speechResponseSpeak(res); 
   };

  //speech recog
  // Function run on mic button onClick
  let speechRecognition = new window.webkitSpeechRecognition();
  speechRecognition.continuous = false;
  speechRecognition.interimResults = false;
  speechRecognition.lang = "en-IN"
  speechRecognition.onstart = () => {
    //change mic icon
  };
  speechRecognition.onend = () => {
    //change mic icon back
    speechRecognition.stop();
  };
  let final_transcript = "";

  speechRecognition.onresult = (event) => {
    // Loop through the results from the speech recognition object.
    for (let i = event.resultIndex; i < event.results.length; ++i) {
      if (event.results[i].isFinal) {
        final_transcript += event.results[i][0].transcript;
        console.log(final_transcript);
        speechSubmitHandler(final_transcript);
        setMicIcon(<MicIcon />)
     }
    };
  }

let flag = false;
  function mic() {
    if (flag===false) {
  speechRecognition.start();
    setMicIcon(<MicOffIcon />)
    flag = true;
    console.log(flag)
    }
    else{
      speechRecognition.stop();
      setMicIcon(<MicIcon />)
      flag = false;
      console.log(flag)
    }
    
  }


  return (
    <>
      <form onSubmit={handleSubmit(submitHandler)} style={{ marginBottom: '1rem' }} className={classes.wrapForm} noValidate autoComplete="off">
      <Controller
          name="message"
          control={control}
          defaultValue=""
          rules={{
            required: true,
          }}
          render={({ field }) => (
            <TextField
              fullWidth
              id="message"
              label="Message"
              inputProps={{ type: 'text' }}
              error={Boolean(errors.message)}
              helperText={
                errors.message ? 'Message is required'
                  : ''
              }
              {...field}
            ></TextField>
          )}
        ></Controller>
        <Button onClick={() => mic()} className={classes.button}>
          {micIcon}
        </Button>
        <Button type='submit'  className={classes.button}>
          <SendIcon />
        </Button>
      </form>
    </>
  )
}



