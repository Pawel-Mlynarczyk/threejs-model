import TWEEN from "@tweenjs/tween.js";
import * as THREE from "three";

export const workerPositions = bucket => {
  const targetPosition1 = new THREE.Vector3(-25, 1.8, -25);
  const targetPosition2 = new THREE.Vector3(-23, 1.8, -23);
  const targetPosition3 = new THREE.Vector3(-23, 1.8, -23);
  const targetPosition4 = new THREE.Vector3(-15, 1.8, -23);
  const targetPosition5 = new THREE.Vector3(-15, 1.8, -23);
  const targetPosition6 = new THREE.Vector3(-5, 1.8, -23);
  const targetPosition7 = new THREE.Vector3(-5, 1.8, -23);
  const targetPosition8 = new THREE.Vector3(10, 1.8, -23);
  const targetPosition9 = new THREE.Vector3(20, 1.8, -23);

  const tween1 = new TWEEN.Tween(bucket.position).to(targetPosition1, 6000);
  const tween2 = new TWEEN.Tween(bucket.position).to(targetPosition2, 3000);
  const tween3 = new TWEEN.Tween(bucket.position).to(targetPosition3, 3000);
  const tween4 = new TWEEN.Tween(bucket.position).to(targetPosition4, 6000);
  const tween5 = new TWEEN.Tween(bucket.position).to(targetPosition5, 5000);
  const tween6 = new TWEEN.Tween(bucket.position).to(targetPosition6, 6000);
  const tween7 = new TWEEN.Tween(bucket.position).to(targetPosition7, 5000);
  const tween8 = new TWEEN.Tween(bucket.position).to(targetPosition8, 6000);
  const tween9 = new TWEEN.Tween(bucket.position).to(targetPosition9, 6000);

  tween1.chain(tween2);
  tween2.chain(tween3);
  tween3.chain(tween4);
  tween4.chain(tween5);
  tween5.chain(tween6);
  tween6.chain(tween7);
  tween7.chain(tween8);
  tween8.chain(tween9);

  setTimeout(() => {
    tween1.start();
  }, 3000);
};

export const worker2Positions = bucket => {
  const targetPosition1 = new THREE.Vector3(-30, 1.8, -5);
  const targetPosition2 = new THREE.Vector3(-15, 1.8, -5);
  const targetPosition3 = new THREE.Vector3(-15, 1.8, -5);
  const targetPosition4 = new THREE.Vector3(20, 1.8, -5);

  const tween1 = new TWEEN.Tween(bucket.position).to(targetPosition1, 6000);
  const tween2 = new TWEEN.Tween(bucket.position).to(targetPosition2, 6000);
  const tween3 = new TWEEN.Tween(bucket.position).to(targetPosition3, 2000);
  const tween4 = new TWEEN.Tween(bucket.position).to(targetPosition4, 20000);

  tween1.chain(tween2);
  tween2.chain(tween3);
  tween3.chain(tween4);

  setTimeout(() => {
    tween1.start();
  }, 2000);
};

export const worker3Positions = bucket => {
  const targetPosition1 = new THREE.Vector3(20, 1.8, -15);
  const targetPosition2 = new THREE.Vector3(0, 1.8, -15);
  const targetPosition3 = new THREE.Vector3(0, 1.8, -15);
  const targetPosition4 = new THREE.Vector3(20, 1.8, -15);

  const tween1 = new TWEEN.Tween(bucket.position).to(targetPosition1, 2000);
  const tween2 = new TWEEN.Tween(bucket.position).to(targetPosition2, 20000);
  const tween3 = new TWEEN.Tween(bucket.position).to(targetPosition3, 20000);
  const tween4 = new TWEEN.Tween(bucket.position).to(targetPosition4, 20000);

  tween1.chain(tween2);
  tween2.chain(tween3);
  tween3.chain(tween4);

  setTimeout(() => {
    tween1.start();
  }, 2000);
};

export const worker4Positions = bucket => {
  const targetPosition1 = new THREE.Vector3(-35, 1.8, -15);
  const targetPosition2 = new THREE.Vector3(-18, 1.8, -15);
  const targetPosition3 = new THREE.Vector3(-18, 1.8, -15);
  const targetPosition4 = new THREE.Vector3(-35, 1.8, -15);

  const tween1 = new TWEEN.Tween(bucket.position).to(targetPosition1, 10000);
  const tween2 = new TWEEN.Tween(bucket.position).to(targetPosition2, 5000);
  const tween3 = new TWEEN.Tween(bucket.position).to(targetPosition3, 5000);
  const tween4 = new TWEEN.Tween(bucket.position).to(targetPosition4, 6000);

  tween1.chain(tween2);
  tween2.chain(tween3);
  tween3.chain(tween4);

  setTimeout(() => {
    tween1.start();
  }, 2000);
};
