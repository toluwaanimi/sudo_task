import { IResponse } from "../interfaces/interface";



export class Helper {
      /**
   * Sends default JSON response to client
   * @param {*} content
   * @param {*} message
   */
  static sendJsonResponse(message: string, content?: any): IResponse {
    return {
      status: true,
      message,
      data: content,
    };
  }
}