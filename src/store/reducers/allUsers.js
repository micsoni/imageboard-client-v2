const initialState = { all: [], uniqueUser: {}};

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
    default:
      return state;
  }
}
