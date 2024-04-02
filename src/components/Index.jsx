import Show from "../components/Show";
import { useLoaderData, Link } from "react-router-dom";

function Index(props) {
  const allShows = useLoaderData();
  return (
    <>
      {allShows.map((show, i) => (
        <Show show={show} key={i} />
      ))}
    </>
  );
}

export default Index;
