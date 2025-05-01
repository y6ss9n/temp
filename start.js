// Cross-platform startup script
const { spawn } = require('child_process');
const path = require('path');
const os = require('os');

// Set environment variables
process.env.NODE_ENV = 'development';

// Determine the command based on the OS
const isWindows = os.platform() === 'win32';
const command = isWindows ? 'npx.cmd' : 'npx';

// Start the application
const child = spawn(command, ['tsx', 'server/index.ts'], {
  stdio: 'inherit',
  env: process.env
});

child.on('close', (code) => {
  console.log(`Process exited with code ${code}`);
});