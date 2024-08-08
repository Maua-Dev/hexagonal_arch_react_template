type ObjectValues<T> = T[keyof T]

export const STAGE = {
  TEST: 'test',
  PROD: 'prod',
  HOMOLOG: 'homolog',
  DEV: 'dev'
}

export type STAGE = ObjectValues<typeof STAGE>
