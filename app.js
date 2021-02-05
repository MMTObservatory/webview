const {app, BrowserWindow} = require('electron') // http://electron.atom.io/docs/api

// Set up command-line switches and their defaults
app.commandLine.appendSwitch("width", 1024)
app.commandLine.appendSwitch("height", 768)
app.commandLine.appendSwitch("url", "http://mmto.org")

let window = null

// Wait until the app is ready
app.once('ready', () => {
  // Create a new window
  window = new BrowserWindow({
    width: app.commandLine.getSwitchValue("width"),
    height: app.commandLine.getSwitchValue("height"),
    // Don't show the window until it ready, this prevents any white flickering
    show: false,
    webPreferences: {
      // Disable node integration in remote page
      nodeIntegration: false
    }
  })

  const url = app.commandLine.getSwitchValue("url")
  window.loadURL(url)

  // Show window when page is ready
  window.once('ready-to-show', () => {
    window.show()
  })
})

app.on('window-all-closed', () => {
  if (process.platform !== 'darwin') {
	  app.quit()
  }
})
