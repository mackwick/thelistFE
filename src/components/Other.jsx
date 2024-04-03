import Show from "../components/Show";
import { useLoaderData, Link } from "react-router-dom";

function Other(props) {
  const allShows = useLoaderData();
  const others = allShows.filter((show) => show.genre === "other");
  return (
    <>
      {others.map((show, i) => (
        <Show show={show} key={i} />
      ))}
    </>
  );
}

export default Other;
