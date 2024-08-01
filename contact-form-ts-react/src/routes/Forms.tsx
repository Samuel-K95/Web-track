import React from "react";
import "../CSS/Forms.css";
import contactFormType from "../formType";
import ContactService from "../FormService";
import { useState, useEffect } from "react";

const Forms = () => {
  const [SubmittedForms, setSubmittedForms] = useState(
    ContactService.getContactForms()
  );

  useEffect(() => {
    setSubmittedForms(ContactService.getContactForms());
  });

  const handleDelete = (id: number): void => {
    ContactService.deleteContactFOrm(id);
    setSubmittedForms(ContactService.getContactForms());
  };

  return (
    <div className="Container">
      <h1>Submitted Forms</h1>
      <div className="formsContainer">
        {SubmittedForms.map((submitted) => (
          <div key={submitted.id} className="submitted">
            <p>Submitted By: {submitted.form.name}</p>
            <p>Email: {submitted.form.email}</p>
            <p>Message: {submitted.form.message}</p>
            <button
              className="DeleteTask"
              onClick={() => handleDelete(submitted.id)}
            >
              Delete
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Forms;
