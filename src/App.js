import React, { useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import UserForm from "./components/UserForm";
import UserTable from "./components/UserTable";
import EditUser from "./components/EditUser";
import ManageUsers from "./pages/ManageUsers";
import Login from "./pages/Login";
import Signup from "./pages/Signup";
import {
  addUser,
  deleteUser,
  islogin,
  loginUser,
  logOut,
  updateUser,
  users,
  activeUser,
} from "./db/user.db";
import Header from "./components/Header";

const App = () => {
  const [appStates, setAppStates] = useState({
    islogin,
    users,
    activeUser,
  });
  const [edit, setEdit] = useState(null);
  const handlers = {
    addUser: (...params) => setAppStates(addUser([...params])),
    updateUser: (...params) => setAppStates(updateUser([...params])),
    deleteUser: (...params) => setAppStates(deleteUser([...params])),
    loginUser: (...params) => setAppStates(loginUser([...params])),
    logOut: (...params) => setAppStates(logOut([...params])),
  };
  // console.log(appStates, " login user");
  return (
    <Router>
      <div className="min-h-screen bg-gray-100 p-4">
        <Header appStates={appStates} />
        <Routes>
          <Route path="/" element={<Login handleLogin={handlers?.loginUser} />}>
            <Route
              path="/login"
              element={<Login handleLogin={handlers?.loginUser} />}
            />
          </Route>
          <Route
            path="/manage-users"
            element={
              <ManageUsers
                data={appStates}
                deleteUser={handlers.deleteUser}
                updateUser={setEdit}
              />
            }
          />
          <Route
            path="/signup"
            element={<Signup addUser={handlers?.addUser} />}
          />
          <Route
            path="/update-user"
            element={
              <EditUser
                handleEdit={handlers.updateUser}
                editUser={edit}
                activeUser={activeUser}
              />
            }
          />
        </Routes>
      </div>
    </Router>
  );
};

export default App;
