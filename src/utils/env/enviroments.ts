import { STAGE } from '../stage'

type Environments = {
  apiUrl: string
  stage: STAGE
}

export const environments: Environments = {
  apiUrl: import.meta.env.VITE_API_URL || 'http://localhost:8000',
  stage: import.meta.env.VITE_STAGE || STAGE.TEST
}
