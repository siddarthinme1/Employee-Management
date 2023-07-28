// import React from "react";
// import { render, fireEvent } from "@testing-library/react";
// import { useForm, Form } from "../Components/useForm";

// // Sample validation function for testing purposes
// const validate = (fieldValues) => {
//   let errors = {};
//   if (!fieldValues.name) {
//     errors.name = "Name is required";
//   }
//   return errors;
// };

// test("Form renders without errors", () => {
//   render({});
// });

// test("useForm handles input change and validation", () => {
//   const initialFieldValues = {
//     name: "",
//     email: "",
//   };

//   const { getByLabelText, getByText } = render(<useForm />);

//   fireEvent.change(getByLabelText("Name"), { target: { value: "John" } });
//   fireEvent.change(getByLabelText("Email"), {
//     target: { value: "invalid_email" },
//   });
//   fireEvent.click(getByText("Submit"));
// });

import React from "react";
import { render, fireEvent } from "@testing-library/react";
import {useForm} from "../Components/useForm";

const validate = (fieldValues) => {
  let errors = {};
  if (!fieldValues.name) {
    errors.name = "Name is required";
  }
  return errors;
};

test("Form renders without errors", () => {
  render(<useForm />);
});

test("useForm handles input change and validation", () => {
  const initialFieldValues = {
    name: "",
    email: "",
  };

  render(
    <useForm
      initialFieldValues={initialFieldValues}
      validateOnChange={true}
      validate={validate}
    />
  );

  const getByLabelText = getByLabelText("Name");
  const getByText = getByLabelText("Email");

  fireEvent.change(getByLabelText, { target: { value: "John" } });
  fireEvent.change(getByLabelText("Email"), {
    target: { value: "invalid_email" },
  });
  fireEvent.click(getByText("Submit"));
});
