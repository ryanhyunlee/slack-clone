import { SidebarOptionContainer, SidebarOptionChannel } from "./SidebarStyles";

import { useState } from "react";
import { useDispatch } from "react-redux";
import { enterRoom } from "../../../actions";
import ReactJoyride from "react-joyride";

// Firebase /
import { useCollection } from "react-firebase-hooks/firestore";
import { db } from "../../../firebase";

const SidebarOption = ({ Icon, title, addChannelOption, id }) => {
  const [steps, setSteps] = useState([
    {
      target: ".showMsg",
      content: "Add Channel or click channel to start chatting",
    },
  ]);

  const [channels, loading, error] = useCollection(db.collection("rooms"));
  const dispatch = useDispatch();

  const addChannel = () => {
    const channelName = prompt("Please enter the channel name");

    if (channelName) {
      db.collection("rooms").add({
        name: channelName,
      });
    }
  };

  const selectChannel = () => {
    if (id) {
      dispatch(enterRoom(id));
    }
  };

  return (
    <SidebarOptionContainer
      onClick={addChannelOption ? addChannel : selectChannel}
    >
      <ReactJoyride steps={steps} />
      {Icon && <Icon fontSize='small' style={{ padding: "10px" }} />}
      {Icon ? (
        <h3>{title}</h3>
      ) : (
        <SidebarOptionChannel className='showMsg'>
          <span>#</span> {title}
        </SidebarOptionChannel>
      )}
    </SidebarOptionContainer>
  );
};

export default SidebarOption;
