import { Form, useLoaderData } from "react-router-dom";

function UpdateForm(props) {
  const aShow = useLoaderData();
  const id = aShow.url.split("/")[4];

  return (
    <>
      <div className="form-container">
        <div className="form-heading">
          <h2>Change something.</h2>
        </div>

        <div className="form-itself">
          <Form action={`/update/${id}/`} method="post">
            <fieldset className="form-section">
              <label htmlFor="name">Name:</label>
              <input
                type="text"
                name="name"
                id="name"
                defaultValue={aShow.name}
              />
            </fieldset>

            <fieldset name="type" id="type" className="form-section">
              <label htmlFor="type">Is it a TV show or a movie?</label>

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

            <fieldset name="genre" id="genre" className="form-section">
              <label htmlFor="genre">What's its genre?</label>

              <div>
                <input
                  type="radio"
                  id="comedy"
                  name="genre"
                  value="comedy"
                  checked
                />
                <label for="comedy">Comedy</label>
              </div>

              <div>
                <input type="radio" id="drama" name="genre" value="drama" />
                <label for="drama">Drama</label>
              </div>

              <div>
                <input type="radio" id="horror" name="genre" value="horror" />
                <label for="horror">Horror/Thriller</label>
              </div>

              <div>
                <input type="radio" id="reality" name="genre" value="reality" />
                <label for="reality">Reality/Documentary</label>
              </div>

              <div>
                <input type="radio" id="scifi" name="genre" value="scifi" />
                <label for="scifi">Science Fiction</label>
              </div>

              <div>
                <input type="radio" id="other" name="genre" value="other" />
                <label for="other">Other/Unsure</label>
              </div>
            </fieldset>

            <fieldset className="form-section">
              <label htmlFor="recby">Who recommended this?</label>
              <input
                type="text"
                name="recby"
                id="recby"
                defaultValue={aShow.recby}
              />
            </fieldset>
            <div className="update-button">
              <button>Update.</button>
            </div>
          </Form>
        </div>
      </div>
    </>
  );
}

export default UpdateForm;
