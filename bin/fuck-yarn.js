#!/usr/bin/env node

const path = require('path');
const argv = require('./cli');
const fuckYarn = require('../index.js');

fuckYarn({
  cwd: process.cwd(),
  removePackageLockJson: Boolean(argv._.length)
});
