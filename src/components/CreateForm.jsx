import { Form } from "react-router-dom";

function CreateForm(props) {
  return (
    <>
      <h2>Add something to The List</h2>
      <Form action="/create" method="post">
        <label htmlFor="name">Name:</label>
        <input type="text" name="name" id="name" />

        <fieldset name="type" id="type">
          <legend>Is it a TV show or a movie?</legend>

          <div>
            <input
              type="radio"
              id="tv show"
              name="type"
              value="tv show"
              checked
            />
            <label for="tv show">TV Show</label>
          </div>

          <div>
            <input type="radio" id="movie" name="type" value="movie" />
            <label for="movie">Movie</label>
          </div>
        </fieldset>

        <label htmlFor="genre">Genre:</label>
        <select name="genre" multiple id="genre">
          <option value="comedy">Comedy</option>
          <option value="drama">Drama</option>
          <option value="horror">Horror/Thriller</option>
          <option value="reality">Reality/Documentary</option>
          <option value="weird">Just weird</option>
          <option value="other">Other/Unsure</option>
        </select>

        <label htmlFor="recby">Who recommended this?</label>
        <input type="text" name="recby" id="recby" />

        <button>Add it to The List</button>
      </Form>
    </>
  );
}

export default CreateForm;
