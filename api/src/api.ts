import { ExpressAdapter } from "@nestjs/platform-express";
import { NestFactory } from "@nestjs/core";
import { AppModule } from "./app.module";

async function bootstrap(server) {
  const app = await NestFactory.create(AppModule, new ExpressAdapter(server));

  return app;
}

module.exports = bootstrap;
