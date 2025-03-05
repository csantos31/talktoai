export interface IApiService {
  fetchResponse(message: string): Promise<string>;
}
