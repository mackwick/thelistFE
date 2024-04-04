import Show from "../components/Show";
import { useLoaderData, Link } from "react-router-dom";
import scipic from "./../images/scifi.jpg";

function Scifi(props) {
  const allShows = useLoaderData();
  const scifi = allShows.filter((show) => show.genre === "scifi");
  return (
    <div className="genre-div">
      <div className="genre-title">
        <h2>Sci-Fi</h2>
        <img src={scipic} alt="scifi" className="genre-pic" />
      </div>
      <div className="genre-list">
        {scifi.map((show, i) => (
          <Show show={show} key={i} />
        ))}
      </div>
    </div>
  );
}

export default Scifi;
