import { Link } from "react-router-dom";

function Header(props) {
  return (
    <div className="header-container">
      <h1>The List Roulette</h1>
      <Link to="/create/">
        <button>Add something to the list.</button>
      </Link>
    </div>
  );
}

export default Header;
