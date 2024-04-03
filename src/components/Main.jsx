import Show from "../components/Show";
import { useLoaderData, Link } from "react-router-dom";
import creepydoll from "./../images/creepydoll.jpg";
import drama from "./../images/drama.jpg";
import comedy from "./../images/comedy.jpg";
import other from "./../images/other.jpg";
import reality from "./../images/reality.jpg";
import scifi from "./../images/scifi.jpg";

function Main(props) {
  const allShows = useLoaderData();
  return (
    <div className="genre-container">
      <div className="genre-top">
        <div className="genre-box genre-one">
          <Link className="router-link" to="/drama/">
            <img src={drama} alt="drama" />
            <h3>Drama</h3>
          </Link>
        </div>
        <div className="genre-box genre-two">
          <Link className="router-link" to="/comedy/">
            <img src={comedy} alt="comedy" />
            <h3>Comedy</h3>
          </Link>
        </div>
        <div className="genre-box genre-three">
          <Link className="router-link" to="/scifi/">
            <img src={scifi} alt="science fiction" />
            <h3>Science Fiction</h3>
          </Link>
        </div>
      </div>
      <div className="genre-bottom">
        <div className="genre-box genre-one">
          <Link className="router-link" to="/horror/">
            <img src={creepydoll} alt="creepy doll pic" />
            <h3>Horror/Thriller</h3>
          </Link>
        </div>
        <div className="genre-box genre-two">
          <Link className="router-link" to="/reality/">
            <img src={reality} alt="reality" />
            <h3>Reality/Documentary</h3>
          </Link>
        </div>
        <div className="genre-box genre-three">
          <Link className="router-link" to="/other/">
            <img src={other} alt="other options" />
            <h3>Other</h3>
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Main;
