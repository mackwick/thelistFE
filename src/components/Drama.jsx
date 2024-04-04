import Show from "../components/Show";
import { useLoaderData, Link } from "react-router-dom";
import drama from "./../images/drama.jpg";

function Drama(props) {
  const allShows = useLoaderData();
  const dramas = allShows.filter((show) => show.genre === "drama");
  return (
    <div className="genre-div">
      <div className="genre-title">
        <h2>Drama</h2>
        <img src={drama} alt="scifi" className="genre-pic" />
      </div>
      <div className="genre-list">
        {dramas.map((show, i) => (
          <Show show={show} key={i} />
        ))}
      </div>
    </div>
  );
}

export default Drama;
