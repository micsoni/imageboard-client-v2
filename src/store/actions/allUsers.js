import request from "superagent";

const baseUrl = "http://localhost:4000";

function getallUsers(userData) {
  return {
    type: "ALL_USERS",
    payload: userData
  };
}

export const getUsers = () => (dispatch, getState) => {
  const state = getState();
  const { allUsers } = state;
  console.log(allUsers);
  if (!allUsers.all.length) {
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
