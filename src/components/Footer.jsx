import { Link } from "react-router-dom";
import tv from "./../images/retrotv.jpg";
import { useLoaderData } from "react-router-dom";
import { useUser } from "@clerk/clerk-react";

function Footer(props) {
  const { user } = useUser();
  //import all shows
  const allShows = useLoaderData();
  const userShows = allShows.filter((x) => {
    return x.user === user?.id;
  });
  console.log(allShows);
  // generate a random show
  const rando = allShows[Math.floor(Math.random() * userShows.length)];
  //grab that random show's url
  const id = rando.url.split("/")[4];

  return (
    <div className="footer">
      <Link to={"index"} className="footer-item footer-one">
        <button className="big-button">[See The Whole List]</button>
      </Link>
      <Link to={`/${id}/`} className="footer-item footer-two router-link">
        <img className="retro-pin" src={tv} alt="retro tv" />
        <h4 id="add-it">[Play Roulette with The List]</h4>
      </Link>

      <Link className="router-link footer-item footer-three" to="/create/">
        <button className="big-button">[Add it to The List]</button>
      </Link>
    </div>
  );
}

export default Footer;
