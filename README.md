# TodoList Desktop App

This project is a simple TodoList desktop application built with Electron and Material-UI.

## Installation

To set up the project locally, follow these steps:

1. **Clone the repository:**
   ```bash
   git clone <repository-url>
   cd todolist-desktop-app
   ```

2. **Install dependencies:**
   Make sure you have Node.js installed, then run:
   ```bash
   npm install
   ```

3. **Run the application:**
   To start the application in development mode, use:
   ```bash
   npm run dev
   ```

## Compiling to EXE

To package the application as an executable file (EXE), follow these steps:

1. **Build the application:**
   Make sure your project is built and ready for production. Run:
   ```bash
   npm run build
   ```

2. **Package the application:**
   Use Electron Packager to create the EXE file. Run the following command:
   ```bash
   electron-packager <sourcedir> <appname> --platform=win32 --arch=x64 #custom according to your os
   ```

3. **Find your EXE:**
   After the packaging process is complete, you will find the EXE file in the output directory.

## License

This project is licensed under the MIT License.