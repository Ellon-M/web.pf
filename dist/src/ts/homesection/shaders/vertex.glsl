`uniform sampler2D uTexture;
uniform vec2 uOffset;
varying vec2 vUv;
uniform float uTime;
uniform float uProg;
varying float wave;

#pragma glslify: noise = require(glsl-noise/simplex/3d)

#define M_PI 3.1415926535897932384626433832795

vec3 deformationCurve(vec3 pos, vec2 uv, vec2 offset) {
   pos.x = pos.x + (sin(uv.y * M_PI) * offset.x);
   pos.y = pos.y + (sin(uv.x * M_PI) * offset.y);
   return pos;
}

void main() {
   vec3 pos = position;

   pos.z += noise(vec3(pos.x * 4. + uTime, pos.y, 0.)) * uProg;
   wave = pos.z;
   pos.z *= 3.;
   vUv = uv + (uOffset * 2.5);
   vec3 newPosition = deformationCurve(pos, uv, uOffset);
   gl_Position = projectionMatrix * modelViewMatrix * vec4( newPosition, 1.0 );
}`

// uniform sampler2D uTexture;
// uniform vec2 uOffset;
// varying vec2 vUv;

// #define M_PI 3.1415926535897932384626433832795

// vec3 deformationCurve(vec3 position, vec2 uv, vec2 offset) {
//    position.x = position.x + (sin(uv.y * M_PI) * offset.x);
//    position.y = position.y + (sin(uv.x * M_PI) * offset.y);
//    return position;
// }

// void main() {
//    vUv = uv;
//    vec3 newPosition = deformationCurve(position, uv, uOffset);
//    gl_Position = projectionMatrix * modelViewMatrix * vec4( newPosition, 1.0 );
// }