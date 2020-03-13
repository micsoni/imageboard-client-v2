import request from "superagent";

const baseUrl = "https://damp-harbor-71052.herokuapp.com";

function getallUsers(userData) {
  return {
    type: "ALL_USERS",
    payload: userData
  };
}

export const getUsers = () => (dispatch, getState) => {
  const state = getState();
  const { users } = state;
  console.log(users);
  if (!users.all.length) {
    request
      .get(`${baseUrl}/user`)
      .then(response => {
        const action = getallUsers(response.body);
        console.log("HELLO", response.body);
        dispatch(action);
      })
      .catch(console.error);
  }
};
