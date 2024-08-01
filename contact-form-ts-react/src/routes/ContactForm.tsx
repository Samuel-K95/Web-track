import { useForm, FieldErrors } from "react-hook-form";
import "../CSS/ContactForm.css";
import { useEffect } from "react";
import formType from "../contactForm";
import ContactService from "../FormService";

const ContactForm = () => {
  const form = useForm<formType>();
  const { register, handleSubmit, formState, reset } = form;

  const { errors, isSubmitSuccessful } = formState;

  const onSubmit = (data: formType) => {
    ContactService.addContactForms(data);
    reset();
    alert("Your Form has been submitted successfully!!");
  };

  const onError = (errors: FieldErrors<formType>) => {
    console.log("form errors", errors);

    useEffect(() => {
      if (isSubmitSuccessful) {
        reset();
      }
    }, [isSubmitSuccessful, reset]);
  };

  return (
    <div className="Container">
      <h1>CONTACT US</h1>
      <a href={`./Forms/`}>submitted forms</a>
      <form className="contact-form" onSubmit={handleSubmit(onSubmit)}>
        <label htmlFor="name">Name</label>
        <input
          type="text"
          id="name"
          {...register("name", {
            required: {
              value: true,
              message: "Name field Can't be empty",
            },
          })}
        />
        <p className="inputErrors">{errors.name?.message}</p>

        <label htmlFor="email">E-mail</label>
        <input
          type="text"
          id="email"
          {...register("email", {
            required: {
              value: true,
              message: "Email can not be empty",
            },
            pattern: {
              value: /[a-zA-Z0-9.*%±]+@[a-zA-Z0-9.-]+.[a-zA-Z]{2,}/ || true,
              message: "Incorrect email format",
            },
          })}
        />
        <p className="inputErrors">{errors.email?.message}</p>

        <label htmlFor="message">Message</label>
        <input
          type="text"
          id="message"
          {...register("message", {
            required: {
              value: true,
              message: "Message field can not be empty",
            },
          })}
        />
        <p className="inputErrors">{errors.message?.message}</p>

        <button className="submit-button">Submit</button>
        <button className="reset-button" onClick={() => reset()}>
          Reset
        </button>
      </form>
    </div>
  );
};

export default ContactForm;
