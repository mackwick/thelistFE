import Show from "../components/Show";
import { useLoaderData, Link } from "react-router-dom";
import { useUser } from "@clerk/clerk-react";

function Index(props) {
  const allShows = useLoaderData();
  const { user } = useUser();

  const userShows = allShows.filter((x) => {
    return x.user === user?.id;
  });

  if (userShows.length === 0) {
    return (
      <div className="index-div">
        <h2>The List</h2>
        <div className="whole-list">
          <p className="filler-text">
            Nothing to see here! Add some stuff to your list.
          </p>
        </div>
      </div>
    );
  } else {
    return (
      <div className="index-div">
        <h2>The List</h2>
        <div className="whole-list">
          {userShows.map((show, i) => (
            <Show show={show} key={i} />
          ))}
        </div>
      </div>
    );
  }
}

export default Index;
