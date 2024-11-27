import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const UserTable = ({ users, setEditUser, deleteUser, activeUser }) => {
  const [selectedUser, setSelectedUser] = useState(null);
  const navigate = useNavigate();
  const handleEdit = (user) => {
    setEditUser(user);
    navigate("/update-user");
  };
  return (
    <div>
      <table className="table-auto w-full border-collapse border border-gray-300">
        <thead>
          <tr className="bg-gray-200 text-left">
            <th className="border border-gray-300 p-2">ID</th>
            <th className="border border-gray-300 p-2">Name</th>
            <th className="border border-gray-300 p-2">Email</th>
            <th className="border border-gray-300 p-2">Mobile</th>
            <th className="border border-gray-300 p-2">Gender</th>
            <th className="border border-gray-300 p-2">Status</th>
            <th className="border border-gray-300 p-2">Role</th>
            <th className="border border-gray-300 p-2">Action</th>
          </tr>
        </thead>
        <tbody>
          {users?.length > 0 ? (
            users.map((user,i) => (
              <tr key={user.id} className="hover:bg-gray-100">
                <td className="border border-gray-300 p-2">{i+1}</td>
                <td className="border border-gray-300 p-2">{user.name}</td>
                <td className="border border-gray-300 p-2">{user.email}</td>
                <td className="border border-gray-300 p-2">{user.mobile}</td>
                <td className="border border-gray-300 p-2">{user.gender}</td>
                <td className="border border-gray-300 p-2">{user.status}</td>
                <td className="border border-gray-300 p-2">{user.role}</td>
                <td className="border border-gray-300 p-2">
                  <button
                    onClick={() => setSelectedUser(user)}
                    className="bg-green-500 text-white px-3 py-1 rounded hover:bg-green-600"
                  >
                    Show
                  </button>
                  {(activeUser?.role === "Editor" ||
                    activeUser?.role === "Admin") && (
                    <button
                      onClick={() => handleEdit({...user,id:user?.id})}
                      className="bg-blue-500 text-white px-3 py-1 mx-3 rounded hover:bg-blue-600 mr-2"
                    >
                      Edit
                    </button>
                  )}
                  {(activeUser?.role === "Admin" && activeUser?.email !== user?.email)&& (
                    <button
                      onClick={() => deleteUser(user)}
                      className="bg-red-500 text-white px-3 py-1 rounded hover:bg-red-600"
                    >
                      Delete
                    </button>
                  )}
                </td>
              </tr>
            ))
          ) : (
            <tr>
              <td colSpan="8" className="text-center p-4">
                No users added yet.
              </td>
            </tr>
          )}
        </tbody>
      </table>

      {selectedUser && (
        <div className="mt-4 p-4 bg-gray-100 rounded border border-gray-300">
          <h3 className="text-lg font-bold">User Details</h3>
          <p>
            <strong>ID:</strong> {selectedUser.id}
          </p>
          <p>
            <strong>Name:</strong> {selectedUser.name}
          </p>
          <p>
            <strong>Email:</strong> {selectedUser.email}
          </p>
          <p>
            <strong>Mobile:</strong> {selectedUser.mobile}
          </p>
          <p>
            <strong>Gender:</strong> {selectedUser.gender}
          </p>
          <p>
            <strong>Status:</strong> {selectedUser.status}
          </p>
          <p>
            <strong>Role:</strong> {selectedUser.role}
          </p>
          <button
            onClick={() => setSelectedUser(null)}
            className="mt-2 bg-red-500 text-white px-4 py-2 rounded hover:bg-red-600"
          >
            Close
          </button>
        </div>
      )}
    </div>
  );
};

export default UserTable;
