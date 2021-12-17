import { connect } from "mongoose";
import { stdout } from "process";

/*
Learn more at: https://www.mongodb.com/
Maybe I'll do a tutorial in the future
 */

export class MongoClient {
  constructor(SRV: string) {
    const start = performance.now();

    stdout.write("- MongoDB | Started Process...\n");
    connect(SRV)
      .then(() => {
        stdout.write("- MongoDB | Connected\n");
      })
      .catch((err) => {
        stdout.write(`${err}\n`);
      });

    const end = performance.now();
    stdout.write(`- MongoDB | Finished Process in ${end - start} ms\n`);
  }
}
