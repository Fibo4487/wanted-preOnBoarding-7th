import axios from "axios";

export default class Api {
  private static readonly baseUrl = "http://localhost:4000";

  public static async get<T>(path: string): Promise<T> {
    try {
      const response = await axios.get<T>(`${this.baseUrl}${path}`);

      return response.data;
    } catch (error) {
      if (error instanceof Error) {
        throw console.error(error.message);
      } else {
        throw console.error(error);
      }
    }
  }
}
