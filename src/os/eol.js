import os from 'os';

export const eol = () => console.log(`Default End-Of-Line (EOL): ${JSON.stringify(os.EOL)}`);
