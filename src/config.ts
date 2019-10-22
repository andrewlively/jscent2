export interface ConfigParams {
  url?: string;
  token: string;
  timeout?: number;
}

export class Config {

  public url: string;
  public token: string;
  public timeout: number;

  constructor(options?: ConfigParams) {
    options = options || { token: "", url: "" };

    let url = options.url || "";

    if (url.length > 0) {
      const path = "/api";

      if (url[url.length - 1] === "/") {
        url = url.slice(0, url.length - 1);
      }

      if (url.indexOf(path, url.length - path.length) === -1) {
        url = url + path + "/";
      } else {
        url = url + "/";
      }
    }

    this.url = url;
    this.token = options.token || "";
    this.timeout = options.timeout || 10000;
  }

}