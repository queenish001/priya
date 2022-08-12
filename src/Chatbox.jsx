import React, { useContext } from "react";
import { createStyles, makeStyles, Theme } from "@material-ui/core/styles";
import { Paper } from "@material-ui/core";
import { TextInput } from "./TextInput.js";
import { MessageLeft, MessageRight } from "./Message";
import Header from "./Header.jsx";
import { Store } from './Store';
const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    paper: {
      width: "98vw",
      height: "53%",
      backgroundColor: "#AFE1AF",
      // maxWidth: "1100px",
      // maxHeight: "300px",
      display: "flex",
      alignItems: "center",
      flexDirection: "column",
      position: "absolute",
      bottom: "10px"
    },
    paper2: {
      width: "80vw",
      maxWidth: "50vh",
      display: "flex",
      alignItems: "center",
      flexDirection: "column",
      position: "relative"
    },
    container: {
      width: "100vw",
      height: "100vh",
      display: "flex",
      alignItems: "center",
      justifyContent: "center"
    },
    messagesBody: {
      width: "calc( 100% - 20px )",
      margin: 10,
      overflowY: "auto",
      height: "calc( 100% - 80px )"
    }
  })
);

export default function Chatbox() {
  const classes = useStyles();
  const { state } = useContext(Store)
  const { cart } = state

 console.log("cart.userMessages", cart.userMessages)
  return (

    <Paper className={classes.paper}>
      <Header />
      <Paper id="style-1" className={classes.messagesBody}>
        <MessageLeft
          message="Hello! How may I help you?"
          timestamp="MM/DD 00:00"
          photoURL="igdtuw.jpg"
          displayName="Assistant"
          avatarDisp={true}
        />

        <MessageRight
          message="Hello! How may I help you?"
          timestamp="MM/DD 00:00"
          photoURL="igdtuw.jpg"
          displayName="Me"
          avatarDisp={true}
        />

<MessageRight
          message="Hello! How may I help you?"
          timestamp="MM/DD 00:00"
          photoURL="igdtuw.jpg"
          displayName="Me"
          avatarDisp={true}
        />

<MessageRight
          message="Hello! How may I help you?"
          timestamp="MM/DD 00:00"
          photoURL="igdtuw.jpg"
          displayName="Me"
          avatarDisp={true}
        />

<MessageRight
          message="Hello! How may I help you?"
          timestamp="MM/DD 00:00"
          photoURL="igdtuw.jpg"
          displayName="Me"
          avatarDisp={true}
        />

<MessageLeft
          message="Hello! How may I help you?"
          timestamp="MM/DD 00:00"
          photoURL="igdtuw.jpg"
          displayName="Me"
          avatarDisp={true}
        />




        {cart.userMessages && cart.userMessages.map((message) => (
          <>
            {message.direction === "left" ?
              (<>
                <MessageLeft
                  message={message.res}
                 
                  timestamp="MM/DD 00:00"
                  photoURL="igdtuw.jpg"
                  displayName="IGDTUW"
                  avatarDisp={true}
                />
                {message.image?(<img width={200} height={200} src={message.image} />):(null)}
                
              </>) : (<>
                <MessageRight
                  message={message.message}
               
                  timestamp="MM/DD 00:00"
                  photoURL="https://lh3.googleusercontent.com/a-/AOh14Gi4vkKYlfrbJ0QLJTg_DLjcYyyK7fYoWRpz2r4s=s96-c"
                  avatarDisp={false}
                />
              </>)}
          </>

        ))}


      </Paper>
      <TextInput />
    </Paper>

  );
}
