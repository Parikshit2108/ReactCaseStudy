let userInfo = localStorage.getItem("userDB");
let userData = userInfo ? JSON.parse(userInfo) : [];

export const addData = (input) => {
  userData.push(input);
  localStorage.setItem("userDB", JSON.stringify(userData));
};

export const deleteInfo = (delIdx) => {
  userData.splice(delIdx, 1);
  localStorage.setItem("userDB", JSON.stringify(userData));
};

export let editInfo = (newdata, idx) => {
  userData[idx] = newdata;
  localStorage.setItem("userDB", JSON.stringify(userData));
};
