import React, { useState } from "react";
import { userInfo } from "os";

export default function Form() {
  const [formState, setFormState] = useState({
    fullName: "",
    email: "",
    role: ""
  });

  function handleChange(event) {
    const updateFormState = {
      ...formState,
      [event.target.value]: event.target.name
    };

    setFormState(updateFormState);
  }

  return (
    <form>
      <fieldset>
        <legend>Users</legend>
        <div>
          <label>
            Full Name:
            <input
              type="text"
              name="fullName"
              placeholder="Enter Full Name"
              value={formState.fullName}
              onChange={handleChange}
            />
          </label>
        </div>
      </fieldset>
    </form>
  );
}
