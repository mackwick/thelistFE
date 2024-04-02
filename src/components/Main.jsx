import Show from "../components/Show";
import { useLoaderData, Link } from "react-router-dom";

function Main(props) {
  const allShows = useLoaderData();
  return (
    <>
      <Link to="/comedy/">Comedies</Link>
    </>
  );
}

export default Main;
