import React, { useState } from "react";
import { Input, InputGroup, InputGroupText, Button } from "reactstrap";
import { registrationForm } from "../forms/registration_form";
const RegistrationPage = () => {
  const [reg, setReg] = useState(registrationForm);
  const validate = (e) => {
    if (e.target.value.length === 0) {
      // console.log("Required Validation");
      const formJson = [...reg];
      // console.log(reg);
      formJson.forEach((item) => {
        if (e.target.name === item.name) {
          item.isValid = false;
        }
      });
      setReg([...formJson]);
    }
  };
  return (
    <>
      <h1>Registeration Form</h1>
      {registrationForm &&
        registrationForm.length > 0 &&
        reg.map((item, index) => {
          const { isValid } = item;
          return (
            <InputGroup key={index}>
              <InputGroupText>{item.label}</InputGroupText>
              {isValid && (
                <Input
                  valid
                  name={item.name}
                  type={item.type}
                  placeholder={item.label}
                  onBlur={validate}
                />
              )}
              {!isValid && (
                <Input
                  invalid
                  name={item.name}
                  type={item.type}
                  placeholder={item.label}
                  onBlur={validate}
                />
              )}
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
