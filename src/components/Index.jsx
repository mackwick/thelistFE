import Show from "../components/Show";
import { useLoaderData, Link } from "react-router-dom";

function Index(props) {
  const allShows = useLoaderData();
  return (
    <div className="index-div">
      <h2>The List</h2>
      <div className="whole-list">
        {allShows.map((show, i) => (
          <Show show={show} key={i} />
        ))}
      </div>
    </div>
  );
}

export default Index;
