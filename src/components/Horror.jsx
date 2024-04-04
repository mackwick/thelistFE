import Show from "../components/Show";
import { useLoaderData, Link } from "react-router-dom";
import horro from "./../images/creepydoll.jpg";

function Horror(props) {
  const allShows = useLoaderData();
  const horrors = allShows.filter((show) => show.genre === "horror");
  return (
    <div className="genre-div">
      <div className="genre-title">
        <h2>Horror</h2>
        <img src={horro} alt="scary bb" className="genre-pic" />
      </div>
      <div className="genre-list">
        {horrors.map((show, i) => (
          <Show show={show} key={i} />
        ))}
      </div>
    </div>
  );
}

export default Horror;
