import types from '../types';
import { darkMode, lightMode } from '../../../styles/colors';

type mode = typeof darkMode | typeof lightMode;

interface IState {
  theme: mode;
}

const initialState: IState = {
  theme: darkMode,
};

export default function reducer(state = initialState, { type, payload }: any) {
  switch (type) {
    case types.CHANGE_THEME: {
      const newState = { ...state };
      newState.theme =
        JSON.stringify(newState.theme) === JSON.stringify(darkMode)
          ? lightMode
          : darkMode;

      return newState;
    }

    default: {
      return state;
    }
  }
}
