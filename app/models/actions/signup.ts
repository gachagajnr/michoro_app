export interface ISignupRequestState {
  type: String;
  username: string;
  password: string;
  email:string;
}

interface IResponse {
  _id: string;
}

export interface ISignupResponseState {
  type: String;
  response: IResponse;
}
