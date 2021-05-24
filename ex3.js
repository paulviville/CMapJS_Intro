import { CMap2 } from './CMapJS/CMap/CMap.js';
import { loadCMap2 } from './CMapJS/IO/Surface_Formats/CMap2IO.js';
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



/// Exercise - Apply 4pts subdivision to a closed curve


/// 4-pts curve: 
/// 	-- A ---- B ---- C ---- D --
///  => -- A -- a -- B -- b -- C -- c -- D --
/// 	b = (1/16) * (9 * (B + C) - (A + D)) 

const curveStr = `OFF

8 1 0
0.00   0.25   1.00
0.50   0.75   0.00
1.25   0.00   0.00
0.50  -0.75   0.00
0.00  -0.25  -1.00
-0.5  -0.75   0.00
-1.25  0.00   0.00
-0.50  0.75   0.00
8 0 1 2 3 4 5 6 7
`;

/// Load .off file

/// Get vertex attribute "position"

/// Set edge embeddings

/// Add edge attribute "midpoint"

/// Foreach edge compute future midpoint position and store it in midpoint
/// for debugging use edge mid

/// Create edge cache

/// Foreach edge of cache: get midpoint position then cut and set vertex position

/// Delete edge attribute "midpoint"


/// Turn previous code into a function and apply function multiple times to curve

/// Create Renderer and display edges and vertices

/// Create vertices and add to scene : .vertices.create .vertices.addTo

/// Same for edges



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