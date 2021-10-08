import {userConstants} from '../constants';

const initialState = {
  loading: false,
  statusRequest: '',

  listMateri: [],
  listMateriRequest: false,

  createMateri: [],
  createMateriRequest: false,

  showMateri: [],
  showMateriRequest: false,

  editMateri: [],
  editMateriRequest: false,

  deleteMateri: [],
  deleteMateriRequest: false,
};

export function user(state = initialState, action) {
  switch (action.type) {
    case 'SET_LOADING':
      return {
        ...state,
        loading: action.value,
      };

    case 'SET_REQUEST':
      return {
        ...state,
        statusRequest: action.value,
      };

    case userConstants.LIST_MATERI_REQUEST:
      return {
        ...state,
        listMateriRequest: true,
      };

    case userConstants.LIST_MATERI_SUCCESS:
      return {
        ...state,
        listMateriRequest: true,
        listMateri: action.item.data,
      };

    case userConstants.LIST_MATERI_FAILURE:
      return {
        ...state,
        listMateriRequest: false,
      };

    case userConstants.CREATE_MATERI_REQUEST:
      return {
        ...state,
        createMateriRequest: true,
      };

    case userConstants.CREATE_MATERI_SUCCESS:
      return {
        ...state,
        createMateriRequest: true,
        createMateri: action.response.data,
      };

    case userConstants.CREATE_MATERI_FAILURE:
      return {
        ...state,
        createMateriRequest: false,
      };

    case userConstants.DETAIL_MATERI_REQUEST:
      return {
        ...state,
        showMateriRequest: true,
      };

    case userConstants.DETAIL_MATERI_SUCCESS:
      return {
        ...state,
        showMateriRequest: true,
        showMateri: action.item.data,
      };

    case userConstants.DETAIL_MATERI_FAILURE:
      return {
        ...state,
        showMateriRequest: false,
      };

    case userConstants.DELETE_MATERI_REQUEST:
      return {
        ...state,
        editMateriRequest: false,
      };

    case userConstants.DELETE_MATERI_SUCCESS:
      return {
        ...state,
        editMateriRequest: true,
        editMateri: action.response.data,
      };
    case userConstants.DELETE_MATERI_FAILURE:
      return {
        ...state,
        editMateriRequest: false,
        errorMessage: action.error.message,
      };
  }
  return state;
}
