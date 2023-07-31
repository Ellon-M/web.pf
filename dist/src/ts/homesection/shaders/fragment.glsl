`uniform sampler2D uTexture;
uniform float uAlpha;
uniform float uTime;
uniform float uProg;
uniform vec2 uOffset;
varying vec2 vUv;
varying float wave;

vec3 rgbShift(sampler2D textureImage, vec2 uv, vec2 offset) {
   float r = texture2D(textureImage,uv + offset * 1.2).r;
   vec2 gb = texture2D(textureImage,uv).gb;
   return vec3(r,gb);
}

void main() {
  vec3 color = rgbShift(uTexture,vUv,uOffset);
  gl_FragColor = vec4(color, uAlpha);

  vec2 uv = vUv;
  vec2 dUv = vec2(uv.x, uv.y);
  vec3 texture;
  float w = wave;
  float r = texture2D(uTexture, dUv + vec2(0., 0.) + uProg * w * 0.05).r;
  float g = texture2D(uTexture, dUv + vec2(0., 0.) + uProg * w * 0.0).g;
  float b = texture2D(uTexture, dUv + vec2(0., 0.) + uProg * w * -0.02).b;
  texture = vec3(r, g, b);

  gl_FragColor = vec4(texture, uAlpha);`
}

//  uniform sampler2D uTexture;
//  uniform float uAlpha;
//  uniform vec2 uOffset;
//  varying vec2 vUv;

// vec3 rgbShift(sampler2D textureImage, vec2 uv, vec2 offset) {
//    float r = texture2D(textureImage,uv + offset).r;
//    vec2 gb = texture2D(textureImage,uv).gb;
//    return vec3(r,gb);
//  }

// void main() {
//    vec3 color = rgbShift(uTexture,vUv,uOffset);
//    gl_FragColor = vec4(color,uAlpha);
//  }