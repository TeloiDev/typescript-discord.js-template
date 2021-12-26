import { Schema, model, Document, Model } from "mongoose";

// customize to your need
interface schema extends Document {
  exampleProperity: string;
  exampleValie: number;
}

const ExampleSchema: Schema = new Schema({
  exampleProperity: String,
  exampleValue: Number,
});

const schem: Model<schema> = model("MySchema", ExampleSchema);
export default schem;
