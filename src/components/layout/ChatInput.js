import { useState } from "react";
import { Button } from "@material-ui/core";
import styled from "styled-components";
import { db } from "../../firebase";
import firebase from "firebase";

const ChatInput = ({ channelName, channelId }) => {
  const [text, setText] = useState("");

  const sendMessage = (e) => {
    e.preventDefault();

    if (!channelId) {
      return false;
    }

    db.collection("rooms").doc(channelId).collection("messages").add({
      message: text,
      timestamp: firebase.firestore.FieldValue.serverTimestamp(),
      user: "Ryan Lee",
      userImage:
        "https://cdn.vox-cdn.com/thumbor/TEXaW-u76LZwYGT_VzmuhCoF52s=/1400x1400/filters:format(jpeg)/cdn.vox-cdn.com/uploads/chorus_asset/file/22802887/IMG_DE272BF718E8_1.jpeg",
    });
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

const ChatInputContainer = styled.div`
  border-radius: 20px;

  > form {
    position: relative;
    display: flex;
    justify-content: center;
  }

  > form > input {
    position: fixed;
    bottom: 30px;
    width: 60%;
    border: 1px solid gray;
    border-radius: 3px;
    padding: 20px;
    outline: none;
  }

  > form > button {
    display: none !important;
  }
`;
