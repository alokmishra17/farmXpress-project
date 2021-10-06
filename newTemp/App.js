import {
  BrowserRouter,
  NavLink,
  Link,
  Redirect,
  Route,
  Switch,
} from "react-router-dom";

import Home from "./Home";
import About from "./About";
import Post from "./Post";
import Posts from "./Posts";
import NotFound from "./NotFound";

function App() {
  return (
    <BrowserRouter>
      {/* <a href="/">Home</a>
      <a href="/about">About</a>
      <a href="/posts">Posts</a> */}

      <Link to="/home">Home</Link>
      <NavLink to="/about" activeStyle={{ color: "green" }}>
        About
      </NavLink>
      <NavLink to="/posts" activeClass="active">
        Posts
      </NavLink>

      <Switch>
        <Route path="/home" component={Home} />
        <Route path="/about" component={About} />
        <Route path="/posts/:id" component={Post} />
        <Route path="/posts" component={Posts} />
        <Route path="/" exact>
          <Redirect to="/home" />
        </Route>
        {/* Wild Card Route */}
        <Route path="*" component={NotFound} />
      </Switch>
    </BrowserRouter>
  );
}

export default App;
