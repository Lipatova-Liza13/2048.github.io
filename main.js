const electron = require("electron");
const url = require("url");
const path = require("path");
const { app, BrowserWindow, Menu } = electron;
let mainWindow;

app.on("ready", function() {
  mainWindow = new BrowserWindow({
    height: 750,
    width: 500,
    minHeight: 750,
    minWidth: 500,
    maxHeight: 750,
    maxWidth: 500,
    icon: path.join(__dirname, "assets/icons/png/icon.png")
  });
  mainWindow.loadURL(
    url.format({
      pathname: path.join(__dirname, "mainWindow.html"),
      protocol: "file:",
      slashes: true
    })
  );

  var menu = Menu.buildFromTemplate([
    {
      label: "Помощь",
      submenu: [
        {
          label: "Правила",
          click() {
            require("electron").shell.openExternal(
              "http://www.vsekak.ru/raznye-sovety/17578-kak-projti-igru-2048-pravila-i-podskazki.html"
            );
          }
        },
        {
          label: "Выйти",
          click() {
            app.quit();
          }
        }
      ]
    }
  ]);
  Menu.setApplicationMenu(menu);
});
