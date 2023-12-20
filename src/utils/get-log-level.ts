import { logLevel } from 'kafkajs';

export const getLogLevel = (level: string): logLevel => {
  let logLvl = logLevel[level as keyof typeof logLevel];
  if (!logLvl) {
    console.error(`getLogLevel Error, level string: ${level} not valid`);
    throw Error(`getLogLevel Error, level string: ${level} not valid`);
  }
  return logLvl;
};
