import apiClient  from 'app/services/client';
import ApiConfig from 'app/config/api-config';

export default function signupUser(username: string, email:string, password: string,) {
   return apiClient.service('users').create(username, email, password)
}
