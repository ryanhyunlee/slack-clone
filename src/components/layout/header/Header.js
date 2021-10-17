import {
  HeaderContainer,
  HeaderLeft,
  HeaderAvatar,
  HeaderSearch,
  HeaderRight,
} from "./HeaderStyles";

import { useAuthState } from "react-firebase-hooks/auth";
import { auth } from "../../../firebase";

// import { Link } from 'react-router-dom'
import AccessTimeIcon from "@material-ui/icons/AccessTime";
import SearchIcon from "@material-ui/icons/Search";
import HelpOutlineIcon from "@material-ui/icons/HelpOutline";

const Header = () => {
  const [user] = useAuthState(auth);

  return (
    <HeaderContainer>
      <HeaderLeft>
        <HeaderAvatar
          onClick={() => auth.signOut()}
          alt={user?.displayName}
          src={user?.photoURL}
        />
        <AccessTimeIcon />
      </HeaderLeft>

      <HeaderSearch>
        <SearchIcon />
        <input placeholder='Search' />
      </HeaderSearch>

      <HeaderRight>
        <HelpOutlineIcon />
      </HeaderRight>
    </HeaderContainer>
  );
};

export default Header;
