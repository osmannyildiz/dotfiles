import * as appSettingsChunks from "./chunks/appSettings";
import { Device } from "./definitions";

export const askerLm: Device = {
  name: "asker_lm",
  appSettings: [appSettingsChunks.common, appSettingsChunks.linux],
};

export const panter: Device = {
  name: "panter",
  appSettings: [appSettingsChunks.common, appSettingsChunks.macos],
};

export const devices = [askerLm, panter];
