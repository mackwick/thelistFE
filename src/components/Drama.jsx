import Show from "../components/Show";
import { useLoaderData, Link } from "react-router-dom";

function Drama(props) {
  const allShows = useLoaderData();
  const dramas = allShows.filter((show) => show.genre === "drama");
  return (
    <>
      {dramas.map((show, i) => (
        <Show show={show} key={i} />
      ))}
    </>
  );
}

export default Drama;
