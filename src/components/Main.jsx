import Show from "../components/Show";
import { useLoaderData, Link } from "react-router-dom";

function Main(props) {
  const allShows = useLoaderData();
  return (
    <>
      {allShows.map((show, i) => (
        <Show show={show} key={i} />
      ))}
      <Link to="/create/">
        <button>Add something to the list.</button>
      </Link>
    </>
  );
}

export default Main;
