var app = require("./app");
var environment = require("./environment");

app.listen(environment.express.port, environment.express.host, (error) => {
  if (error) {
    console.error(error);
  }
  console.log(`App listening on port ${environment.express.port}`);
});
