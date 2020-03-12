import request from "superagent";

const baseUrl = "http://localhost:4000";

function allImages(imageData) {
  return {
    type: "ALL_IMAGES",
    payload: imageData
  };
}
export const getImages = () => (dispatch, getState) => {
  const state = getState();
  const { images } = state;
  if (!images.all.length) {
    request
      .get(`${baseUrl}/images`)
      .then(response => {
        const action = allImages(response.body);
        dispatch(action);
      })
      .catch(console.error);
  }
};

function newImage(newImageData) {
  return {
    type: "NEW_IMAGE",
    payload: newImageData
  };
}

export const createImage = data => (dispatch, getState) => {
  const state = getState();

  const { user } = state;
  console.log(user);

  request
    .post(`${baseUrl}/images`)
    .set("Authorization", `Bearer ${user.jwt}`)
    .send({ ...data, userId: user.id })
    .then(response => {
      const action = newImage(response.body);
      dispatch(action);
    })
    .catch(console.error);
};

