import os from 'os';

export const architecture = () => {
  const data = os.arch();
  console.log(`CPU Architecture: ${data}`);
}