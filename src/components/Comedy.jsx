import Show from "../components/Show";
import { useLoaderData, Link } from "react-router-dom";
import comedy from "./../images/comedy.jpg";
import { useUser } from "@clerk/clerk-react";

function Comedy(props) {
  const { user } = useUser();
  const allShows = useLoaderData();

  const userShows = allShows.filter((x) => {
    return x.user === user?.id;
  });

  const comedies = userShows.filter((show) => show.genre === "comedy");

  if (comedies.length === 0) {
    return (
      <div className="genre-div">
        <div className="genre-title">
          <h2>Comedy</h2>
          <img src={comedy} alt="comedy" className="genre-pic" />
        </div>
        <div className="genre-list">
          <p className="filler-text">
            Nothing to see here!{" "}
            <Link className="router-link" to="/create/">
              <b>Add some comedies to your list.</b>
            </Link>
          </p>
        </div>
      </div>
    );
  } else {
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
}

export default Comedy;
