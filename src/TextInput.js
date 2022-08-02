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
    handleSubmit,
    control,reset ,
    formState: { errors } } = useForm();
  const classes = useStyles();
  const [micIcon, setMicIcon] = useState(<MicIcon />);

  async function rasa(message) {
    // console.log("rasa runned")
    const { data } = await axios.post(`http://0.0.0.0:5005/webhooks/rest/webhook`, {
      sender: "test_user",
      message: message
    });

    console.log("data response", data);
    return data.text
  }

  const submitHandler = ({ message }) => {
    reset()
    const response = 'ssss';
    dispatch({ type: 'USER_MESSAGE_SEND', payload: { message, direction: "right" } });
    dispatch({ type: 'USER_MESSAGE_SEND', payload: { response, direction: "left" } });
  };





  // //speech recog
  // // Function run on mic button onClick
  // let speechRecognition = new webkitSpeechRecognition();
  // speechRecognition.continuous = false;
  // speechRecognition.interimResults = false;
  // speechRecognition.lang = "en-IN"
  // speechRecognition.onstart = () => {
  //   //change mic icon
  // };
  // speechRecognition.onend = () => {
  //   //change mic icon back
  // };
  // let final_transcript = "";

  // speechRecognition.onresult = (event) => {
  //   // Loop through the results from the speech recognition object.
  //   for (let i = event.resultIndex; i < event.results.length; ++i) {
  //     if (event.results[i].isFinal) {
  //       final_transcript += event.results[i][0].transcript;
  //     }
  //   };
  // }


  function mic() {
    // speechRecognition.start();
    setMicIcon(<MicOffIcon />)
  }


  return (
    <>
      <form onSubmit={handleSubmit(submitHandler)} style={{ marginBottom: '1rem' }} className={classes.wrapForm} noValidate autoComplete="off">
        <Controller
          name="message"
          control={control}

          rules={{
          }}
          render={({ field }) => (
            <TextField
              fullWidth
              className={classes.wrapText}

              id="message"
              label="Message"
              error={Boolean(errors.message)}
              {...field}
            ></TextField>
          )}
        ></Controller>
        <Button variant="outline" color="primary" onClick={() => mic()} className={classes.button}>
          {micIcon}
        </Button>
        <Button type='submit' variant="outline" color="primary" className={classes.button}>
          <SendIcon />
        </Button>
      </form>
    </>
  )
}



