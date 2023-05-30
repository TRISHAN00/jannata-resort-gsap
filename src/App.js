import { Route, Switch, useLocation } from "react-router-dom";
import Error from "./pages/404";
import GlobalStyle from "./styles/globalStyle";

// page imports
import About from "./pages/about";
import Components from "./pages/components";
import Home from "./pages/home";
import Project from "./pages/project";
import ProjectDetail from "./pages/project/single";
import Spa from "./components/Resort";

function App() {
  const location = useLocation();

  return (
    <>
      <GlobalStyle />
      <Switch location={location} key={"location.pathname"}>
        <Route exact path="/" component={Home} />
        <Route exact path="/components" component={Components} />
        <Route exact path="/about" component={About} />
        <Route exact path={`/project`} component={Project} />
        <Route exact path={`/spa`} component={Spa} />
        <Route exact path={`/project/:slug`} component={ProjectDetail} />
        <Route component={Error} />
      </Switch>
    </>
  );
}

export default App;
