import { Schema, SchemaTypes, Types, model } from "mongoose";

// customize to your need

const GuildSchema = new Schema({
  _id: Types.ObjectId,
  exampleProperity: String,
  exampleValue: Number,
});

export = model("MySchema", GuildSchema, "MySchemas");
