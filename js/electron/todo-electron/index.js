const electron = require('electron');

const { app, BrowserWindow, Menu, ipcMain } = electron;

let mainWindow;
let addWindow;

app.on('ready', () => {
  mainWindow = new BrowserWindow({ webPreferences: { nodeIntegration: true } });
  
  mainWindow.on('close', () => app.quit());
  
  mainWindow.loadURL(`file://${__dirname}/main.html`);

  const mainMenu = Menu.buildFromTemplate(menuTemplate);
  Menu.setApplicationMenu(mainMenu);
});

function createAddWindow() {
  addWindow = new BrowserWindow({
    width: 300,
    height: 200,
    title: 'Add new Todo',
    webPreferences: { nodeIntegration: true }
  });

  addWindow.loadURL(`file://${__dirname}/add.html`);
  addWindow.on('closed', () => addWindow = null);
}

ipcMain.on('todo:add', (event, todo) => {
  mainWindow.webContents.send('todo:add', todo);
  addWindow.close();
});

function clearTodos() {
  mainWindow.webContents.send('todo:clear');
}

const menuTemplate = [
  {
    label: 'File',
    submenu: [
      { 
        label: 'New Todo',
        accelerator: 'CmdOrCtrl+N',
        click() {
          createAddWindow();
        }
      },
      {
        label: 'Clear Todos',
        accelerator: 'CmdOrCtrl+T',
        click() {
          clearTodos();
        }
      },
      { 
        label: 'Quit',
        accelerator: 'CmdOrCtrl+Q',
        click() {
          app.quit();
        }
      },
    ]
  }
];

if (process.platform === 'darwin') {
  menuTemplate.unshift({});
}

if (process.env.NODE_ENV !== 'production') {
  menuTemplate.push({
    label: 'View',
    submenu: [
      {
        label: 'reload',
        accelerator: 'CmdOrCtrl+R',
        click() {
          mainWindow.webContents.reload();
        }
      },
      {
        label: 'Toggle Developer Tools',
        accelerator: 'CmdOrCtrl+U',
        click(item, focusedWindow) {
          focusedWindow.toggleDevTools();
        }
      },
    ]
  })
}
