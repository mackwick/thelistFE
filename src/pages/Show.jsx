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
      <div className="show-info">
        <div className="show-image">
          <h2>placeholder</h2>
        </div>
        <div className="show-deets">
          <h2>{aShow.name}</h2>
          <h3>({aShow.type})</h3>
          <h4>
            <b>Genre:</b> {aShow.genre}
          </h4>
          <h4>
            <b>Recommended by:</b> {aShow.recby}
          </h4>
        </div>
      </div>

      <div className="show-options">
        <Form action={`/delete/${id}/`} method="post">
          <button>Delete this.</button>
        </Form>

        <button onClick={toggleForm}>
          {visibleform ? "Nevermind." : "Edit this."}
        </button>
        {visibleform && <UpdateForm />}
      </div>
    </div>
  );
}

export default Show;
