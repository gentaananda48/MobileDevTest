import {userConstants} from '../constants';
import {userService} from '../networking';

export const userActions = {
  login,
  register,
  createMateri,
  editMateri,
  showMateri,
  deleteMateri,
};

function login(username, password, cb = '', cbError = '') {
  return dispatch => {
    dispatch(request({username}));

    userService.login(username, password).then(
      async user => {
        if (user.meta.status == 'success') {
          await dispatch(success(user));
          if (cb != '') {
            cb();
          }
        } else {
          dispatch(failure({message: user.errorMessage}));
          if (cb != '') {
            cb();
          }
        }
      },
      error => {
        // alert(JSON.stringify(error.response))
        dispatch(failure(error.toString()));
        if (cbError != '') {
          cbError(error.response);
        }
      },
    );
  };

  function request(user) {
    return {type: userConstants.LOGIN_REQUEST, user};
  }
  function success(user) {
    return {type: userConstants.LOGIN_SUCCESS, user};
  }
  function failure(error) {
    return {type: userConstants.LOGIN_FAILURE, error};
  }
}

function register(user, cb = '', cbError = '') {
  return dispatch => {
    dispatch(request(user));

    userService.register(user).then(
      response => {
        dispatch(success());
        if (cb != '') {
          cb();
        }
      },
      error => {
        // alert(JSON.stringify(error.response))
        dispatch(failure(error.toString()));
        if (cbError != '') {
          cbError(error.response);
        }
      },
    );
  };

  function request(user) {
    return {type: userConstants.REGISTER_REQUEST, user};
  }
  function success(user) {
    return {type: userConstants.REGISTER_SUCCESS, user};
  }
  function failure(error) {
    return {type: userConstants.REGISTER_FAILURE, error};
  }
}

function createMateri(user, cb = '', cbError = '') {
  return dispatch => {
    dispatch(request(user));

    userService.createMateri(user).then(
      response => {
        // console.log(response);
        dispatch(success());
        if (cb != '') {
          cb();
        }
      },
      error => {
        // alert(JSON.stringify(error.response))
        dispatch(failure(error.toString()));
        if (cbError != '') {
          cbError(error.response);
        }
      },
    );
  };

  function request(user) {
    return {type: userConstants.CREATE_MATERI_REQUEST, user};
  }
  function success(user) {
    return {type: userConstants.CREATE_MATERI_SUCCESS, user};
  }
  function failure(error) {
    return {type: userConstants.CREATE_MATERI_FAILURE, error};
  }
}

function showMateri() {
  return dispatch => {
    dispatch(request());

    userService.showMateri().then(
      item => {
        // console.log(JSON.stringify(item));
        dispatch(success(item));
      },
      error => {
        // console.log(error);
        dispatch(failure(error.toString()));
      },
    );
  };

  function request() {
    return {type: userConstants.LIST_MATERI_REQUEST};
  }
  function success(item) {
    return {type: userConstants.LIST_MATERI_SUCCESS, item};
  }
  function failure(error) {
    return {type: userConstants.LIST_MATERI_FAILURE, error};
  }
}

function editMateri(user, cb = '', cbError = '') {
  return dispatch => {
    dispatch(request(user));

    userService.editMateri(user).then(
      response => {
        // console.log(response);
        dispatch(success(response));
        if (cb != '') {
          cb();
        }
      },
      error => {
        // alert(JSON.stringify(error.response))
        // console.log(error);
        dispatch(failure(error.toString()));
        if (cbError != '') {
          cbError(error.response);
        }
      },
    );
  };

  function request(code) {
    return {type: userConstants.EDIT_MATERI_REQUEST, code};
  }
  function success(response) {
    return {type: userConstants.EDIT_MATERI_SUCCESS, response};
  }
  function failure(error) {
    return {type: userConstants.EDIT_MATERI_FAILURE, error};
  }
}
