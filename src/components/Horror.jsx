import Show from "../components/Show";
import { useLoaderData, Link } from "react-router-dom";

function Horror(props) {
  const allShows = useLoaderData();
  const horrors = allShows.filter((show) => show.genre === "horror");
  return (
    <>
      {horrors.map((show, i) => (
        <Show show={show} key={i} />
      ))}
    </>
  );
}

export default Horror;
