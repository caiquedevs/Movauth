import types from "../types";

interface IState {
  travels: any[];
  filtered: any[];
}

const initialState: IState = {
  travels: [],
  filtered: [],
};

export default function reducer(state = initialState, action: any) {
  switch (action.type) {
    case types.FETCH_TRAVELS_SUCCESS: {
      const newState = { ...state };
      newState.travels = [...action.payload];
      return newState;
    }

    case types.FILTER_TRAVELS_BY_DRIVER_SUCCESS: {
      const newState = { ...state };
      newState.filtered = [...action.payload];
      return newState;
    }

    default: {
      return state;
    }
  }
}
