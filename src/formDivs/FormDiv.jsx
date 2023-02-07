import React, { useState } from "react";

const FormDiv = ({
  formValue,
  setFormValue,
  formIsDisabled,
  formIsDisabledSub,
  setFormValueSub,
  formValueSub,
}) => {
  return (
    <div>
      <div style={{ margin: 20 }}>
        <div>
          <form>
            <input
              type="radio"
              value="Option 1"
              checked={formValue === "Option 1"}
              onChange={(e) => setFormValue(e.target.value)}
              disabled={formIsDisabled}
              style={{ margin: 20 }}
            />
            Option 1
            <input
              type="radio"
              value="Option 2"
              checked={formValue === "Option 2"}
              onChange={(e) => setFormValue(e.target.value)}
              disabled={formIsDisabled}
              style={{ margin: 20 }}
            />
            Option 2
            <br />
            <div
              style={{
                margin: 20,
                display: formIsDisabledSub ? "none" : "block",
              }}
            >
              <input
                type="radio"
                value="Option 3"
                checked={formValueSub === "Option 3"}
                onChange={(e) => setFormValueSub(e.target.value)}
                disabled={formIsDisabledSub}
              />
              Option 3
              <br />
              <input
                type="radio"
                value="Option 4"
                checked={formValueSub === "Option 4"}
                onChange={(e) => setFormValueSub(e.target.value)}
                disabled={formIsDisabledSub}
              />
              Option 4
              <br />
              <input
                type="radio"
                value="Option 5"
                checked={formValueSub === "Option 5"}
                onChange={(e) => setFormValueSub(e.target.value)}
                disabled={formIsDisabledSub}
              />
              Option 5
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default FormDiv;
