# check-os-tray-support

> Check if the current OS supports showing Tray (useful for Electron apps)

[![npm](https://img.shields.io/npm/v/check-os-tray-support.svg?label=npm%20version)](https://www.npmjs.com/package/check-os-tray-support)

## About
Not all OSes support tray icons - this library helps handle unsupported operating systems _gracefully_.

## Installation
Install the library by running `npm install check-os-tray-support --save`.

## Usage
This library exposes a single method to check for support:

```javascript
const trayIconSupported = require("check-os-tray-support");

if (trayIconSupported()) {
  // build and attach a tray icon
}
```
