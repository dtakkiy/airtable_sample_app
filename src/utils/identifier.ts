import { v4 as uuidv4 } from 'uuid';

export const generator_id = (): string => {
  return uuidv4();
};
