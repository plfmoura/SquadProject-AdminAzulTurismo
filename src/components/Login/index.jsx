import React from "react";

export default function Login() {
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Login Efetuado");
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <div>
          <input type="text" defaultValue=""/>
        </div>
      </form>
    </div>
  );
}
