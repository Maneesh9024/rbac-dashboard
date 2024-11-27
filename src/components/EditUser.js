import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

const EditUser = ({ editUser, handleEdit, activeUser}) => {
  const [formData, setFormData] = useState(editUser || {});
  const navigate = useNavigate();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };
   
  useEffect(() => {
    if (!activeUser || !Object.keys(activeUser)?.length) {
      navigate("/login");
    }
  }, [activeUser]);

  const handleSubmit = (e) => {
    e.preventDefault();
    handleEdit(formData);
    navigate("/manage-users"); // Redirect back to the main dashboard
  };

  if (!editUser) {
    return <p className="text-center text-red-500">No user selected for editing.</p>;
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-4 max-w-3xl mx-auto bg-white p-6 rounded shadow">
      <h2 className="text-2xl font-bold mb-4">Edit User</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <input
          type="text"
          name="name"
          value={formData.name || ""}
          onChange={handleChange}
          placeholder="Name"
          className="p-2 border rounded"
          required
        />
        <input
          type="email"
          name="email"
          value={formData.email || ""}
          onChange={handleChange}
          placeholder="Email"
          className="p-2 border rounded"
          required
        />
        <input
          type="text"
          name="mobile"
          value={formData.mobile || ""}
          onChange={handleChange}
          placeholder="Mobile"
          className="p-2 border rounded"
          required
        />
        <select
          name="gender"
          value={formData.gender || ""}
          onChange={handleChange}
          className="p-2 border rounded"
          required
        >
          <option value="">Select Gender</option>
          <option value="Male">Male</option>
          <option value="Female">Female</option>
          <option value="Other">Other</option>
        </select>
        <select
          name="status"
          value={formData.status || ""}
          onChange={handleChange}
          className="p-2 border rounded"
          required
        >
          <option value="">Select Status</option>
          <option value="Active">Active</option>
          <option value="Inactive">Inactive</option>
        </select>
        <select
          name="role"
          value={formData.role || ""}
          onChange={handleChange}
          className="p-2 border rounded"
          required
          disabled={activeUser?.role !== 'Admin'}
        >
          <option value="">Select Role</option>
          <option value="Admin">Admin</option>
          <option value="Editor">Editor</option>
          <option value="Viewer">Viewer</option>
        </select>
      </div>
      <button
        type="submit"
        className="w-full bg-blue-500 text-white py-3 rounded hover:bg-blue-600"
      >
        Update User
      </button>
    </form>
  );
};

export default EditUser;
