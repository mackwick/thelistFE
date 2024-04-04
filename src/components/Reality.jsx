import Show from "../components/Show";
import { useLoaderData, Link } from "react-router-dom";
import realitypic from "./../images/reality.jpg";

function Reality(props) {
  const allShows = useLoaderData();
  const reality = allShows.filter((show) => show.genre === "reality");
  return (
    <div className="genre-div">
      <div className="genre-title">
        <h2>Reality/Docs</h2>
        <img src={realitypic} alt="ladies walking" className="genre-pic" />
      </div>
      <div className="genre-list">
        {reality.map((show, i) => (
          <Show show={show} key={i} />
        ))}
      </div>
    </div>
  );
}

export default Reality;
