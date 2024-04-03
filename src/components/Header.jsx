import { Link } from "react-router-dom";

function Header(props) {
  return (
    <div className="header-container">
      <Link className="router-link" to="/">
        <h1 id="site-heading">The List Roulette</h1>
        <h4>[Back to main]</h4>
      </Link>
    </div>
  );
}

export default Header;
