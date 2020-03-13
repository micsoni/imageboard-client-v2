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

  const { userLoggedIn } = state;

  return request
    .post(`${baseUrl}/images`)
    .set("Authorization", `Bearer ${userLoggedIn.jwt}`)
    .send({ ...data, userId: userLoggedIn.id })
    .then(response => {
      const action = newImage(response.body);
      dispatch(action);
    })
    .catch(console.error);
};

function changeImage(newImage) {
  return {
    type: "CHANGE_IMAGE",
    payload: newImage
  };
}

export function updateImage(id, update) {
  return async function(dispatch, getState) {
    const state = getState();

    const { userLoggedIn } = state;
    try {
      const response = await request
        .put(`${baseUrl}/images/${id}`)
        .set("Authorization", `Bearer ${userLoggedIn.jwt}`)
        .send(update);
      const action = changeImage(response.body);

      dispatch(action);
    } catch (error) {
      console.error(error);
    }
  };
}

export const uniqueImageDelete = id => ({
  type: "IMAGE_DELETE_SUCCESS",
  payload: id
});

export const deleteImage = id => (dispatch, getState) => {
  const state = getState();

  const { userLoggedIn } = state;
  request
    .delete(`${baseUrl}/images/${id}`)
    .set("Authorization", `Bearer ${userLoggedIn.jwt}`)
    .then(response => {
      dispatch(uniqueImageDelete(id));
    })
    .catch(console.error);
};
