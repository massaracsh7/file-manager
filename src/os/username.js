import os from 'os';

export const username = () => {
  const name = os.userInfo().username;
  console.log(`Current System User Name: ${name}`);
}