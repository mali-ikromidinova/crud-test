import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { Content, GlobalStyle } from "./globalStyle";
import Home from "./Components/Home";
import Navbar from "./Components/Navbar";
import NumberItem from "./Components/NumberItem";
import Create from "./Components/Create";

function App() {
  return (
    <Router>
      <GlobalStyle />
      <Navbar />
      <Content>
        <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          <Route path="/create">
            <Create />
          </Route>
          <Route path="/numbers/:id">
            <NumberItem />
          </Route>
        </Switch>
      </Content>
    </Router>
  );
}

export default App;
