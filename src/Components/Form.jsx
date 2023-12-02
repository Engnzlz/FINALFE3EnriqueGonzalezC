import React, { useState } from "react";

const Form = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    if (name.length <= 5) {
      setMessage("Por favor verifique su información nuevamente");
      return;
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      setMessage("Por favor verifique su información nuevamente");
      return;
    }

    setMessage(`Gracias ${name}, te contactaremos cuando antes vía mail`);
  };

  return (
<div className="Divform">
  <form className="FormPrincipal" onSubmit={handleSubmit}>
    <div className="inputField">
      <label>
        Nombre completo:
      </label>
      <input type="text" value={name} onChange={(e) => setName(e.target.value)} />
    </div>
    <div className="inputField">
      <label>
        Email:
      </label>
      <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} />
    </div>
    <input className="BotonForm"type="submit" value="Enviar" />
  </form>
  {message && <p>{message}</p>}
</div>

  );
};

export default Form;

