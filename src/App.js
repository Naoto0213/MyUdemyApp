import "./App.css";
import { BrowserRouter, Link } from "react-router-dom";
import Router from "./Router/Router";

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Link to="/">Home</Link>
        <br />
        <Link to="/Profile">Profile</Link>
        <br />
        <Link to="/Works">Works</Link>
        <br />
      </div>
      <Router />
    </BrowserRouter>
  );
}

export default App;
