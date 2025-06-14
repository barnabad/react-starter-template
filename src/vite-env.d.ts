/// <reference types="vite/client" />

interface ImportMetaEnv {
  readonly VITE_ENVIRONMENT: 'development' | 'production';
}

interface ImportMeta {
  readonly env: ImportMetaEnv;
}
