// full_server/server.js

import express from "express";
import routes from "./routes";

const app = express();

app.use((req, res, next) => {
  req.dbPath = process.argv[2]; // Database filename passed as argument
  next();
});

app.use("/", routes);

const port = 1245;
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});

export default app;
