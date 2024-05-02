import Show from "../components/Show";
import { useLoaderData, Link } from "react-router-dom";
import horro from "./../images/creepydoll.jpg";
import { useUser } from "@clerk/clerk-react";

function Horror(props) {
  const { user } = useUser();
  const allShows = useLoaderData();
  const userShows = allShows.filter((x) => {
    return x.user === user?.id;
  });
  const horrors = userShows.filter((show) => show.genre === "horror");

  if (horrors.length === 0) {
    return (
      <div className="genre-div">
        <div className="genre-title">
          <h2>Horror / Thriller</h2>
          <img src={horro} alt="scary bb" className="genre-pic" />
        </div>
        <div className="genre-list">
          <p className="filler-text">
            Nothing to see here!{" "}
            <Link className="router-link" to="/create/">
              <b>Add some horror to your list.</b>
            </Link>
          </p>
        </div>
      </div>
    );
  } else {
    return (
      <div className="genre-div">
        <div className="genre-title">
          <h2>Horror / Thriller</h2>
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
}

export default Horror;
