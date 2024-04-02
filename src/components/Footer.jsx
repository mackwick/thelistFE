import { Link } from "react-router-dom";

function Footer(props) {
  return (
    <div className="footer">
      <Link to={"index"} className="footer-item footer-one">
        <button>The Whole List</button>
      </Link>
      <div className="footer-item footer-two">
        <h2>Placeholder: Roulette The List</h2>
      </div>
      <div className="footer-item footer-three">
        <h2>Placeholder: graphic and info</h2>
      </div>
    </div>
  );
}

export default Footer;
