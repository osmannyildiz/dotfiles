import * as appSettingsChunks from "./chunks/appSettings";
import { Device } from "./definitions";

export const askerLm: Device = {
	name: "asker_lm",
	appSettings: [appSettingsChunks.linux],
};

export const devices = [askerLm];
