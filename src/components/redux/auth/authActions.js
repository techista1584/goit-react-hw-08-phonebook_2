import { createAction } from '@reduxjs/toolkit';

const register = {
  request: createAction('auth/registerRequest'),
  success: createAction('auth/registerSuccess'),
  error: createAction('auth/registerError'),
};

const login = {
  request: createAction('auth/loginRequest'),
  success: createAction('auth/loginSuccess'),
  error: createAction('auth/loginError'),
};

const logout = {
  request: createAction('auth/logoutRequest'),
  success: createAction('auth/logoutSuccess'),
  error: createAction('auth/logoutError'),
};

const getCurrentUser = {
  request: createAction('auth/getCurrentUserRequest'),
  success: createAction('auth/getCurrentUserSuccess'),
  error: createAction('auth/getCurrentUserError'),
};

const actions = {
  register,
  login,
  logout,
  getCurrentUser,
};

export default actions;
