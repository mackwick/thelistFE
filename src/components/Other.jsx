import Show from "../components/Show";
import { useLoaderData, Link } from "react-router-dom";
import otherpic from "./../images/other.jpg";
import { useUser } from "@clerk/clerk-react";

function Other(props) {
  const { user } = useUser();
  const allShows = useLoaderData();
  const userShows = allShows.filter((x) => {
    return x.user === user?.id;
  });
  const others = userShows.filter((show) => show.genre === "other");

  if (others.length === 0) {
    return (
      <div className="genre-div">
        <div className="genre-title">
          <h2>Other</h2>
          <img src={otherpic} alt="film strips" className="genre-pic" />
        </div>
        <div className="genre-list">
          <p className="filler-text">
            Nothing to see here!{" "}
            <Link className="router-link" to="/create/">
              <b>Add some weird stuff to your list.</b>
            </Link>
          </p>
        </div>
      </div>
    );
  } else {
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
}

export default Other;
