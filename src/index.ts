import { Config } from "./config";
import { Request } from "./request";

export default class Client {

  private config: any;

  constructor(options: any) {
    this.config = new Config(options);
  }

  public publish(channel: string, data: any): Promise<any> {
    return new Request(this.config).send({
      method: "publish",
      params: { channel, data }
    });
  }

  public broadcast(channels: string[], data: any): Promise<any> {
    return new Request(this.config).send({
      method: "broadcast",
      params: { channels, data }
    });
  }

  public unsubscribe(channel: string, user: string): Promise<any> {
    return new Request(this.config).send({
      method: "unsubscribe",
      params: { channel, user }
    });
  }

  public disconnect(user: string): Promise<any> {
    return new Request(this.config).send({
      method: "disconnect",
      params: { user }
    });
  }

  public async presence(channel: string): Promise<Array<{ [id: string]: { client: string, user: string } }>> {
    const { result: { presence } } = await new Request(this.config).send({
      method: "presence",
      params: { channel }
    });

    return presence;
  }

  public async presenceStats(channel: string): Promise<{ num_clients: number, num_users: number }> {
    const { result: { num_clients, num_users } } = await new Request(this.config).send({
      method: "presence_stats",
      params: { channel }
    });

    return ({ num_clients, num_users });
  }

  public async history(channel: string): Promise<Array<{ data: any, uid: string }>> {
    const { result: { publications } } = await new Request(this.config).send({
      method: "history",
      params: { channel }
    });

    return publications;
  }

  public async channels(): Promise<string[]> {
    const { result: { channels } } = await new Request(this.config).send({
      method: "channels",
      params: {}
    });

    return channels;
  }

  public async info(): Promise<Array<{
    name: string,
    num_channels: number,
    num_clients: number,
    num_users: number,
    uid: string,
    uptime: number,
    version: string
  }>> {
    const { result: { nodes } } = await new Request(this.config).send({
      method: "info",
      params: {}
    });

    return nodes;
  }

}