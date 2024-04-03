import { Link } from "react-router-dom";

function Show({ show }) {
  const id = show.url.split("/")[4];

  return (
    <div>
      <Link className="router-link" to={`/${id}/`}>
        <h1>{show.name}</h1>
      </Link>
    </div>
  );
}

export default Show;
