import { Link, useLoaderData, Form } from "react-router-dom";
import UpdateForm from "../components/UpdateForm";

function Show(props) {
  const aShow = useLoaderData();
  const id = aShow.url.split("/")[4];
  return (
    <>
      <div className="show">
        <h2>{aShow.name}</h2>
      </div>

      <Link to="/">
        <button>Back to main</button>
      </Link>

      <UpdateForm />

      <Form action={`/delete/${id}/`} method="post">
        <button>Delete show</button>
      </Form>
    </>
  );
}

export default Show;
