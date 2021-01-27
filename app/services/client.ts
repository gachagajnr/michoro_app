import io from 'socket.io-client';
import AsyncStorage from '@react-native-async-storage/async-storage';
import feathers from '@feathersjs/feathers';
import socketio from '@feathersjs/socketio-client';
import authentication from '@feathersjs/authentication-client';

const socket = io('http://localhost:3030', {
  transports: ['websocket'],
  forceNew: true
});
const apiClient = feathers();

apiClient.configure(socketio(socket));
apiClient.configure(authentication({
  storage: AsyncStorage
}));

export { apiClient };
