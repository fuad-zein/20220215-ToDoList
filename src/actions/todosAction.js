import axios from "axios";

export const GET_LIST_TODOS = "GET_LIST_TODOS";
export const ADD_TODOS = "ADD_TODOS";
export const DELETE_TODOS = "DELETE_TODOS";
export const DETAIL_TODOS = "DETAIL_TODOS";
export const UPDATE_TODOS = "UPDATE_TODOS";

export const getListTodos = () => {
  return (dispatch) => {
    dispatch({
      type: GET_LIST_TODOS,
      payload: {
        loading: true,
        data: false,
        errorMessage: false,
      },
    });

    axios({
      method: "GET",
      url: "http://localhost:3001/todos?_sort=id&_order=desc",
      timeout: 120000,
    })
      .then((response) => {
        // berhasil
        dispatch({
          type: GET_LIST_TODOS,
          payload: {
            loading: false,
            data: response.data,
            errorMessage: false,
          },
        });
      })
      .catch((error) => {
        // gagal
        dispatch({
          type: GET_LIST_TODOS,
          payload: {
            loading: false,
            data: false,
            errorMessage: error.message,
          },
        });
      });
  };
};

export const addTodos = (data) => {
  return (dispatch) => {
    dispatch({
      type: ADD_TODOS,
      payload: {
        loading: true,
        data: false,
        errorMessage: false,
      },
    });

    axios({
      method: "POST",
      url: "http://localhost:3001/todos",
      timeout: 120000,
      data: data,
    })
      .then((response) => {
        // berhasil
        dispatch({
          type: ADD_TODOS,
          payload: {
            loading: false,
            data: response.data,
            errorMessage: false,
          },
        });
      })
      .catch((error) => {
        // gagal
        dispatch({
          type: ADD_TODOS,
          payload: {
            loading: false,
            data: false,
            errorMessage: error.message,
          },
        });
      });
  };
};

export const deleteTodos = (id) => {
  return (dispatch) => {
    dispatch({
      type: DELETE_TODOS,
      payload: {
        loading: true,
        data: false,
        errorMessage: false,
      },
    });

    axios({
      method: "DELETE",
      url: "http://localhost:3001/todos/" + id,
      timeout: 120000,
    })
      .then((response) => {
        // berhasil
        dispatch({
          type: DELETE_TODOS,
          payload: {
            loading: false,
            data: response.data,
            errorMessage: false,
          },
        });
      })
      .catch((error) => {
        // gagal
        dispatch({
          type: DELETE_TODOS,
          payload: {
            loading: false,
            data: false,
            errorMessage: error.message,
          },
        });
      });
  };
};

export const detailTodos = (data) => {
  return (dispatch) => {
    dispatch({
      type: DETAIL_TODOS,
      payload: {
        data: data,
      },
    });
  };
};

export const updateTodos = (data) => {
  return (dispatch) => {
    dispatch({
      type: UPDATE_TODOS,
      payload: {
        loading: true,
        data: false,
        errorMessage: false,
      },
    });

    axios({
      method: "PUT",
      url: "http://localhost:3001/todos/" + data.id,
      timeout: 120000,
      data: data,
    })
      .then((response) => {
        // berhasil
        dispatch({
          type: UPDATE_TODOS,
          payload: {
            loading: false,
            data: response.data,
            errorMessage: false,
          },
        });
      })
      .catch((error) => {
        // gagal
        dispatch({
          type: UPDATE_TODOS,
          payload: {
            loading: false,
            data: false,
            errorMessage: error.message,
          },
        });
      });
  };
};
