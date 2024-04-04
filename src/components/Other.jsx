import Show from "../components/Show";
import { useLoaderData, Link } from "react-router-dom";
import otherpic from "./../images/other.jpg";

function Other(props) {
  const allShows = useLoaderData();
  const others = allShows.filter((show) => show.genre === "other");
  return (
    <div className="genre-div">
      <div className="genre-title">
        <h2>Other</h2>
        <img src={otherpic} alt="film strips" className="genre-pic" />
      </div>
      <div className="genre-list">
        {others.map((show, i) => (
          <Show show={show} key={i} />
        ))}
      </div>
    </div>
  );
}

export default Other;
