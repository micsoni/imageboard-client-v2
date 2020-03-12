import request from "superagent";

const baseUrl = "http://localhost:4000";

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

// const a = 1

// const b = { a: a }
// b.a === 1

// const c = { a }
// c.a === 1

function createUser(userName) {
  return {
    type: "CREATE_USER",
    payload: userName
  };
}

export const singup = (email, password, username) => dispatch => {
  request
    .post(`${baseUrl}/user`)
    .send({ email: email, password: password, username: username })
    .then(response => {
      const action = createUser(response.body.username);
      dispatch(action);
    })
    .catch(console.error);
};

function singleUser(uniqueUser) {
  return {
    type: "UNIQUE_USER",
    payload: uniqueUser
  };
}
export const getUser = userParamId => (dispatch, getState) => {
     request
      .get(`${baseUrl}/user/${userParamId}`)
      .then(response => {
        const uniqueUser = response.body
        const action = singleUser(uniqueUser);
        dispatch(action);
      })
      .catch(console.error);
  
};
