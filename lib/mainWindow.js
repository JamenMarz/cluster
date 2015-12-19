import {screen} from 'electron';

/**
 * Create main window's settings.
 * @param {Object} opts - Configuration options for main window.
 * @return {Object} The main window configuration.
 */
function mainWindow(opts) {
  let {width, height} = screen.getPrimaryDisplay().workAreaSize;
  opts = Object.assign({
    width: width - 200,
    height: height - 200
  }, mainWindow._default, opts);
  return opts;
}

mainWindow._default = {
  center: true,
  autoHideMenuBar: true
};

export default mainWindow;
