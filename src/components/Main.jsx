import Show from "../components/Show";
import { useLoaderData } from "react-router-dom";

function Main(props) {
  const allShows = useLoaderData();
  return (
    <>
      <h1>Main</h1>
      <hr />
      {allShows.map((show, i) => (
        <Show show={show} key={i} />
      ))}
    </>
  );
}

export default Main;
