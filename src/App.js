import { Route, Switch } from "react-router";
import { BrowserRouter as Router } from "react-router-dom";
import CustomNavbar from "./components/CustomNavbar";
import Home from "./pages/Home";
import Page from "./pages/Page";
import 'bootstrap/dist/css/bootstrap.min.css';
import AbstractPage from "./pages/AbstractPage";
import './App.css'

function App() {
  return (
    <>
      <CustomNavbar/>
      <Router>
        <Switch>
          <AbstractPage>
            <Route exact path="/" component={Home}/>
            <Route exact path="/page" component={Page}/>
          </AbstractPage>
        </Switch>
      </Router>
    </>
  );
}

export default App;
