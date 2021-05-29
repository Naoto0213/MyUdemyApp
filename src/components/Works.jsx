import { Link } from "react-router-dom";

const Works = () => {
  return (
    <div className="App">
      <h3>Works</h3>

      <Link to="/Works/100">
        <h3>100</h3>
      </Link>
      <Link to="/Works/999">
        <h3>999</h3>
      </Link>
    </div>
  );
};

export default Works;
