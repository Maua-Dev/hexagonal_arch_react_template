import { ObjectValues } from './object-values'

export const STAGE = {
  TEST: 'test',
  PROD: 'prod',
  HOMOLOG: 'homolog',
  DEV: 'dev'
} as const

export type STAGE = ObjectValues<typeof STAGE>
