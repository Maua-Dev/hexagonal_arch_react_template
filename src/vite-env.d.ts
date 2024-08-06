/// <reference types="vite/client" />

interface ImportMetaEnv {
  readonly VITE_API_URL: string
  readonly VITE_STAGE: string
}

interface ImportMeta {
  readonly env: ImportMetaEnv
}
