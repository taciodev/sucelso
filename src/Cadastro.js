import NavbarCoord from "./navCoord";

export default function Cadastro() {
  return (
    <>
      <NavbarCoord />
      <CadastroAluno />;
    </>
  );
}

function CadastroAluno() {
  return (
    <main className="container">
      <form class="row g-3">
        <div className="col-md-4">
          <label for="validationServer01" class="form-label">
            Nome
          </label>
          <input
            type="text"
            class="form-control is-valid"
            id="validationServer01"
            value="Mark"
            required
          />
          <div className="valid-feedback">Looks good!</div>
        </div>
        <div className="col-md-4">
          <label for="validationServer02" class="form-label">
            Sobrenome
          </label>
          <input
            type="text"
            class="form-control is-valid"
            id="validationServer02"
            value="Otto"
            required
          />
          <div className="valid-feedback">Looks good!</div>
        </div>
        <div className="col-md-4">
          <label for="validationServerUsername" className="form-label">
            Email
          </label>
          <div className="input-group has-validation">
            <span className="input-group-text" id="inputGroupPrepend3">
              @
            </span>
            <input
              type="email"
              class="form-control is-invalid"
              id="validationServerUsername"
              aria-describedby="inputGroupPrepend3 validationServerUsernameFeedback"
              required
            />
            <div
              id="validationServerUsernameFeedback"
              className="invalid-feedback"
            >
              Please choose a username.
            </div>
          </div>
        </div>
        <div className="col-md-6">
          <label for="validationServer03" class="form-label">
            City
          </label>
          <input
            type="text"
            class="form-control is-invalid"
            id="validationServer03"
            aria-describedby="validationServer03Feedback"
            required
          />
          <div id="validationServer03Feedback" className="invalid-feedback">
            Please provide a valid city.
          </div>
        </div>
        <div className="col-md-3">
          <label for="validationServer04" className="form-label">
            State
          </label>
          <select
            className="form-select is-invalid"
            id="validationServer04"
            aria-describedby="validationServer04Feedback"
            required
          >
            <option selected disabled value="">
              Choose...
            </option>
            <option>...</option>
          </select>
          <div id="validationServer04Feedback" className="invalid-feedback">
            Please select a valid state.
          </div>
        </div>
        <div className="col-md-3">
          <label for="validationServer05" className="form-label">
            CEP
          </label>
          <input
            type="text"
            className="form-control is-invalid"
            id="validationServer05"
            aria-describedby="validationServer05Feedback"
            required
          />
          <div id="validationServer05Feedback" className="invalid-feedback">
            Please provide a valid zip.
          </div>
        </div>
        <div className="col-12">
          <div className="form-check">
            <input
              className="form-check-input is-invalid"
              type="checkbox"
              value=""
              id="invalidCheck3"
              aria-describedby="invalidCheck3Feedback"
              required
            />
            <label className="form-check-label" for="invalidCheck3">
              Agree to terms and conditions
            </label>
            <div id="invalidCheck3Feedback" class="invalid-feedback">
              You must agree before submitting.
            </div>
          </div>
        </div>
        <div class="col-12">
          <button class="btn btn-primary" type="submit">
            Submit form
          </button>
        </div>
      </form>
    </main>
  );
}
