const express = require("express");
const router = express.Router();

/**
 * .query - Parameters
 * .body - Body, it can be a json or etc.
 * .headers = Header
 */

router.get("/fetch", (request, response) => {
  response.json({
    name: "John",
    gender: "Male",
  });
});

router.post("/insert", (request, response) => {
  response.json({ message: "Success!" });
});

router.get("/query", (request, response) => {
  response.send(request.query);
});

router.post("/postBody", (request, response) => {
  response.send(request.body);
});

router.post("/postHeader", (request, response) => {
  response.send(request.headers);
});

// Sample Logic
router.get("/samplelogic", (request, response) => {
  const { username, password } = request.query;

  if (username == "18326" && password == "samplePassword") {
    response.status(200).send({
      message: "Login Successfully!",
    });
  } else {
    response.status(500).send({
      status: "Login Failed!",
    });
  }
});
module.exports = router;
