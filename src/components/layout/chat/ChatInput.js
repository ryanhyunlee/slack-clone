import { ChatInputContainer } from "./ChatStyles";
import { useState } from "react";
import { Button } from "@material-ui/core";

import { db, auth } from "../../../firebase";
import { useAuthState } from "react-firebase-hooks/auth";
import firebase from "firebase";

const ChatInput = ({ channelName, channelId, chatRef }) => {
  const [text, setText] = useState("");
  const [user] = useAuthState(auth);

  const sendMessage = (e) => {
    e.preventDefault();

    if (!channelId) {
      return false;
    }

    db.collection("rooms").doc(channelId).collection("messages").add({
      message: text,
      timestamp: firebase.firestore.FieldValue.serverTimestamp(),
      user: user.displayName,
      userImage: user.photoURL,
    });

    chatRef?.current?.scrollIntoView({ behavior: "smooth" });

    setText("");
  };

  const onChange = (e) => {
    setText(e.target.value);
  };

  return (
    <ChatInputContainer>
      <form>
        <input
          type='text'
          onChange={onChange}
          placeholder={`Message #${channelName}`}
          value={text}
        />
        <Button hidden type='submit' onClick={sendMessage}>
          SEND
        </Button>
      </form>
    </ChatInputContainer>
  );
};

export default ChatInput;
