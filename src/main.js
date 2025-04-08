const { app, BrowserWindow, Menu, nativeImage  } = require('electron');
const path = require('node:path');


const turbinaImg = nativeImage.createFromPath('./src/assets/turbina.ico')

// Squirrel startup (instalação no Windows)
if (require('electron-squirrel-startup')) {
  app.quit();
}

function createWindow() {
  const win = new BrowserWindow({
    width: 500,
    height: 500,
    frame: false,
    transparent: true,
    resizable: false,
    alwaysOnTop: true,
    icon: turbinaImg,
    webPreferences: {
      preload: MAIN_WINDOW_PRELOAD_WEBPACK_ENTRY,
    }
  });

  win.loadURL(MAIN_WINDOW_WEBPACK_ENTRY);
  Menu.setApplicationMenu(null);
}

app.whenReady().then(() => {
  createWindow();

  app.on('activate', () => {
    if (BrowserWindow.getAllWindows().length === 0) {
      createWindow();
    }
  });
});

app.on('window-all-closed', () => {
  if (process.platform !== 'darwin') {
    app.quit();
  }
});
