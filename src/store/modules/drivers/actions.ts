import types from '../types';

// Listar motoristas ------------------------------
export function fetchDriverRequest() {
  return {
    type: types.FETCH_DRIVERS_REQUEST,
  };
}

export function fetchDriverSuccess(payload: any[]) {
  return {
    type: types.FETCH_DRIVERS_SUCCESS,
    payload,
  };
}

export function filterDriverRequest(payload: string) {
  return {
    type: types.FILTER_DRIVERS_REQUEST,
    payload,
  };
}

export function filterDriverSuccess(payload: any[]) {
  return {
    type: types.FILTER_DRIVERS_SUCCESS,
    payload,
  };
}
