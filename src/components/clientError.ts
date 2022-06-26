export class ClientError {
  status = 400;
  name = "";
  message: any | undefined;
  details: any | undefined = undefined;

  /**
   * @param status : status code
   * @param name : error type
   * @param message : message received from server
   * @param details : detail on error
   */
  constructor(
    status: number,
    name: string,
    details?: any,
    message?: any
  ) {
    this.status = status;
    this.name = name;
    this.message = message;
    if (!!details) {
      this.details = details;
    } else {
      this.details = undefined;
    }
  }
}

