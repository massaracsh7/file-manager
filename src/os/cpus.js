import os from 'os';

export const cpus = () => {
  const data = os.cpus();
  console.log(`Number of CPUs: ${data.length}`);
  data.forEach((item, index) => {
    console.log(`CPU ${index + 1}:`);
    console.log(`  Model: ${item.model}`);
    console.log(`  Speed: ${item.speed / 1000} GHz`); // Convert speed to GHz
  });
}