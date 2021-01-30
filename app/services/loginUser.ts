import apiClient  from 'app/services/client';

export default function loginUser(username: string, password: string) {
   return apiClient.authenticate({
    strategy: 'local',
     username,
     password,
  })
}
