const { app, BrowserWindow, ipcMain } = require("electron");

let mainWindow;

app.whenReady().then(() => {
  mainWindow = new BrowserWindow({
    width: 800,
    height: 600,
    webPreferences: {
      nodeIntegration: true,
      contextIsolation: false,
    },
  });

  mainWindow.loadURL(`${app.getAppPath()}\\build\\index.html`);
});

ipcMain.on("number", (_, value) => {
  console.log(value);
});
