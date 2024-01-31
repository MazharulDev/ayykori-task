import mongoose from "mongoose";
import app from "./app";
import config from "./config";
// import { errorlogger, logger } from "./shared/logger";
import { Server } from "http";

process.on("uncaughtException", (error) => {
  console.log(error); //errorlogger.error
  process.exit(1);
});

let server: Server;
async function main() {
  try {
    await mongoose.connect(config.database_url as string);
    console.log(`Database is connected`); // logger.info

    server = app.listen(config.port, () => {
      console.log(`Application app listening on port ${config.port}`); //logger.info
    });
  } catch (error) {
    console.log("Failed to connect", error); //errorlogger.error
  }

  process.on("unhandledRejection", (error) => {
    if (server) {
      server.close(() => {
        console.log(error); //errorlogger.error
        process.exit(1);
      });
    } else {
      process.exit(1);
    }
  });
}

main();

// process.on('SIGTERM', () => {
//   logger.info('SIGTERM is received');
//   if (server) {
//     server.close();
//   }
// });
