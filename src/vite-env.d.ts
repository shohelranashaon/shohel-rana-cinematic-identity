/// <reference types="vite/client" />

/* Uppercase extension (e.g. hero-portrait.PNG) — Vite only declares '*.png' */
declare module "*.PNG" {
  const src: string;
  export default src;
}
