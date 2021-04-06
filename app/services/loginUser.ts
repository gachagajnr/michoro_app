import apiClient  from 'app/services/client';

export default function loginUser(email: string, password: string) {
   return apiClient.authenticate({
    strategy: 'local',
     email,
     password,
  })
}
