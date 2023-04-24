import * as THREE from "three";
import { OrbitControls } from "three/examples/jsm/controls/OrbitControls";

const scene = new THREE.Scene();
const scene2 = new THREE.Scene();

const camera1 = new THREE.PerspectiveCamera(75, 1, 0.1, 10);
const camera2 = new THREE.OrthographicCamera(-1, 1, 1, -1, 0.1, 10);
const camera3 = new THREE.OrthographicCamera(-1, 1, 1, -1, 0.1, 10);
const camera4 = new THREE.OrthographicCamera(-1, 1, 1, -1, 0.1, 10);
camera1.position.z = 2;
camera2.position.y = 2;
camera2.lookAt(new THREE.Vector3());
camera3.position.x = -2;
camera3.lookAt(new THREE.Vector3(0, 0, 0));
camera4.position.z = 2;

const canvas1 = document.getElementById("c1") as HTMLCanvasElement;
const canvas2 = document.getElementById("c2") as HTMLCanvasElement;
const canvas3 = document.getElementById("c3") as HTMLCanvasElement;
const canvas4 = document.getElementById("c4") as HTMLCanvasElement;

const renderer1 = new THREE.WebGLRenderer({ canvas: canvas1 });
renderer1.setSize(200, 200);
const renderer2 = new THREE.WebGLRenderer({ canvas: canvas2 });
renderer2.setSize(200, 200);
const renderer3 = new THREE.WebGLRenderer({ canvas: canvas3 });
renderer2.setSize(200, 200);
const renderer4 = new THREE.WebGLRenderer({ canvas: canvas4 });
renderer2.setSize(200, 200);
// document.body.appendChild(renderer.domElement);

new OrbitControls(camera1, renderer1.domElement);

// const geometry = new THREE.BoxGeometry();
const geometry = new THREE.TorusKnotGeometry();
const material = new THREE.MeshBasicMaterial({
  color: 0x00ff00,
  wireframe: true,
});

const cube = new THREE.Mesh(geometry, material);
cube.scale.x = 0.5;
cube.scale.y = 0.5;
cube.scale.z = 0.5;
scene.add(cube);
const cube2 = new THREE.Mesh(geometry, material);
scene2.add(cube2);

// window.addEventListener("resize", onWindowResize, false);
// function onWindowResize() {
//   camera.aspect = window.innerWidth / window.innerHeight;
//   camera.updateProjectionMatrix();
//   renderer.setSize(window.innerWidth, window.innerHeight);
//   render();
// }

function animate() {
  requestAnimationFrame(animate);

  cube.rotation.x += 0.01;
  cube.rotation.y += 0.01;

  cube2.rotation.y += 0.01;

  render();
}

function render() {
  renderer1.render(scene, camera1);
  renderer2.render(scene, camera2);
  renderer3.render(scene2, camera3);
  renderer4.render(scene, camera4);
}

animate();
