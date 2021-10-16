import styled from "styled-components";

const Chat = () => {
  return (
    <ChatContainer>
      <h3>Chat</h3>
      <ChatHeader>
        <ChatHeaderLeft />
        <ChatHeaderRight />
      </ChatHeader>
    </ChatContainer>
  );
};

export default Chat;

const ChatContainer = styled.div`
  flex: 0.7;
  flex-grow: 1;
  overflow-y: scroll;
  margin-top: 60px;
`;

const ChatHeader = styled.div``;
const ChatHeaderLeft = styled.div``;
const ChatHeaderRight = styled.div``;
