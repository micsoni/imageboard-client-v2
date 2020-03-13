const initialState = { all: [] };

export default function(state = initialState, action = {}) {
  switch (action.type) {
    case "ALL_IMAGES": {
      return {
        ...state,
        all: action.payload
      };
    }
    case "NEW_IMAGE": {
      return {
        ...state,
        all: [action.payload, ...state.all]
      };
    }
    default:
      return state;
  }
}
