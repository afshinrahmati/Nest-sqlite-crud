import mongoose from "mongoose";
import "./utils/loadenv";
import app from "./app";
import { createClient } from "redis";
const { SERVER_PORT, MOGOOSE_URL } = process.env;

(async () => {
    const client = createClient();
    client.on("connect", (err) => console.log(`\x1b[33m%s\x1b[0m`, "**** REDIS CONNECT ****"));

    await client.connect();

    await mongoose
        .connect(`${MOGOOSE_URL}`)
        .then(() => console.log(`\x1b[32m%s\x1b[0m`, "**** MONGO CONNECT ****"));
    app.listen(SERVER_PORT, () =>
        console.log(`\x1b[31m%s\x1b[0m`, `Server is running on PORT ${SERVER_PORT}`)
    );
})();

