import React, { Component } from "react";
import * as THREE from "three";
import TWEEN from "@tweenjs/tween.js";
import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader.js";

import {
  bucket1Positions,
  bucket2Positions,
  bucket3Positions,
  bucket4Positions
} from "./bucketsAnimations/bucket1Positions";

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

    const l1 = () =>
      loader.load(
        "./building/scene.gltf",
        gltf => {
          // ADD MODEL TO THE SCENE
          const warehouseModel = gltf.scene.children[0];
          warehouseModel.scale.set(0.02, 0.02, 0.02);
          warehouseModel.position.set(-40, 0, 0);

          scene.add(warehouseModel);

          renderer.render(scene, camera);
        },
        error => {
          console.log(error);
        }
      );

    l1();

    const bucketsInitialPositions = [
      {
        positions: { x: -30, y: 5, z: -28 },
        animations: bucket1Positions
      },
      {
        positions: { x: -20, y: 5, z: -28 },
        animations: bucket2Positions
      },
      {
        positions: { x: -10, y: 5, z: -28 },
        animations: bucket3Positions
      },
      {
        positions: { x: 0, y: 5, z: -28 },
        animations: bucket4Positions
      }
    ];

    const renderBuckets = () => {
      bucketsInitialPositions.map(bucketInitial =>
        loader.load(
          "./bucket/scene.gltf",
          gltf => {
            // ADD MODEL TO THE SCENEs
            const bucket = gltf.scene.children[0];
            bucket.scale.set(0.3, 0.3, 0.3);
            bucket.position.set(
              bucketInitial.positions.x,
              bucketInitial.positions.y,
              bucketInitial.positions.z
            );

            scene.add(bucket);

            renderer.render(scene, camera);

            bucketInitial.animations && bucketInitial.animations(bucket);

            animate1();
          },
          error => {
            console.log(error);
          }
        )
      );
    };

    renderBuckets();

    scene.add(meshFloor);

    camera.position.set(20, player.height, -24);
    camera.lookAt(new THREE.Vector3(-20, player.height, 0));

    const renderer = new THREE.WebGL1Renderer({ antialias: true });
    renderer.setSize(1200, 720);
    document.body.appendChild(renderer.domElement);

    const animate = () => {
      requestAnimationFrame(animate);

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

    function animate1(time) {
      requestAnimationFrame(animate1);

      TWEEN.update(time);

      renderer.render(scene, camera);
    }
  }

  render() {
    return <div ref={ref => (this.mount = ref)} />;
  }
}
