declare module '*.glsl' {
  const value: string
  export default value
}

declare module "*.png" {
  const value: string;
  export default value;
}

declare module "*.jpg" {
  const value: string;
  export default value;
}

declare module 'glslify' {
  declare const glsl;
  export default glsl;
}