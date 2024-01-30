import os from 'os';

const userArr = process.argv.find(arg => arg.startsWith('--username='));
const userName = userArr ? userArr.split('=')[1] : 'user';
const startDir = os.homedir();

console.log(`Welcome to the File Manager, ${userName}!`);
console.log(`You are currently in: ${startDir}`);

process.on('SIGINT', () => {
  console.log(`Thank you for using File Manager, ${userName}, goodbye!`);
  process.exit();
});

process.stdin.on('data', (data) => {
  const input = data.toString().trim();

  if (input === '.exit') {
    console.log(`Thank you for using File Manager, ${userName}, goodbye!`);
    process.exit();
  }
  console.log(`You are currently in: ${startDir}`);
});

process.stdout.write('Enter your command: ');