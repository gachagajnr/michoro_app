import apiClient from 'app/services/client';

export default function signupUser(
  username: string,
  email: string,
  password: string,
) {
  return apiClient
    .service('users')
    .create({ username: username, email: email, password: password });
}
