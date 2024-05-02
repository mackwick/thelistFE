import Show from "../components/Show";
import { useLoaderData, Link } from "react-router-dom";
import realitypic from "./../images/reality.jpg";
import { useUser } from "@clerk/clerk-react";

function Reality(props) {
  const { user } = useUser();
  const allShows = useLoaderData();
  const userShows = allShows.filter((x) => {
    return x.user === user?.id;
  });
  const reality = userShows.filter((show) => show.genre === "reality");

  if (reality.length === 0) {
    return (
      <div className="genre-div">
        <div className="genre-title">
          <h2>Reality / Docs</h2>
          <img src={realitypic} alt="ladies walking" className="genre-pic" />
        </div>
        <div className="genre-list">
          <p className="filler-text">
            Nothing to see here!{" "}
            <Link className="router-link" to="/create/">
              <b>Add some docs or reality shows to your list.</b>
            </Link>
          </p>
        </div>
      </div>
    );
  } else {
    return (
      <div className="genre-div">
        <div className="genre-title">
          <h2>Reality / Docs</h2>
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
}

export default Reality;
