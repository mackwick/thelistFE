import { Link, useLoaderData, Form } from "react-router-dom";
import UpdateForm from "../components/UpdateForm";

function Show(props) {
  const aShow = useLoaderData();
  const id = aShow.url.split("/")[4];
  return (
    <div className="show-container">
      <div className="show-info">
        <h2>{aShow.name}</h2>
        <h3>({aShow.type})</h3>
        <h4>
          <b>Genre:</b> {aShow.genre}
        </h4>
        <h4>
          <b>Recommended by:</b> {aShow.recby}
        </h4>
      </div>
      <div className="show-options">
        <UpdateForm />
        <Form action={`/delete/${id}/`} method="post">
          <button>Delete this.</button>
        </Form>
      </div>
    </div>
  );
}

export default Show;
