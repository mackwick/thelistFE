import Show from "../components/Show";
import { useLoaderData, Link } from "react-router-dom";
import comedy from "./../images/comedy.jpg";

function Comedy(props) {
  const allShows = useLoaderData();
  const comedies = allShows.filter((show) => show.genre === "comedy");
  return (
    <div className="genre-div">
      <div className="genre-title">
        <h2>Comedy</h2>
        <img src={comedy} alt="comedy" className="genre-pic" />
      </div>
      <div className="genre-list">
        {comedies.map((show, i) => (
          <Show show={show} key={i} />
        ))}
      </div>
    </div>
  );
}

export default Comedy;
