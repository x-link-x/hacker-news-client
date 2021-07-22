import {BrowserRouter as Router, Route, Switch} from "react-router-dom";
import NavBar from "./components/NavBar";
import Search from "./containers/Search"
import StoryContainer from "./containers/StoryContainer";

import './App.css';

function App() {
  return (
    <>
      <Router>
        <>
          <NavBar/>
          <Switch>
          <Route exact path="/" component={StoryContainer}/>
          <Route path="/search" component={Search}/>
          </Switch>
        </>
      </Router>
    </>
  );
}

export default App;
