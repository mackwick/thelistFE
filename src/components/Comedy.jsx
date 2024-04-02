import Show from "../components/Show";
import { useLoaderData, Link } from "react-router-dom";

function Comedy(props) {
  const allShows = useLoaderData();
  const comedies = allShows.filter((show) => show.genre === "comedy");
  return (
    <>
      {comedies.map((show, i) => (
        <Show show={show} key={i} />
      ))}
    </>
  );
}

export default Comedy;
