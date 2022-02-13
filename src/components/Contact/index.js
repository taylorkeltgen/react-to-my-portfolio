import React, { useState } from 'react';
import { validateEmail } from '../../utils/helpers';

function ContactForm() {
  const [formState, setFormState] = useState({
    name: '',
    email: '',
    message: '',
  });
  const { name, email, message } = formState;
  const [errorMessage, setErrorMessage] = useState('');

  function handleChange(e) {
    if (e.target.name === 'email') {
      const isValid = validateEmail(e.target.value);
      console.log(isValid);
      if (!isValid) {
        setErrorMessage('Your email is invalid.');
      } else {
        setErrorMessage('');
      }
    } else {
      if (!e.target.value.length) {
        setErrorMessage(`${e.target.name} is required.`);
      } else {
        setErrorMessage('');
      }
    }
    if (!errorMessage) {
      setFormState({ ...formState, [e.target.name]: e.target.value });
    }
  }

  function handleSubmit(e) {
    e.preventDefault();
    console.log(formState);
  }

  return (
    <section className="d-flex-column">
      <div className="">
        <h1>Contact me</h1>
        <a href="mailto:taylorkeltgen@gmail.com">taylorkeltgen@gmail.com</a>
        <form id="contact-form" className="my-5" onSubmit={handleSubmit}>
          <div className="form-group row">
            <label htmlFor="name" className="col-sm-2 col-form-label">
              Name:
            </label>
            <div className="col-sm-10">
              <input type="text" name="name" className="" defaultValue={name} onBlur={handleChange} />
            </div>
          </div>
          <div className="form-group row">
            <label htmlFor="email" className="col-sm-2 col-form-label">
              Email address:
            </label>
            <div className="col-sm-10">
              <input type="email" name="email" className="" defaultValue={email} onBlur={handleChange} />
            </div>
          </div>
          <div className="form-group row">
            <label htmlFor="message" className="col-sm-2 col-form-label">
              Message:
            </label>
            <div className="col-sm-10">
              <textarea name="message" defaultValue={message} onBlur={handleChange} rows="5" />
            </div>
          </div>
          {errorMessage && (
            <div>
              <p className="error-text">{errorMessage}</p>
            </div>
          )}
          <div className="form-group row">
            <div className="col-sm-10">
              <button type="submit" className="btn btn-outline-primary btn-lg">
                Submit
              </button>
            </div>
          </div>
        </form>
      </div>
    </section>
  );
}

export default ContactForm;
