import React, { useState } from "react";

function Login({ handleLogin }) {
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    handleLogin(formData);
    setFormData({
      email: "",
      password: "",
    });
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <div className="offset-3 col-lg-6 col-md-6 col-sm-12 mt-5">
        <input
          type="email"
          name="email"
          value={formData.email}
          onChange={handleChange}
          placeholder="Email"
          className="p-2 border rounded form-control my-3"
          required
        />
        <input
          type="password"
          name="password"
          value={formData.password}
          onChange={handleChange}
          placeholder="Password"
          className="p-2 border rounded form-control"
          required
        />
        <button
          type="submit"
          className="w-full bg-blue-500 text-white py-2 rounded hover:bg-blue-600 my-4"
        >
          Login
        </button>
      </div>
    </form>
  );
}

export default Login;
