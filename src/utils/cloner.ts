import { Cloner, degitCloner } from '../services/cloner.js';

const dCloner = new degitCloner();
export const cloner = new Cloner(dCloner);
