import { useParams, useLocation } from "react-router-dom";

const UrlParametor = () => {
  const location = useLocation();
  const { id } = useParams();
  const { search } = useLocation;
  const query = new URLSearchParams(search);
  console.log(query);
  return (
    <div>
      <p>パラメーターは{id}です</p>
    </div>
  );
};

export default UrlParametor;
