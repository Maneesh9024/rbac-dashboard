import React, { useEffect } from "react";
import UserTable from "../components/UserTable";
import { useNavigate } from "react-router-dom";

function ManageUsers(props) {
  const {
    data: { users, activeUser, islogin },
    deleteUser,
    updateUser,
  } = props;
  const navigate = useNavigate();
  useEffect(() => {
    if (!islogin) {
      navigate("/login");
    }
  }, [islogin]);
  return (
    <>
      <div className="mt-6 max-w-5xl mx-auto bg-white shadow-md rounded-lg p-6">
        <UserTable
          users={users}
          setEditUser={updateUser}
          deleteUser={(val) => {
            deleteUser(val);
          }}
          activeUser={activeUser}
        />
      </div>
    </>
  );
}

export default ManageUsers;
