import { Graph } from './CMapJS/CMap/CMap.js';
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



/// Exercise - Build a triforce graph

//     /\
//    /__\
//   /\  /\
//  /__\/__\

/// Create graph
const graph = new Graph;

/// create vertex embedding and create position attribute
graph.createEmbedding(graph.vertex);
const position = graph.addAttribute(graph.vertex, "position");

/// Outer triangle
/// Create 3 vertices: .addVertex and set positions to (0, 1, 0) (-0.866, -0.5, 0) (0.866, -0.5, 0)

/// Connect the vertices with .connectVertices(v0, v1)

/// Inner triangle
/// Cut edges in the middle


/// Connect the new three vertices


/// Create Renderer and display edges and vertices
const graphRenderer = new Renderer(graph);
/// Create vertices and add to scene : .vertices.create .vertices.addTo
graphRenderer.vertices.create();
graphRenderer.vertices.addTo(scene);
/// Same for edges
graphRenderer.edges.create();
graphRenderer.edges.addTo(scene);








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