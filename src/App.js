import React, { useState } from "react";
import FormDiv from "./formDivs/FormDiv";

const FormExample = () => {
  const [formValue1, setFormValue1] = useState("");
  const [formValue2, setFormValue2] = useState("");
  const [formValue3, setFormValue3] = useState("");
  const [formValue4, setFormValue4] = useState("");
  const [formValue5, setFormValue5] = useState("");
  const [formValueSub1, setFormValueSub1] = useState("");
  const [formValueSub2, setFormValueSub2] = useState("");
  const [formValueSub3, setFormValueSub3] = useState("");
  const [formValueSub4, setFormValueSub4] = useState("");
  const [formValueSub5, setFormValueSub5] = useState("");

  return (
    <div>
      <FormDiv
        formIsDisabled={false}
        formValue={formValue1}
        setFormValue={setFormValue1}
        formIsDisabledSub={formValue1 === ""}
        formValueSub={formValueSub1}
        setFormValueSub={setFormValueSub1}
      />
      <FormDiv
        formIsDisabled={formValueSub1 === ""}
        formValue={formValue2}
        setFormValue={setFormValue2}
        formIsDisabledSub={formValue2 === ""}
        formValueSub={formValueSub2}
        setFormValueSub={setFormValueSub2}
      />
      <FormDiv
        formIsDisabled={formValueSub2 === ""}
        formValue={formValue3}
        setFormValue={setFormValue3}
        formIsDisabledSub={formValue3 === ""}
        formValueSub={formValueSub3}
        setFormValueSub={setFormValueSub3}
      />
      <FormDiv
        formIsDisabled={formValueSub3 === ""}
        formValue={formValue4}
        setFormValue={setFormValue4}
        formIsDisabledSub={formValue4 === ""}
        formValueSub={formValueSub4}
        setFormValueSub={setFormValueSub4}
      />
      <FormDiv
        formIsDisabled={formValueSub4 === ""}
        formValue={formValue5}
        setFormValue={setFormValue5}
        formIsDisabledSub={formValue5 === ""}
        formValueSub={formValueSub5}
        setFormValueSub={setFormValueSub5}
      />
    </div>
  );
};

export default FormExample;
