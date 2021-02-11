// Vars
let container;
let camera;
let renderer;
let scene;
let spheres;

function base() {
  container = document.querySelector(".container");

  // Create scene
  scene = new THREE.Scene();

  // Camera
  const fov = 35; // Field of view
  const aspect = container.clientWidth / container.clientWidth; // What I want to see
  const near = 0.1; // Clipping in meteres
  const far = 500;

  camera = new THREE.PerspectiveCamera(fov, aspect, near, far); // For isometric view
  camera.position.set(0, 0, 10);

  // Render engine
  renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true });
  renderer.setSize(container.clientWidth, container.clientHeight);
  renderer.setPixelRatio(window.devicePixelRatio);

  container.appendChild(renderer.domElement);

  // Model
  let loader = new THREE.GLTFLoader();
  loader.load("./spheres.gltf", (file) => {
    scene.add(file.scene);
    renderer.render(scene, camera);
  });
}

base();
