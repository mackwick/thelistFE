import Show from "../components/Show";
import { useLoaderData, Link } from "react-router-dom";

function Main(props) {
  const allShows = useLoaderData();
  return (
    <>
      <h1>Main Lorem ipsum dolor, sit amet consectetur *GENRE LINKS*</h1>
    </>
  );
}

export default Main;
