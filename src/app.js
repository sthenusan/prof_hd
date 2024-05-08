const express = require("express");
const routes = require("./routes");
const logger = require("./logger");

const app = express();

app.use(express.json());
app.use("/", routes);

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  logger.info(`Server is running on port ${PORT}`);
});
