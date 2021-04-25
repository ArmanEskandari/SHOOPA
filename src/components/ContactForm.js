import React from "react";
import styled from "styled-components";
import { useForm, ValidationError } from "@formspree/react";

function ContactForm() {
  const [state, handleSubmit] = useForm("xeqvogeo");
  if (state.succeeded) {
    return <p>Thanks for joining!</p>;
  }
  return (
    <Wrapper>
      <form onSubmit={handleSubmit} className="contact-form">
        <input
          className="form-input"
          type="email"
          name="email"
          placeholder="Enter Email"
        />
        <ValidationError prefix="Email" field="email" errors={state.errors} />
        <ValidationError
          prefix="Message"
          field="message"
          errors={state.errors}
        />
        <button
          className="submit-btn"
          type="submit"
          disabled={state.submitting}>
          Submit
        </button>
      </form>
    </Wrapper>
  );
}

const Wrapper = styled.section`
  .contact-form {
    width: 80vw;
    max-width: 500px;
    display: grid;
    grid-template-columns: 1fr auto;
  }

  .form-input,
  .submit-btn {
    font-size: 1rem;
    padding: 0.5rem 1rem;
    border: 2px solid var(--clr-black);
  }
  .form-input {
    border-right: none;
    color: var(--clr-grey-3);
    border-top-left-radius: var(--radius);
    border-bottom-left-radius: var(--radius);
  }
  .submit-btn {
    border-top-right-radius: var(--radius);
    border-bottom-right-radius: var(--radius);
  }
  .form-input::placeholder {
    color: var(--clr-black);
    text-transform: capitalize;
  }
  .submit-btn {
    background: var(--clr-primary-5);
    text-transform: capitalize;
    letter-spacing: var(--spacing);
    cursor: pointer;
    transition: var(--transition);
    color: var(--clr-black);
  }
  .submit-btn:hover {
    color: var(--clr-white);
  }
`;

export default ContactForm;
