import Show from "../components/Show";
import { useLoaderData, Link } from "react-router-dom";

function Main(props) {
  const allShows = useLoaderData();
  return (
    <div className="genre-container">
      <div className="genre-top">
        <div className="genre-box genre-one">
          <Link to="/drama/">Drama</Link>
        </div>
        <div className="genre-box genre-two">
          <Link to="/comedy/">Comedy</Link>
        </div>
        <div className="genre-box genre-three">
          <Link to="/scifi/">Science Fiction</Link>
        </div>
      </div>
      <div className="genre-bottom">
        <div className="genre-box genre-one">
          <Link to="/horror/">Horror/Thriller</Link>
        </div>

        <div className="genre-box genre-two">
          <Link to="/reality/">Reality/Documentary</Link>
        </div>
        <div className="genre-box genre-three">
          <Link to="/other/">Other</Link>
        </div>
      </div>
    </div>
  );
}

export default Main;
