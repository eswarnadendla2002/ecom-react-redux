import React from "react";
import { Input, InputGroup, InputGroupText, Button } from "reactstrap";
import { registrationForm } from "../forms/registration_form";
const RegistrationPage = () => {
  const validate = (e) => {
    if (e.target.value.length === 0) {
      console.log("Required Validation");
    }
  };
  return (
    <>
      <h1>Registeration Form</h1>
      {registrationForm &&
        registrationForm.length > 0 &&
        registrationForm.map((item, index) => {
          return (
            <InputGroup key={index}>
              <InputGroupText>{item.label}</InputGroupText>
              <Input
                type={item.type}
                placeholder={item.label}
                onBlur={validate}
              />
            </InputGroup>
          );

          // (
          //     <div key={index}>
          //       <label>{item.label}</label>
          //       <input type={item.type} name={item.name} />
          //     </div>
          //   );
        })}

      <Button color="primary">Submit</Button>
    </>
  );
};

export default RegistrationPage;
