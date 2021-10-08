import Axios from 'axios';
import {config} from '../../utils';
import {store} from '../helpers';

export const userService = {
  login,
  register,
  createMateri,
  listMateri,
  editMateri,
  showMateri,
  deleteMateri,
};

function login(username, password) {
  const params = new URLSearchParams();
  params.append('username', username);
  params.append('password', password);

  return Axios.post(`${config.apiURL}/oauth/token`, params)
    .then(handleResponse)
    .then(async data => {
      return data;
    });
}

function register(user) {
  const params = new URLSearchParams();
  params.append('first_name', user.first_name);
  params.append('last_name', user.last_name);
  params.append('username', user.username);
  params.append('password', user.password);
  params.append('password_confirmation', user.password_confirmation);
  params.append('phone', user.phone);
  params.append('email', user.email);

  return Axios.post(`${config.apiURL}/oauth/register`, params)
    .then(handleResponse)
    .then(async data => {
      return data;
    });
}

function createMateri(user) {
  const params = new FormData();

  const requestOptions = {
    headers: {
      Authorization: getToken(),
    },
  };

  params.append('title', user.title);
  params.append('content', user.content);
  params.append('user_id', user.user_id);

  user.image == ''
    ? params.append('image', user.image)
    : params.append('image', {
        uri: user.image,
        type: 'image/jpeg',
        name: 'foto.jpg',
      });
  return Axios.post(
    `${config.apiURL}/sentra_belajars/create`,
    params,
    requestOptions,
  )
    .then(handleResponse)
    .then(async data => {
      return data;
    });
}

function listMateri() {
  const requestOptions = {
    headers: {
      Authorization: getToken(),
    },
  };

  return Axios.get(`${config.apiURL}/sentra_belajars/`, requestOptions)
    .then(handleResponse)
    .then(async data => {
      return data;
    });
}

function showMateri() {
  const requestOptions = {
    headers: {
      Authorization: getToken(),
    },
  };

  return Axios.get(`${config.apiURL}/sentra_belajars/${id}`, requestOptions)
    .then(handleResponse)
    .then(async data => {
      return data;
    });
}

function editMateri() {
  const requestOptions = {
    headers: {
      Authorization: getToken(),
    },
  };

  params.append('title', user.title);
  params.append('content', user.content);
  params.append('user_id', user.user_id);

  user.image == ''
    ? params.append('image', user.image)
    : params.append('image', {
        uri: user.image,
        type: 'image/jpeg',
        name: 'foto.jpg',
      });
  return Axios.patch(`${config.apiURL}/sentra_belajars/${id}`, requestOptions)
    .then(handleResponse)
    .then(async data => {
      return data;
    });
}

function deleteMateri() {
  const requestOptions = {
    headers: {
      Authorization: getToken(),
    },
  };

  return Axios.post(`${config.apiURL}/sentra_belajars/${id}`, requestOptions)
    .then(handleResponse)
    .then(async data => {
      return data;
    });
}

function getToken() {
  const state = store.getState();
  const user = state.authentication.user;
  // alert(JSON.stringify(user))
  // alert(JSON.stringify(user))
  return user.token;
}
