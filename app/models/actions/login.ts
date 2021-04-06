export interface ILoginRequestState {
  type: String;
  email: string;
  password: string;
}

interface IResponse {
  _id: string;
}

export interface ILoginResponseState {
  type: String;
  response: IResponse;
}
