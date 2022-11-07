var app = require("./app");
var environment = require("./setup/environment");

app.listen(environment.express.port, environment.express.host, (error) => {
  if (error) {
    console.error(error);
  }
  console.log(`App listening on port ${environment.express.port}`);
});
