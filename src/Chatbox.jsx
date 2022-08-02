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
      width: "80vw",
      height: "80vh",
      maxWidth: "500px",
      maxHeight: "700px",
      display: "flex",
      alignItems: "center",
      flexDirection: "column",
      position: "relative"
    },
    paper2: {
      width: "80vw",
      maxWidth: "500px",
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
      overflowY: "scroll",
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
          message="Hello"
          timestamp="MM/DD 00:00"
          photoURL="igdtuw.jpg"
          displayName="IGDTUW"
          avatarDisp={true}
        />




        {cart.userMessages && cart.userMessages.map((message) => (
          <>
            {message.direction === "left" ?
              (<>
                <MessageLeft
                  message={message.message}
                  timestamp="MM/DD 00:00"
                  photoURL="igdtuw.jpg"
                  displayName="IGDTUW"
                  avatarDisp={true}
                />
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
