const {app, BrowserWindow} = require('electron') // http://electron.atom.io/docs/api

// Set up command-line switches and their defaults
const yargs = require('yargs/yargs')
const { hideBin } = require('yargs/helpers')
const argv = yargs(hideBin(process.argv))
  .option('width', {
    alias: 'w',
    default: 1024,
    description: 'Browser window width'
  })
  .option('height', {
    alias: 'h',
    default: 768,
    description: 'Browser window height'
  })
  .option('url', {
    alias: 'u',
    default: "http://mmto.org",
    description: "URL to view"
  })
  .argv

let window = null

// Wait until the app is ready
app.once('ready', () => {
  // Create a new window
  window = new BrowserWindow({
    width: Number(argv.width),
    height: Number(argv.height),
    // Don't show the window until it ready, this prevents any white flickering
    show: false,
    webPreferences: {
      // Disable node integration in remote page
      nodeIntegration: false
    }
  })

  const url = argv.url
  window.loadURL(url)
  console.log(url)
  console.log(process.argv)

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
