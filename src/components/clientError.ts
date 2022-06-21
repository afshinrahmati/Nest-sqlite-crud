export class ClientError {
    status = 400;
    name = "";
    message: string | undefined;
    details: Object | undefined = undefined;
  
    /**
     * @param status : status code
     * @param name : error type
     * @param message : message received from server
     * @param details : detail on error
     */
    constructor(
      status: number,
      name: string,
      details?: Object,
      message?: string
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
  
