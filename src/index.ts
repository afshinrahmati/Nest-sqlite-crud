import mongoose from "mongoose";
import "./utils/loadenv";
import app from "./app";
import { createClient } from "redis";
const port = process.env.SERVER_PORT;
(async () => {
    const client = createClient();
    client.on("connect", (err) => console.log("**** REDIS CONNECT ****"));

    await client.connect();

    await mongoose
        .connect(`${process.env.MOGOOSE_URL}`)
        .then(() => console.log("**** MONGO CONNECT ****"));
    const rand = Math.round(Math.random() * 7);
    app.listen(port, () =>
        console.log(`\x1b[3${rand}m%s\x1b[0m`, `Server is running on PORT ${port}`)
    );
})();

