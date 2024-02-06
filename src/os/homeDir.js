import os from 'os';

export const homedir = () => {
  const targetDir = os.homedir();
  console.log(`Home Directory: ${targetDir}`);
}