const initialState = { all: [], uniqueUser: {} };

export default function(state = initialState, action = {}) {
  switch (action.type) {
    case "ALL_USERS": {
      return {
        ...state,
        all: action.payload
      };
    }
    case "CREATE_USER": {
      return {
        ...state,
        all: [action.payload, ...state.all]
      };
    }
    case "UNIQUE_USER": {
      return {
        ...state,
        uniqueUser: action.payload
      };
    }
    case "CHANGE_IMAGE": {
      const imagesUpdated = state.uniqueUser.images.map(image => {
        const condition = image.id === action.payload.id;

        if (condition) {
          return action.payload;
        }
        return image;
      });
      return {
        ...state,
        uniqueUser: { ...state.uniqueUser, images: imagesUpdated }
      };
    }
    case "IMAGE_DELETE_SUCCESS": {
      const imageId = action.payload;
      const allMinusDeleted = state.uniqueUser.images.filter(
        image => image.id !== imageId
      );
      return {
        ...state,
        uniqueUser: { ...state.uniqueUser, images: allMinusDeleted }
      };
    }
    default:
      return state;
  }
}
