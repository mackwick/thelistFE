import Show from "../components/Show";
import { useLoaderData, Link } from "react-router-dom";
import drama from "./../images/drama.jpg";
import { useUser } from "@clerk/clerk-react";

function Drama(props) {
  const { user } = useUser();
  const allShows = useLoaderData();
  const userShows = allShows.filter((x) => {
    return x.user === user?.id;
  });
  const dramas = userShows.filter((show) => show.genre === "drama");

  if (dramas.length === 0) {
    return (
      <div className="genre-div">
        <div className="genre-title">
          <h2>Drama</h2>
          <img src={drama} alt="scifi" className="genre-pic" />
        </div>
        <div className="genre-list">
          <p className="filler-text">
            Nothing to see here! Add some dramas to your list.
          </p>
        </div>
      </div>
    );
  } else {
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
}

export default Drama;
