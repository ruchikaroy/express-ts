A simple template created for backend using Typescript, Node and Express

Getting Started:
To run the application locally:

1. Clone the repository: https://github.com/ruchikaroy/express-ts
2. Installation requirements: run NPM install
3. After this, run command on the terminal, npm run serve to connect to server
4. Scripts explained: I have added prestart and preserve which will run before start and serve scripts which will automate the build everytime we run npm start and npm serve commands in the terminal.
   rimraf is installed to remove unecessary files from the dist folder. To be sure that all old files are deleted from the folder before the script will compile the files from .ts to .js
   The rimraf command is an alternative to the Linux command rm -rf. It allows you to do deep recursive deletion of files and folders.
