const child_process = require('child_process');

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
    const result = child_process.spawnSync('dpkg', [
      '--get-selections',
      'libappindicator1'
    ]);
    if (result.error || result.status !== 0 || result.signal !== null) {
      return false;
    }
    return result.stdout
      .toString()
      .trim()
      .endsWith('\tinstall');
  } catch (err) {
    return false;
  }
};
