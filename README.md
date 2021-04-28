# Setup

This project was written in Typescript on NodeJS. To install Node, you can either download and install [binaries](https://nodejs.org/download/release/v15.0.1/) for a specific version (15.0.1) or install v15.0.1 with [nvm](https://github.com/nvm-sh/nvm) (or [nvm-windows](https://github.com/coreybutler/nvm-windows)).


After installing Node, run `npm -v` to ensure everything has installed correctly. If you just want to run the existing code, skip to **Running Built JS**. Otherwise, you will need Yarn to be able to modify the code and test your changes.

## (Optional) Yarn

You should now be able to install Yarn with `npm i -g yarn`. Run `yarn -v` to ensure Yarn installed correctly.

`cd` into the project directory and run `yarn` to install Typescript, ts-node, and other necessary packages. If everything has installed correctly, you should be able to run `yarn start:ts` to compile the Typescript source and execute it.

## Running Built JS

I have built the TS source (in 'src/') and pushed it in 'dist/'. If you just want to run the existing code, `cd` into the project directory and run `node dist/app.js`.