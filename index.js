const execa = require('execa');

function isOSX() {
  return process.platform === 'darwin';
}

function isWindows() {
  return process.platform === 'win32';
}

function isLinux() {
  return process.platform === 'linux';
}

module.exports = function checkTraySupport() {
  if (isOSX() || isWindows()) {
    return Promise.resolve(true);
  }
  return execa('dpkg', ['--get-selections', 'libappindicator1']).then(res => {
    return res.stdout.endsWith('\tinstall');
  });
};
