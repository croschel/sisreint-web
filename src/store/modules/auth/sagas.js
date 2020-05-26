import { takeLatest, call, put, all } from 'redux-saga/effects';
import history from '~/services/history';
import api from '~/services/api';
import { signInSuccess, signFailure } from './actions';
import { toast } from 'react-toastify';

export function* signIn({ payload }) {
  try {
    const { nickname, password } = payload;

    const response = yield call(api.post, 'auth', {
      nickname,
      password,
    });

    const { token, user } = response.data;
    api.defaults.headers.Authorization = `Bearer ${token}`;

    yield put(signInSuccess(token, user));
    toast.success("Login realizado com sucesso")
    history.push('/militaries');

  } catch (err) {
    yield put(signFailure());
    toast.error("Falha no Login, Nome de guerra ou senha incorretos")
  }

}

export function signOut() {
  history.push('/');
  toast.success("Logout realizado com sucesso")
}

export function setToken({ payload }) {
  if (!payload) return;

  const { token } = payload.auth;

  if (token) {
    api.defaults.headers.Authorization = `Bearer ${token}`;
  }
}

export default all([
  takeLatest('persist/REHYDRATE', setToken),
  takeLatest('@auth/SIGN_IN_REQUEST', signIn),
  takeLatest('@auth/SIGN_OUT', signOut)
])