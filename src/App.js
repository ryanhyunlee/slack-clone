import { BrowserRouter as Router, Link, Route, Switch } from "react-router-dom";
import Header from "./components/layout/Header";
import Sidebar from "./components/layout/Sidebar";
import styled from "styled-components";

// Components
import Home from "./components/pages/Home";

const App = () => {
  return (
    <div className='app'>
      <Router>
        <>
          <Header />
          <AppBody>
            <Sidebar />
            <Switch>
              <Route exact path='/' component={Home} />
            </Switch>
          </AppBody>
        </>
      </Router>
    </div>
  );
};

export default App;

const AppBody = styled.div`
  display: flex;
  height: 100vh;
`;
