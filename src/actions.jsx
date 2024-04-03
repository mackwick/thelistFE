import { redirect } from "react-router-dom";

const URL = import.meta.env.VITE_BASE_URL;

//Create action
export const CreateAction = async ({ request }) => {
  const formData = await request.formData();

  //handle checkboxes

  const newShow = {
    name: formData.get("name"),
    type: formData.get("type"),
    genre: formData.get("genre"),
    recby: formData.get("recby"),
    watched: false,
  };

  await fetch(`${URL}`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(newShow),
  });
  return redirect("/index/");
};

//Update action
export const UpdateAction = async ({ request, params }) => {
  const formData = await request.formData();
  const id = params.id;
  console.log(URL + id);

  const updatedShow = {
    name: formData.get("name"),
    type: formData.get("type"),
    genre: formData.get("genre"),
    recby: formData.get("recby"),
  };

  await fetch(`${URL}${id}/`, {
    method: "PUT",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(updatedShow),
  });
  return redirect(`/${id}`);
};

//Delete action
export const DeleteAction = async ({ params }) => {
  const id = params.id;
  await fetch(`${URL}${id}/`, {
    method: "DELETE",
  });

  return redirect("/");
};
