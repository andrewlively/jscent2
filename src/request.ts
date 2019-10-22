import axios, { AxiosRequestConfig } from "axios";
import { Config } from "./config";

export class Request {

  private config: Config;

  constructor(config: Config) {
    this.config = config;
  }

  public async send(body: any): Promise<any> {
    const options: AxiosRequestConfig = {
      headers: {
        "Authorization": `apikey ${ this.config.token }`
      },
      timeout: this.config.timeout
    };

    const response = await axios.post(this.config.url, body, options);

    return response.data;
  }

}