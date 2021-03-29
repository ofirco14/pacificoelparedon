import { Location } from "./pages/location";
import { Restaurant } from "./pages/restaurant";
import { Place } from "./pages/place";
import { Home } from "./pages/home";
import { Rooms } from "./pages/rooms";
import { Footer } from "./components/Footer";
import { SubmittedForm } from "./pages/SubmittedForm";
import BgHeader from "./components/BgHeader";
import "./App.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { Navbar } from "./components/Navbar";
function App() {
  return (
    <div className="App">
      <Router>
        <Navbar />
        <BgHeader />
        <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          <Route exact path="/rooms">
            <Rooms />
          </Route>
          <Route exact path="/place">
            <Place />
          </Route>
          <Route exact path="/restaurant">
            <Restaurant />
          </Route>
          <Route exact path="/submitted">
            <SubmittedForm />
          </Route>
          <Route exact path="/location">
            <Location />
          </Route>
        </Switch>
        <Route
          exact
          path={["/", "/location", "/rooms", "/restaurant", "/place"]}
          component={Footer}
        />
      </Router>
    </div>
  );
}

export default App;
