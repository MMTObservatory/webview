#!/bin/bash

npm init -y
npm i --save-dev electron
npx @electron-forge/cli import
npm run make
