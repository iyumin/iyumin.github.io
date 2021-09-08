export interface ILog {
  id?: number,
  uid?: string,
  /**
   * date & time the log was created
   */
  datetime: number | string,
  /**
   * ip address
   */
  ip: string,
  /**
   * the method of request
   */
  method: string,
  /**
   * path[url] of request
   */
  url: string,
  /**
   * http[s] status code
   */
  status: number,
  /**
   * time spent per request
   */
  spent: string,
  /**
   * 
   */
  message: string,
  /**
   * 
   */
  length: string,
}