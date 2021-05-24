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



/// Exercise - Build tetrahedron from scratch

/// Create map
const map = new CMap2;

/// Create 3 triangles: .addFace1(degree)

/// Sew triangles together in phi2: .sewPhi2(dart, dart)

/// Close the missing triangle with .close()

/// Or with .closeHole(dart) on a boundary dart

/// Create vertex embeddings by hand:
/// .createEmbedding(emb)
/// for every cell of emb: map.newCell(emb)
/// .foreachDartOf(emb, cell_dart, d => .setEmbedding(emb, d, id))

/// Create vertex embedding by hand: map.createEmbedding()

/// Create 4 new vertex ids: .newCell(vertex)

/// Set embeddings: .setEmbedding(emb, dart, vid)

/// Get vertex attribute "position"


/// Set vertex positions (reuse vertex ids) : (-0.5, -0.5, 0.5), (0.5, -0.5, -0.5), (0.5, 0.5, 0.5), (-0.5, 0.5, -0.5)

/// Create Renderer and display edges and vertices

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