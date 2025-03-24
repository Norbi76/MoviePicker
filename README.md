How to install npm:
1. Download Node.js - Visit the official Node.js website and download the installer for your operating system (Windows, macOS, or Linux). Choose the "LTS" (Long Term Support) version for most users, as it's stable.
2. Run the Installer - Once the installer has been downloaded, open it and follow the setup instructions. This will install Node.js and npm on your machine.
3. Verify Installation - After installation is complete, open a terminal (Command Prompt, PowerShell, or Bash) and check if npm is installed by running:
   npm --version
   node --version
If some version number is printed by these commands Node.js and npm were installed corectly.

If the npm command isn't recognized by the terminal it may be possible that npm wasn't added to the PATH variable. Here's how you do that:

1. Locate npm Installation Directory - Open your terminal and run:
  npm config get prefix
This will display the directory where npm is installed (usually something like C:\Users\<YourUsername>\AppData\Roaming\npm).
2. Copy the Path - Note down the displayed path.
3. Edit System Environment Variables:
  3.1 Press Win + R, type sysdm.cpl, and hit Enter.
  3.2 Go to the Advanced tab and click Environment Variables.
  3.3 Under "System Variables," find and select Path, then click Edit.
  3.4 Add the npm directory path you copied earlier by clicking New and pasting the path.
  3.5Click OK to save.
  3.6 Restart Terminal Close and reopen your terminal for the changes to take effect.
4. Try running the commands again.

How to install dependencies:
1. Clone project
2. cd movie-picker
3. npm install

How to start development server:
1. npm start 
