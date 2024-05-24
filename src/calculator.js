const logger = require("./logger");
module.exports.add = (req, res) => {
  const num1 = parseFloat(req.query.num1);
  const num2 = parseFloat(req.query.num2);
  if (isNaN(num1) || isNaN(num2)) {
    logger.error("Invalid input. Valid numbers Only.");
    return res
      .status(400)
      .json({ error: "Invalid input. Please provide valid numbers." });
  }
  const result = num1 + num2;
  logger.info(`New addition operation requested: ${num1} + ${num2}`);
  res.json({ result });
};

module.exports.subtract = (req, res) => {
  const num1 = parseFloat(req.query.num1);
  const num2 = parseFloat(req.query.num2);
  if (isNaN(num1) || isNaN(num2)) {
    logger.error("Invalid input. Valid numbers Only.");
    return res
      .status(400)
      .json({ error: "Invalid input. Please provide valid numbers." });
  }
  const result = num1 - num2;
  logger.info(`New subtraction operation requested: ${num1} - ${num2}`);
  res.json({ result });
};

module.exports.multiply = (req, res) => {
  const num1 = parseFloat(req.query.num1);
  const num2 = parseFloat(req.query.num2);
  if (isNaN(num1) || isNaN(num2)) {
    logger.error("Invalid input. Valid numbers Only.");
    return res
      .status(400)
      .json({ error: "Invalid input. Valid numbers Only." });
  }
  const result = num1 * num2;
  logger.info(`New multiplication operation requested: ${num1} * ${num2}`);
  res.json({ result });
};

module.exports.divide = (req, res) => {
  const num1 = parseFloat(req.query.num1);
  const num2 = parseFloat(req.query.num2);
  if (isNaN(num1) || isNaN(num2) || num2 === 0) {
    logger.error(
      "Invalid input. Valid numbers Only and ensure the divisor is not zero."
    );
    return res.status(400).json({
      error:
        "Invalid input. Valid numbers Only and ensure the divisor is not zero.",
    });
  }
  const result = num1 / num2;
  logger.info(`New division operation requested: ${num1} / ${num2}`);
  res.json({ result });
};

module.exports.exponentiate = (req, res) => {
  const num1 = parseFloat(req.query.num1);
  const num2 = parseFloat(req.query.num2);
  if (isNaN(num1) || isNaN(num2)) {
    logger.error("Invalid input. Valid numbers Only.");
    return res
      .status(400)
      .json({ error: "Invalid input. Valid numbers Only." });
  }
  const result = Math.pow(num1, num2);
  logger.info(`New exponentiation operation requested: ${num1} ^ ${num2}`);
  res.json({ result });
};

module.exports.sqrt = (req, res) => {
  const num = parseFloat(req.query.num);
  if (isNaN(num) || num < 0) {
    logger.error("Invalid input. Valid  non-negative number Only.");
    return res.status(400).json({
      error: "Invalid input. Valid  non-negative number Only.",
    });
  }
  const result = Math.sqrt(num);
  logger.info(`New square root operation requested: √${num}`);
  res.json({ result });
};

module.exports.modulo = (req, res) => {
  const num1 = parseFloat(req.query.num1);
  const num2 = parseFloat(req.query.num2);
  if (isNaN(num1) || isNaN(num2) || num2 === 0) {
    logger.error(
      "Invalid input. Valid numbers Only and ensure the divisor is not zero."
    );
    return res.status(400).json({
      error:
        "Invalid input. Valid numbers Only and ensure the divisor is not zero.",
    });
  }
  const result = num1 % num2;
  logger.info(`New modulo operation requested: ${num1} % ${num2}`);
  res.json({ result });
};

module.exports.healthCheck = (req, res) => {
  logger.info("Health checkup requested");

  res.json({
    status: "ok",
    timestamp: new Date().toISOString(),
    uptime: process.uptime(),
    message: "Service is up and running",
  });
};
