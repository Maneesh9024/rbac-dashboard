import React from "react";
import UserForm from "../components/UserForm";

function Signup({ addUser }) {
  return (
    <div className="max-w-4xl mx-auto bg-white shadow-md rounded-lg p-6">
      <UserForm addUser={addUser} />
    </div>
  );
}

export default Signup;
