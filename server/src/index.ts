import * as dotenv from "dotenv";
dotenv.config({ path: __dirname + "/.env.development.local" });
import app from "./frameworks-drivers/express/app";
import environment from "./environment";

app.listen(
  Number(environment.express.port),
  String(environment.express.host),
  () => {
    console.log(`App listening on port ${environment.express.port}`);
  }
);
