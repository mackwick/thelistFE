import { Form } from "react-router-dom";
import { useUser } from "@clerk/clerk-react";

function CreateForm(props) {
  const { user } = useUser();

  return (
    <>
      <div className="form-container">
        <div className="form-heading">
          <h2>Add it to The List</h2>
        </div>

        <div className="form-itself">
          <Form action="/create" method="post">
            <label htmlFor="user" className="hide">
              User
              <input
                type="text"
                name="user"
                id="user"
                defaultValue={user?.id || "non-user"}
                className="hide"
              />
            </label>

            <fieldset className="form-section">
              <label htmlFor="name">Name: </label>
              <input type="text" name="name" id="name" />
            </fieldset>

            <fieldset name="type" id="type" className="form-section">
              <label htmlFor="type">Is it a TV show or a movie?</label>
              <div className="radio-buttons">
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
              </div>
            </fieldset>

            <fieldset name="genre" id="genre" className="form-section">
              <label htmlFor="genre">What's its genre?</label>
              <div className="radio-buttons">
                <div className="first-three">
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
                    <input
                      type="radio"
                      id="horror"
                      name="genre"
                      value="horror"
                    />
                    <label for="horror">Horror/Thriller</label>
                  </div>
                </div>

                <div className="last-three">
                  <div>
                    <input
                      type="radio"
                      id="reality"
                      name="genre"
                      value="reality"
                    />
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
                </div>
              </div>
            </fieldset>

            {/* <fieldset className="form-section">
              <label htmlFor="genre">Genre:</label>
              <select name="genre" multiple id="genre">
                <option value="comedy">Comedy</option>
                <option value="drama">Drama</option>
                <option value="horror">Horror/Thriller</option>
                <option value="reality">Reality/Documentary</option>
                <option value="scifi">Science Fiction</option>
                <option value="other">Other/Unsure</option>
              </select>
            </fieldset> */}

            <fieldset className="form-section">
              <label htmlFor="recby">Who recommended this? </label>
              <input type="text" name="recby" id="recby" />
            </fieldset>
            <div className="add-button">
              <button>Add it.</button>
            </div>
          </Form>
        </div>
      </div>
    </>
  );
}

export default CreateForm;
