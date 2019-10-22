# jscent2

JS (TS) Client for [Centrifugo](https://github.com/centrifugal/centrifugo).

Built with [TypeScript](https://www.typescriptlang.org/) and [Axios](https://github.com/axios/axios)


## Example usage

```typescript
import JSCent from "jscent2";

const jsCentClient = new JSCent({
  url: "CENTRIFUGE_SERVER_URL",
  token: "CENTRIGURE_API_TOKEN"
});

await jsCentClient.publish(
  "public", // Channel name
  { // Data to publish to channel
    text: "Hello, World!"
  }
);
```
