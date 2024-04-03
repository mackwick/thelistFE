import Show from "../components/Show";
import { useLoaderData, Link } from "react-router-dom";

function Scifi(props) {
  const allShows = useLoaderData();
  const scifi = allShows.filter((show) => show.genre === "scifi");
  return (
    <>
      {scifi.map((show, i) => (
        <Show show={show} key={i} />
      ))}
    </>
  );
}

export default Scifi;
