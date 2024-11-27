let users = [
  {
    name: "Maneesh",
    email: "maneesh@gmail.com",
    mobile: "67657657657",
    gender: "Male",
    status: "Active",
    role: "Admin",
    password: "123",
    id: 1,
  },
];
let activeUser = {};
let islogin = false;
let states = { users, activeUser, islogin };

function addUser(params) {
  if (Object.values(params[0])?.every((it) => it && true)) {
    users.push({ ...params[0], id: users?.length + 1 });
    states = { users, islogin, activeUser };
  } else {
    alert("Please provide all fields");
  }
  return { ...states };
}

function deleteUser(params) {
  const narr = users.filter((it) => it?.email != params[0]?.email);
  users = narr;
  states = { users: narr, islogin, activeUser };
  console.log(states, " stttt");
  return { ...states, users: [...narr] };
}

function loginUser(params) {
  if (Object.values(params[0])?.every((it) => it && true)) {
    const uinfo = users.find(
      (it) =>
        it?.email === params[0]?.email && it?.password === params[0]?.password
    );
    if (uinfo) {
      islogin = true;
      activeUser = uinfo;
      states = {
        islogin: true,
        activeUser: uinfo,
        users,
      };
      console.log("login success..");
      return {
        ...states,
        islogin: true,
        activeUser: uinfo,
      };
    } else {
      alert("Wrong Email & Password");
    }
  } else {
    alert("Please provide Email & Password");
  }
  return { ...states };
}

function updateUser(params) {
  const narr = [...users];
  narr[params[0]?.id-1] = params[0];
  users = [...narr];
  const au =
    states.activeUser?.id == params[0]?.id ? params[0] : states.activeUser;
    console.log(au,states.activeUser?.id, params[0]?.id,' update ids');
  activeUser = au;
  states = { users: narr, islogin, activeUser: au };
    console.log("update success..");
  return { ...states, users: [...narr] };
}

function logOut() {}

export {
  users,
  loginUser,
  islogin,
  addUser,
  updateUser,
  deleteUser,
  logOut,
  activeUser,
};
