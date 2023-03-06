const { server_proxy_t } = require("@nportverse/comheadjs");

if (require.main == module) {
  (async () => {
    const client = new server_proxy_t(
      "192.168.0.160",
      3007,
      "U2FsdGVkX1+//o0W42PIS0Am5FeBhnaiLa48kOXE2dM="
    );

    //1. connect to TCP server

    await client.connect();
    //2. send Message(Tr) to TCP server
    const result = await client.call({
      tr_code: 1234,
      message: "hello",
    });

    //3. console.log response
    console.log(result);
  })();
}
