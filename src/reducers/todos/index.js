import {
  GET_LIST_TODOS,
  ADD_TODOS,
  DELETE_TODOS,
  DETAIL_TODOS,
  UPDATE_TODOS,
} from "../../actions/todosAction";

const initialState = {
  getListTodosResult: false,
  getListTodosLoading: false,
  getListTodosError: false,

  addTodosResult: false,
  addTodosLoading: false,
  addTodosError: false,

  deleteTodosResult: false,
  deleteTodosLoading: false,
  deleteTodosError: false,

  detailTodosResult: false,

  updateTodosResult: false,
  updateTodosLoading: false,
  updateTodosError: false,
};

const todos = (state = initialState, action) => {
  switch (action.type) {
    case GET_LIST_TODOS:
      return {
        ...state,
        getListTodosResult: action.payload.data,
        getListTodosLoading: action.payload.loading,
        getListTodosError: action.payload.errorMessage,
      };

    case ADD_TODOS:
      return {
        ...state,
        addTodosResult: action.payload.data,
        addTodosLoading: action.payload.loading,
        addTodosError: action.payload.errorMessage,
      };

    case DELETE_TODOS:
      return {
        ...state,
        deleteTodosResult: action.payload.data,
        deleteTodosLoading: action.payload.loading,
        deleteTodosError: action.payload.errorMessage,
      };

    case DETAIL_TODOS:
      return {
        ...state,
        detailTodosResult: action.payload.data,
      };

    case UPDATE_TODOS:
      return {
        ...state,
        updateTodosResult: action.payload.data,
        updateTodosLoading: action.payload.loading,
        updateTodosError: action.payload.errorMessage,
      };
    default:
      return state;
  }
};

export default todos;
