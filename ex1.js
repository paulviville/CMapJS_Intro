import { CMap1 } from './CMapJS/CMap/CMap.js';
import Renderer from './CMapJS/Rendering/Renderer.js';
import * as THREE from './CMapJS/Libs/three.module.js';
import { OrbitControls } from './CMapJS/Libs/OrbitsControls.js';

/// Set up - ThreeJS Scene, camera, and controls
const scene = new THREE.Scene();
scene.background = new THREE.Color(0xAAAAAA);

const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000.0);
camera.position.set(0, 0, 2);

const renderer = new THREE.WebGLRenderer();
renderer.setSize( window.innerWidth, window.innerHeight );
document.body.appendChild( renderer.domElement );

const orbit_controls = new OrbitControls(camera, renderer.domElement);

window.addEventListener('resize', function() {
    const width = window.innerWidth;
    const height = window.innerHeight;
    renderer.setSize(width, height);
    camera.aspect = width / height;
    camera.updateProjectionMatrix();
});

let ambientLight = new THREE.AmbientLight(0xAAAAFF, 0.5);
scene.add(ambientLight);
let pointLight0 = new THREE.PointLight(0x3137DD, 5);
pointLight0.position.set(10,8,5);
scene.add(pointLight0);


/// Exercise - Build a triangle

/// create a map of type CMap1

/// create 3 darts: .newDart

/// sew darts in ph1 with .sewPhi1
/// reminder: - a new dart loops on itself
///           - sewPh1 inserts a dart in a cycle

/// You can use .debug to check your map topology 

/// Set vertex embeddings: .setEmbeddings on map.vertex
/// Without embeddings you cannot add an attribute to a cell type

/// Create a vertex attribute "position"
/// an attribute is an object of type Array, accessor : [i]

/// Set vertex positions map.cell(map.vertex, dart): (0, 1, 0) (-0.866, -0.5, 0) (0.866, 0.5, 0)

/// Create Renderer

/// Create vertices and add to scene : .vertices.create .vertices.addTo

/// Same for edges

/// Same for faces







/// Page Loop
function update ()
{

}

function render()
{
	renderer.render(scene, camera);
}

function mainloop()
{
    update();
    render();
    requestAnimationFrame(mainloop);
}

mainloop();