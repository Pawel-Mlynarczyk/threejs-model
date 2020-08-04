import React, { Component } from "react";
import * as THREE from "three";
import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader.js";

export class App extends Component {
  componentDidMount() {
    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(75, 1200 / 720, 0.1, 1000);
    var keyboard = {};
    const player = { height: 10, speed: 0.2, turnSpeed: Math.PI * 0.2 };

    const meshFloor = new THREE.Mesh(
      new THREE.PlaneGeometry(110, 150, 50, 100),
      new THREE.MeshBasicMaterial({ color: 0xfffff, wireframe: true })
    );

    const mesh = new THREE.Mesh(
      new THREE.BoxGeometry(1, 1, 1),
      new THREE.MeshBasicMaterial({ color: 0xff4444, wireframe: true })
    );

    mesh.position.y += 1;
    meshFloor.rotation.x -= Math.PI / 2;

    const light = new THREE.PointLight(0x404040, 10, 30);
    light.position.set(4, 30, 20);
    scene.add(light);

    const light2 = new THREE.AmbientLight(0x404040, 5, 40);
    light2.position.set(30, 10, 30);
    scene.add(light2);

    const light3 = new THREE.PointLight(0x404040, 5, 30);
    light3.position.set(10, 10, -20);
    scene.add(light3);

    const loader = new GLTFLoader();

    loader.load(
      "./building/scene.gltf",
      gltf => {
        // ADD MODEL TO THE SCENE
        const warehouseModel = gltf.scene.children[0];
        warehouseModel.scale.set(0.02, 0.02, 0.02);
        warehouseModel.position.set(-40, 0, 0);

        console.log("dddd", warehouseModel);

        scene.add(warehouseModel);

        renderer.render(scene, camera);
      },
      xhr => {
        console.log(xhr);
        console.log((xhr.loaded / xhr.total) * 100 + "% loaded");
      },

      error => {
        console.log(error);
      }
    );

    loader.load(
      "./bucket/scene.gltf",
      gltf => {
        // ADD MODEL TO THE SCENEs
        const bucket = gltf.scene.children[0];
        bucket.scale.set(0.2, 0.2, 0.2);
        bucket.position.set(-30, 5, -28);

        console.log("bucket", bucket);

        scene.add(bucket);

        renderer.render(scene, camera);

        setTimeout(() => {
          console.log("dupa");
        }, 6000);
      },
      xhr => {
        console.log(xhr);
        console.log((xhr.loaded / xhr.total) * 100 + "% loaded");
      },

      error => {
        console.log(error);
      }
    );

    loader.load(
      "./bucket/scene.gltf",
      gltf => {
        // ADD MODEL TO THE SCENEs
        const bucket2 = gltf.scene.children[0];
        bucket2.scale.set(0.2, 0.2, 0.2);
        bucket2.position.set(-20, 5, -28);

        console.log("bucket", bucket2);

        scene.add(bucket2);

        renderer.render(scene, camera);
      },
      xhr => {
        console.log(xhr);
        console.log((xhr.loaded / xhr.total) * 100 + "% loaded");
      },

      error => {
        console.log(error);
      }
    );

    loader.load(
      "./bucket/scene.gltf",
      gltf => {
        // ADD MODEL TO THE SCENEs
        const bucket3 = gltf.scene.children[0];
        bucket3.scale.set(0.2, 0.2, 0.2);
        bucket3.position.set(-10, 5, -28);

        console.log("bucket", bucket3);

        scene.add(bucket3);

        renderer.render(scene, camera);
      },
      xhr => {
        console.log(xhr);
        console.log((xhr.loaded / xhr.total) * 100 + "% loaded");
      },

      error => {
        console.log(error);
      }
    );

    loader.load(
      "./bucket/scene.gltf",
      gltf => {
        // ADD MODEL TO THE SCENEs
        const bucket4 = gltf.scene.children[0];
        bucket4.scale.set(0.2, 0.2, 0.2);
        bucket4.position.set(0, 5, -28);

        console.log("bucket", bucket4);

        scene.add(bucket4);

        renderer.render(scene, camera);
      },
      xhr => {
        console.log(xhr);
        console.log((xhr.loaded / xhr.total) * 100 + "% loaded");
      },

      error => {
        console.log(error);
      }
    );

    scene.add(mesh);
    scene.add(meshFloor);

    camera.position.set(10, player.height, -5);
    camera.lookAt(new THREE.Vector3(0, player.height, 0));

    const renderer = new THREE.WebGL1Renderer();
    renderer.setSize(1200, 720);
    document.body.appendChild(renderer.domElement);

    const animate = () => {
      requestAnimationFrame(animate);

      mesh.rotation.x += 0.01;
      mesh.rotation.y += 0.02;

      // Keyboard movement inputs
      if (keyboard[87]) {
        // W key
        camera.position.x -= Math.sin(camera.rotation.y) * player.speed;
        camera.position.z -= -Math.cos(camera.rotation.y) * player.speed;
      }
      if (keyboard[83]) {
        // S key
        camera.position.x += Math.sin(camera.rotation.y) * player.speed;
        camera.position.z += -Math.cos(camera.rotation.y) * player.speed;
      }
      if (keyboard[65]) {
        // A key
        // Redirect motion by 90 degrees
        camera.position.x +=
          Math.sin(camera.rotation.y + Math.PI / 2) * player.speed;
        camera.position.z +=
          -Math.cos(camera.rotation.y + Math.PI / 2) * player.speed;
      }
      if (keyboard[68]) {
        // D key
        camera.position.x +=
          Math.sin(camera.rotation.y - Math.PI / 2) * player.speed;
        camera.position.z +=
          -Math.cos(camera.rotation.y - Math.PI / 2) * player.speed;
      }

      if (keyboard[37]) {
        camera.rotation.y -= Math.PI * 0.01;
      }

      if (keyboard[39]) {
        camera.rotation.y += Math.PI * 0.01;
      }

      renderer.render(scene, camera);
    };

    animate();

    const keyDown = e => (keyboard[e.keyCode] = true);
    const keyUp = e => (keyboard[e.keyCode] = false);

    window.addEventListener("keydown", keyDown);
    window.addEventListener("keyup", keyUp);

    renderer.setSize(window.innerWidth, window.innerHeight);
    renderer.setClearColor(0x000000, 0);

    // Fog
    const color = 0xffffff;
    const density = 0.02;
    scene.fog = new THREE.FogExp2(color, density);
  }

  render() {
    return <div ref={ref => (this.mount = ref)} />;
  }
}
