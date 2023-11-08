const { Schema, model } = require("mongoose");

const guildSettingSchema = new Schema({
  gid: { type: String },
  prefix: { type: String, default: "w?" }
});

module.exports = model("settings", guildSettingSchema);