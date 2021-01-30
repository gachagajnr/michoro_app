export interface ISignupRequestState {
  type: String;
  username: string;
  password: string;
  email:string;
}

interface IResponse {
  id: number;
}

export interface ISignupResponseState {
  type: String;
  response: IResponse;
}
