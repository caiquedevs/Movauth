import types from "../types";

// Listar viagens ------------------------------
export function fetchTravelsRequest() {
  return {
    type: types.FETCH_TRAVELS_REQUEST,
  };
}

export function fetchTravelsSuccess(payload: any) {
  return {
    type: types.FETCH_TRAVELS_SUCCESS,
    payload,
  };
}

export function filterTravelsByDriverRequest(payload: string) {
  return {
    type: types.FILTER_TRAVELS_BY_DRIVER_REQUEST,
    payload,
  };
}

export function filterTravelsByDriverSuccess(payload: any[]) {
  return {
    type: types.FILTER_TRAVELS_BY_DRIVER_SUCCESS,
    payload,
  };
}
