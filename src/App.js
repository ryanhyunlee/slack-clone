import { BrowserRouter as Router, Link, Route, Switch } from "react-router-dom";

// Components
import Home from "./components/pages/Home";

const App = () => {
  return (
    <div className='app'>
      <Router>
        <>
          <Switch>
            <Route exact path='/' component={Home} />
          </Switch>
        </>
      </Router>
    </div>
  );
};

export default App;
