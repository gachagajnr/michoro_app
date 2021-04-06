export interface IHomeRequestState {}

interface IResponse {
  arts: Array<Object>;
  arts_error: string;
}

export interface IHomeResponseState {
  type: Object;
  response: IResponse;
}
