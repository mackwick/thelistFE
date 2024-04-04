import { Link, useLoaderData, Form } from "react-router-dom";
import UpdateForm from "../components/UpdateForm";
import React, { useState } from "react";

function Show(props) {
  const [visibleform, setVisiblefom] = useState(false);

  const toggleForm = () => {
    setVisiblefom(!visibleform);
  };

  const aShow = useLoaderData();
  const id = aShow.url.split("/")[4];
  return (
    <div className="show-container">
      {!visibleform && (
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
      )}

      {visibleform && <UpdateForm />}

      <div className="show-options">
        <Form action={`/delete/${id}/`} method="post">
          <button>Delete this.</button>
        </Form>

        <button onClick={toggleForm}>
          {visibleform ? "Nevermind." : "Edit this."}
        </button>
      </div>
    </div>
  );
}

export default Show;
