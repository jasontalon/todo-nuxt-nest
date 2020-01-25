const express = require("express");
const api = require("api");

module.exports = async function() {
  const server = express();

  const app = await api(server);
  app.listen(() => {
    console.log("NestJS initialized");
  });

  return server;
};
