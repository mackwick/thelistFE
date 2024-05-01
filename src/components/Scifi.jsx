import Show from "../components/Show";
import { useLoaderData, Link } from "react-router-dom";
import scipic from "./../images/scifi.jpg";
import { useUser } from "@clerk/clerk-react";

function Scifi(props) {
  const { user } = useUser();
  const allShows = useLoaderData();
  const userShows = allShows.filter((x) => {
    return x.user === user?.id;
  });
  const scifi = userShows.filter((show) => show.genre === "scifi");

  if (scifi.length === 0) {
    return (
      <div className="genre-div">
        <div className="genre-title">
          <h2>Sci-Fi</h2>
          <img src={scipic} alt="scifi" className="genre-pic" />
        </div>
        <div className="genre-list">
          <p className="filler-text">
            Nothing to see here! Add some scifi to your list.
          </p>
        </div>
      </div>
    );
  } else {
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
}

export default Scifi;
