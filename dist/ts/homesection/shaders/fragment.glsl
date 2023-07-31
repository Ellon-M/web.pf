precision mediump float;

varying vec2 vUv;
varying float wave;

uniform sampler2D uTexture;
uniform float uTime;
uniform float uProg;
uniform float uIndex;
uniform vec2 uOffset;

vec3 rgbShift(sampler2D textureImage, vec2 uv, vec2 offset) {
   float r = texture2D(textureImage,uv + offset).r;
   vec2 gb = texture2D(textureImage,uv).gb;
   return vec3(r,gb);
}

void main() {
  vec2 uv = vUv;
  vec2 dUv = vec2(uv.x, uv.y);
  vec3 textureColor;
  
  float w = wave;
  float r = texture2D(uTexture, uv + uOffset).r;
  if (uOffset.y >= -0.005 && uOffset.y <= 0.005) {
    r = texture2D(uTexture, dUv + vec2(0.0, 0.0) + uProg * w * 0.04).r;
  }
  float g = texture2D(uTexture, dUv + vec2(0.0, 0.0) + uProg * w * 0.0).g;
  float b = texture2D(uTexture, dUv + vec2(0.0, 0.0) + uProg * w * -0.02).b;
  textureColor = vec3(r, g, b);
  
  gl_FragColor = vec4(textureColor, 1.0);
}