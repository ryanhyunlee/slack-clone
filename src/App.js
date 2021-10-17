import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Header from "./components/layout/header/Header";
import Sidebar from "./components/layout/sidebar/Sidebar";
import styled from "styled-components";
import { useAuthState } from "react-firebase-hooks/auth";
import { auth } from "./firebase";

// Components
import Chat from "./components/pages/Chat";
import Login from "./components/pages/Login";

const App = () => {
  const [user, loading] = useAuthState(auth);

  return (
    <div className='app'>
      <Router>
        {user ? (
          <Login />
        ) : (
          <>
            <Header />
            <AppBody>
              <Sidebar />
              <Switch>
                <Route exact path='/' component={Chat} />
              </Switch>
            </AppBody>
          </>
        )}
      </Router>
    </div>
  );
};

export default App;

const AppBody = styled.div`
  display: flex;
  height: 100vh;
`;
