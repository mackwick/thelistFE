import Footer from "./../components/Footer";
import Header from "./../components/Header";
import { Link, useLoaderData } from "react-router-dom";

function Show(props) {
  const aShow = useLoaderData();
  return (
    <>
      <Header />
      <div className="show">
        <h2>{aShow.name}</h2>
      </div>
      <Link to="/">
        <button>Back to main</button>
      </Link>
      <Footer />
    </>
  );
}

export default Show;
