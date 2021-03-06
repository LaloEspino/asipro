import React, { Component, Fragment } from 'react'

class Contacto extends Component {

  constructor(props) {
    super(props)

    this.state = {
      nombre: ''
    }

  }

  componentDidMount() {
    window.scrollTo(0, 0)
  }

  handleChange = (event) => {
    this.setState({
      [event.target.name]: event.target.value
    })
  }

  // handleSubmit = (event) => {
  //   event.preventDefault()
  //   window.addEventListener('load', function () {
  //     // Fetch all the forms we want to apply custom Bootstrap validation styles to
  //     var forms = document.getElementsByClassName('needs-validation');
  //     // Loop over them and prevent submission
  //     var validation = Array.prototype.filter.call(forms, function (form) {
  //       form.addEventListener('submit', function (event) {
  //         if (form.checkValidity() === false) {
  //           event.preventDefault();
  //           event.stopPropagation();
  //         }
  //         form.classList.add('was-validated');
  //       }, false);
  //     });
  //   }, false);

  // }

  render() {
    return (
      <Fragment>
        <div className='container'>
          <h1 className='mt-5'>Contacto</h1>

          {/* <form className='needs-validation' novalidate>
            <div className='form-row'>
              <div className='col-md-4 mb-3'>
                <label for='validationCustom01'>Nombre</label>
                <input type='text' className='form-control' id='validationCustom01' placeholder='Nombre' name='nombre' value={this.state.nombre} onChange={this.handleChange} required />
                <div className='valid-feedback'>
                  Looks good!
                </div>
              </div>
              <div className='col-md-4 mb-3'>
                <label for='validationCustom02'>Last name</label>
                <input type='text' className='form-control' id='validationCustom02' placeholder='Last name' value='Otto' required />
                <div className='valid-feedback'>
                  Looks good!
      </div>
              </div>
              <div className='col-md-4 mb-3'>
                <label for='validationCustomUsername'>Username</label>
                <div className='input-group'>
                  <div className='input-group-prepend'>
                    <span className='input-group-text' id='inputGroupPrepend'>@</span>
                  </div>
                  <input type='text' className='form-control' id='validationCustomUsername' placeholder='Username' aria-describedby='inputGroupPrepend' required />
                  <div className='invalid-feedback'>
                    Please choose a username.
        </div>
                </div>
              </div>
            </div>
            <div className='form-row'>
              <div className='col-md-6 mb-3'>
                <label for='validationCustom03'>City</label>
                <input type='text' className='form-control' id='validationCustom03' placeholder='City' required />
                <div className='invalid-feedback'>
                  Please provide a valid city.
      </div>
              </div>
              <div className='col-md-3 mb-3'>
                <label for='validationCustom04'>State</label>
                <input type='text' className='form-control' id='validationCustom04' placeholder='State' required />
                <div className='invalid-feedback'>
                  Please provide a valid state.
      </div>
              </div>
              <div className='col-md-3 mb-3'>
                <label for='validationCustom05'>Zip</label>
                <input type='text' className='form-control' id='validationCustom05' placeholder='Zip' required />
                <div className='invalid-feedback'>
                  Please provide a valid zip.
      </div>
              </div>
            </div>
            <div className='form-group'>
              <div className='form-check'>
                <input className='form-check-input' type='checkbox' value='' id='invalidCheck' required />
                <label className='form-check-label' for='invalidCheck'>
                  Agree to terms and conditions
      </label>
                <div className='invalid-feedback'>
                  You must agree before submitting.
      </div>
              </div>
            </div>
            <button className='btn btn-primary' type='submit'>Submit form</button>
          </form> */}

        </div>
      </Fragment>
    )
  }
}

export default Contacto
