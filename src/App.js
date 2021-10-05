import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Header from "./Components/Header/Header";
import Container from "./Components/Container/Container";
import Footer from "./Components/Footer/Footer";
import NotFound from "./Components/NotFound/NotFound";
import Courses from "./Components/Courses/Courses";
import Instructors from "./Components/Instructors/Instructors";
import About from "./Components/About/About";

function App() {
  return (
    <div>
      <Router>
        <Header></Header>
        <Switch>
          <Route exact path="/home">
            <Container></Container>
          </Route>
          <Route exact path="/courses">
            <Courses></Courses>
          </Route>
          <Route exact path="/instructors">
            <Instructors></Instructors>
          </Route>
          <Route exact path="/about">
            <About></About>
          </Route>
          <Route exact path="/">
            <Container></Container>
          </Route>
          <Route path="*">
            <NotFound></NotFound>
          </Route>
        </Switch>
        <Footer></Footer>
      </Router>
    </div>
  );
}

export default App;
