import React, { useState } from "react";
import "./App.css";
import Form from "./components/form.components";

function App() {
  const [formState, setFormState] = useState({
    fullName: "",
    email: "",
    role: ""
  });

  return (
    <div className="App">
      <Form />
    </div>
  );
}

export default App;
