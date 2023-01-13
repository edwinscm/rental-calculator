import app from "./frameworks-drivers/express/app.js";
import environment from "./environment.js";

app.listen(Number(environment.express.port), () => {
  console.log(`App listening on port ${environment.express.port}`);
});
