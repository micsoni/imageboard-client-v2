import request from "superagent";

const baseUrl = "https://damp-harbor-71052.herokuapp.com";

function makeLogin(loginData) {
  return {
    type: "JWT",
    payload: loginData
  };
}

export const login = (email, password) => dispatch => {
  request
    .post(`${baseUrl}/login`)
    .send({ email: email, password: password })
    .then(response => {
      const action = makeLogin(response.body);
      dispatch(action);
    })
    .catch(console.error);
};

function createUser(userName) {
  return {
    type: "CREATE_USER",
    payload: userName
  };
}

export const singup = (email, password, username, history) => dispatch => {
  request
    .post(`${baseUrl}/user`)
    .send({ email: email, password: password, username: username })
    .then(response => {
      const action = createUser(response.body);
      dispatch(action);
    })
    .then(() => history.push("/myimageboard"))
    .catch(console.error);
};

function singleUser(uniqueUser) {
  return {
    type: "UNIQUE_USER",
    payload: uniqueUser
  };
}

export const getUser = userParamId => (dispatch, getState) => {
  if (!userParamId) {
    const state = getState();
    userParamId = state.userLoggedIn.id;
  }

  return request
    .get(`${baseUrl}/user/${userParamId}`)
    .then(response => {
      const body = response.body;

      const uniqueUser = {
        id: body.id,
        username: body.username,
        images: body.images
      };
      const action = singleUser(uniqueUser);
      dispatch(action);
    })
    .catch(console.error);
};

export function logout() {
  return {
    type: "LOG_OUT",
    payload: ""
  };
}
