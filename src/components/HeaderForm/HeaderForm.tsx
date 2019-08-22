import { Button } from "@rmwc/button";
import { TextField } from "@rmwc/textfield";
import React, { useContext, useState } from "react";
import { ApiContext } from "../../contexts/ApiContext";
import "./HeaderForm.scss";

export default () => {
  const { setTitle } = useContext(ApiContext);
  const [formValue, setFormValue] = useState("");

  const handleChange = (event: React.FormEvent<any>) => {
    setFormValue(event.currentTarget.value);
  };

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    setTitle(formValue);
    event.preventDefault();
  };

  return (
    <form className="header-form__form">
      <TextField label="Update Title..." onChange={e => handleChange(e)} />
      <Button
        className="header-form__submit"
        label="Submit"
        raised
        disabled={!!!formValue}
        onClick={e => handleSubmit(e)}
      />
    </form>
  );
};
