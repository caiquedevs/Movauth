import types from "../types";

interface IState {
  drivers: any[];
  filtered: any[];
}

const initialState: IState = {
  drivers: [],
  filtered: [],
};

export default function reducer(state = initialState, action: any) {
  switch (action.type) {
    case types.FETCH_DRIVERS_SUCCESS: {
      const newState = { ...state };
      newState.drivers = [...action.payload];
      newState.filtered = [];
      return newState;
    }

    case types.FILTER_DRIVERS_SUCCESS: {
      const newState = { ...state };
      newState.filtered = [...action.payload];
      return newState;
    }

    default: {
      return state;
    }
  }
}
