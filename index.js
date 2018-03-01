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
    return true;
  }
  try {
    const { stdout } = execa.shellSync(
      'dpkg --get-selections libappindicator1'
    );
    return stdout.endsWith('\tinstall');
  } catch (err) {
    return false;
  }
};
