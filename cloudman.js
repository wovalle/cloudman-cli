#!/usr/bin/env node

var program = require('commander');

program
    .version('0.0.1')
    .command('status', 'print status of instances', {isDefault: true})
    .parse(process.argv);
