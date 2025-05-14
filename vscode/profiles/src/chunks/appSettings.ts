import { SettingsChunk } from "../definitions";

export const common: SettingsChunk = {
  basicSettings: {
    "window.newWindowProfile": "Main",
    "window.titleBarStyle": "custom",
    "window.commandCenter": true,
    "lldb.suppressUpdateNotifications": true,
  },
};

export const linux: SettingsChunk = {
  basicSettings: {
    "update.mode": "manual",
    "files.hotExit": "onExitAndWindowClose",
    // "window.restoreWindows": "preserve",
    // "terminal.integrated.showLinkHover": false,
  },
};

export const macos: SettingsChunk = {
  basicSettings: {
    "update.mode": "manual",
  },
};
