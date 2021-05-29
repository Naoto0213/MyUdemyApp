import { Link } from "react-router-dom";

const Profile = () => {
  const Arr = [...Array(100).keys()];
  console.log(Arr);
  return (
    <div className="App">
      <h3>Profile</h3>
      <Link to={{ pathname: "Profile/ProfileOld" }}>
        <h3>Old</h3>
      </Link>
      <Link to="Profile/ProfileFrom">
        <h3>From</h3>
      </Link>
    </div>
  );
};

export default Profile;
