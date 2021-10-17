import { SidebarOptionContainer, SidebarOptionChannel } from "./SidebarStyles";

import { useDispatch } from "react-redux";
import { enterRoom } from "../../../actions";

// Firebase /
import { useCollection } from "react-firebase-hooks/firestore";
import { db } from "../../../firebase";

const SidebarOption = ({ Icon, title, addChannelOption, id }) => {
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
      {Icon && <Icon fontSize='small' style={{ padding: "10px" }} />}
      {Icon ? (
        <h3>{title}</h3>
      ) : (
        <SidebarOptionChannel>
          <span>#</span> {title}
        </SidebarOptionChannel>
      )}
    </SidebarOptionContainer>
  );
};

export default SidebarOption;
