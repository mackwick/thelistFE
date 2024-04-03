import Show from "../components/Show";
import { useLoaderData, Link } from "react-router-dom";

function Reality(props) {
  const allShows = useLoaderData();
  const reality = allShows.filter((show) => show.genre === "reality");
  return (
    <>
      {reality.map((show, i) => (
        <Show show={show} key={i} />
      ))}
    </>
  );
}

export default Reality;
