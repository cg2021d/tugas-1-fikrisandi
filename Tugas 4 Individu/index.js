import { OrbitControls } from "https://cdn.jsdelivr.net/npm/three@0.121.1/examples/jsm/controls/OrbitControls.js";
import { GLTFLoader } from "https://threejsfundamentals.org/threejs/resources/threejs/r132/examples/jsm/loaders/GLTFLoader.js";

/** @type {THREE.PerspectiveCamera} */
let camera;
/** @type {THREE.Scene} */
let scene;
/** @type {THREE.WebGLRenderer} */
let renderer;

let count = 0,
  cubeCamera1,
  cubeCamera2,
  cubeRenderTarget1,
  cubeRenderTarget2;

(function init() {
  // set up three.js scene
  scene = new THREE.Scene();
  const color = 0xffffff; // white
  const near = 1;
  const far = 100;
  // Panorama
  const panorama = new THREE.CubeTextureLoader();
  const textureBg = panorama.load(["img/posx.png", "img/negx.png", "img/posy.png", "img/negy.png", "img/posz.png", "img/negz.png"]);
  scene.background = textureBg;
  scene.fog = new THREE.Fog(color, near, far);

  //lights
  const ambientLight = new THREE.AmbientLight("white", 0.6);
  scene.add(ambientLight);
  // Bantuan posisi cahaya
  //const axesHelper = new THREE.AxesHelper( 15 );
  //scene.add( axesHelper );
  
  const directionalLight = new THREE.DirectionalLight("white", 0.8);
  directionalLight.position.set(-30, 20, -10);
  directionalLight.castShadow = true;
  scene.add(directionalLight);
  // posisi cahaya
  // let lightHelper = new THREE.DirectionalLightHelper(directionalLight, 2, 0x000000);
  // scene.add(lightHelper);
  

  // Camera
  camera = new THREE.PerspectiveCamera(75, 2, 0.1, 100);
  camera.position.x = 5;
  camera.position.y = 5;
  camera.position.z = 15;

  //Lantai
  const floorMaterial = new THREE.MeshPhongMaterial({
    side: THREE.DoubleSide,
    map: new THREE.TextureLoader().load("./img/lantai.png"),
  });
  

  const floor = new THREE.Mesh(
    new THREE.PlaneGeometry(25, 25, 100, 100),
    floorMaterial
  );
  floor.receiveShadow = true;
  floor.rotation.x = -Math.PI / 2;
  floor.position.y = -3;
  scene.add(floor);

  //Lantai

  //moon
  const Geometry = new THREE.SphereGeometry( 2, 32, 32 );
  const texture = new THREE.TextureLoader().load('./img/moon.jpg');
  const Material = new THREE.MeshPhongMaterial({
    map: texture,
    color: 0xFFD700,
  });
  const sphere = new THREE.Mesh(Geometry, Material);
  sphere.castShadow = true;
  sphere.receiveShadow = true;
  sphere.position.set(-30, 20, -10);
  scene.add(sphere);
  //moon

  //meja
  const schoolDesk = new GLTFLoader();
  schoolDesk.load("assets/models/meja/meja.gltf", (gltf) => {
    gltf.scene.traverse(function (node) {
      if (node.isMesh) {
        node.castShadow = true;
        node.receiveShadow = true;
        node.position.set(-3, -3, -2);
        node.scale.set(5, 4, 5);
      }
    });
    scene.add(gltf.scene);
  });
  //Meja

  //Kursi
  const chair = new GLTFLoader();
  chair.load(
    "assets/models/chair (1)/scene.gltf",
    (gltf) => {
      gltf.scene.traverse(function (node) {
        if (node.isMesh) {
          node.castShadow = true;
          node.receiveShadow = true;
          node.position.set(-2, -0.5, 5.2);
          node.scale.set(0.5, 0.5, 0.5);
        }
      });
      scene.add(gltf.scene);
    }
  );
  // Kursi
  
  //Reflective
  cubeRenderTarget1 = new THREE.WebGLCubeRenderTarget(256, {
    format: THREE.RGBFormat,
    generateMipmaps: true,
    minFilter: THREE.LinearMipmapLinearFilter,
    encoding: THREE.sRGBEncoding,
  });

  cubeCamera1 = new THREE.CubeCamera(1, 1000, cubeRenderTarget1);

  cubeRenderTarget2 = new THREE.WebGLCubeRenderTarget(256, {
    format: THREE.RGBFormat,
    generateMipmaps: true,
    minFilter: THREE.LinearMipmapLinearFilter,
    encoding: THREE.sRGBEncoding,
  });

  cubeCamera2 = new THREE.CubeCamera(1, 1000, cubeRenderTarget2);

  const refGeometry = new THREE.SphereGeometry(1, 32, 32);
  const refMaterial = new THREE.MeshBasicMaterial({
    envMap: cubeRenderTarget2.texture,
    combine: THREE.MultiplyOperation,
    reflectivity: 1,
  });
  const reflective = new THREE.Mesh(refGeometry, refMaterial);

  reflective.castShadow = true;
  reflective.receiveShadow = true;

  reflective.position.set(3, 2, -2);
  scene.add(reflective);
  //Reflective

  // Render
  renderer = new THREE.WebGLRenderer({ antialias: true });

  //OrbitControls
  const controls = new OrbitControls(camera, renderer.domElement);
  controls.enableDamping = true;
  controls.dampingFactor = 0.25;
  controls.enableZoom = true;
  //OrbitControls

  renderer.setSize(window.innerWidth, window.innerHeight);
  renderer.shadowMap.enabled = true;
  renderer.render(scene, camera);
  document.body.appendChild(renderer.domElement);

  function animation() {
    sphere.rotation.x += 0.01;
    sphere.rotation.y += 0.01;
    sphere.rotation.z += 0.01;

    if (count % 2 === 0) {
      cubeCamera1.update(renderer, scene);
    } else {
      cubeCamera2.update(renderer, scene);
    }

    count++;
    renderer.render(scene, camera);
    requestAnimationFrame(animation);
  }
  animation();
})();