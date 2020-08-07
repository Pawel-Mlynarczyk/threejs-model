import TWEEN from "@tweenjs/tween.js";
import * as THREE from "three";

export const bucket1Positions = bucket => {
  const targetPosition1 = new THREE.Vector3(-30, 5, -28);
  const targetPosition2 = new THREE.Vector3(-30, 5, -10);
  const targetPosition3 = new THREE.Vector3(-30, 3, -5);
  const targetPosition4 = new THREE.Vector3(-23, 3, -5);
  const targetPosition5 = new THREE.Vector3(-23, 3, 10);
  const targetPosition6 = new THREE.Vector3(-23, 3, -5);
  const targetPosition7 = new THREE.Vector3(-30, 3, -5);
  const targetPosition8 = new THREE.Vector3(-30, 5, -10);
  const targetPosition9 = new THREE.Vector3(-30, 5, -28);

  const tween1 = new TWEEN.Tween(bucket.position).to(targetPosition1, 6000);
  const tween2 = new TWEEN.Tween(bucket.position).to(targetPosition2, 6000);
  const tween3 = new TWEEN.Tween(bucket.position).to(targetPosition3, 6000);
  const tween4 = new TWEEN.Tween(bucket.position).to(targetPosition4, 7000);
  const tween5 = new TWEEN.Tween(bucket.position).to(targetPosition5, 6000);
  const tween6 = new TWEEN.Tween(bucket.position).to(targetPosition6, 6000);
  const tween7 = new TWEEN.Tween(bucket.position).to(targetPosition7, 6000);
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

export const bucket2Positions = bucket => {
  const targetPosition1 = new THREE.Vector3(-20, 5, -28);
  const targetPosition2 = new THREE.Vector3(-20, 5, -10);
  const targetPosition3 = new THREE.Vector3(-20, 3, -5);
  const targetPosition4 = new THREE.Vector3(-23, 3, -5);
  const targetPosition5 = new THREE.Vector3(-23, 3, 10);
  const targetPosition6 = new THREE.Vector3(-23, 3, -5);
  const targetPosition7 = new THREE.Vector3(-20, 3, -5);
  const targetPosition8 = new THREE.Vector3(-20, 5, -10);
  const targetPosition9 = new THREE.Vector3(-20, 5, -28);

  const tween1 = new TWEEN.Tween(bucket.position).to(targetPosition1, 6000);
  const tween2 = new TWEEN.Tween(bucket.position).to(targetPosition2, 6000);
  const tween3 = new TWEEN.Tween(bucket.position).to(targetPosition3, 6000);
  const tween4 = new TWEEN.Tween(bucket.position).to(targetPosition4, 7000);
  const tween5 = new TWEEN.Tween(bucket.position).to(targetPosition5, 6000);
  const tween6 = new TWEEN.Tween(bucket.position).to(targetPosition6, 6000);
  const tween7 = new TWEEN.Tween(bucket.position).to(targetPosition7, 6000);
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
  }, 30000);
};

export const bucket3Positions = bucket => {
  const targetPosition1 = new THREE.Vector3(-10, 5, -28);
  const targetPosition2 = new THREE.Vector3(-10, 5, -10);
  const targetPosition3 = new THREE.Vector3(-10, 3, -5);
  const targetPosition4 = new THREE.Vector3(2, 3, -5);
  const targetPosition5 = new THREE.Vector3(2, 3, 10);
  const targetPosition6 = new THREE.Vector3(2, 3, -5);
  const targetPosition7 = new THREE.Vector3(-10, 3, -5);
  const targetPosition8 = new THREE.Vector3(-10, 5, -10);
  const targetPosition9 = new THREE.Vector3(-10, 5, -28);

  const tween1 = new TWEEN.Tween(bucket.position).to(targetPosition1, 6000);
  const tween2 = new TWEEN.Tween(bucket.position).to(targetPosition2, 6000);
  const tween3 = new TWEEN.Tween(bucket.position).to(targetPosition3, 6000);
  const tween4 = new TWEEN.Tween(bucket.position).to(targetPosition4, 7000);
  const tween5 = new TWEEN.Tween(bucket.position).to(targetPosition5, 6000);
  const tween6 = new TWEEN.Tween(bucket.position).to(targetPosition6, 6000);
  const tween7 = new TWEEN.Tween(bucket.position).to(targetPosition7, 6000);
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
  }, 60000);
};

export const bucket4Positions = bucket => {
  const targetPosition1 = new THREE.Vector3(0, 5, -28);
  const targetPosition2 = new THREE.Vector3(0, 5, -10);
  const targetPosition3 = new THREE.Vector3(0, 3, -5);
  const targetPosition4 = new THREE.Vector3(2, 3, -5);
  const targetPosition5 = new THREE.Vector3(2, 3, 10);
  const targetPosition6 = new THREE.Vector3(2, 3, -5);
  const targetPosition7 = new THREE.Vector3(0, 3, -5);
  const targetPosition8 = new THREE.Vector3(0, 5, -10);
  const targetPosition9 = new THREE.Vector3(0, 5, -28);

  const tween1 = new TWEEN.Tween(bucket.position).to(targetPosition1, 6000);
  const tween2 = new TWEEN.Tween(bucket.position).to(targetPosition2, 6000);
  const tween3 = new TWEEN.Tween(bucket.position).to(targetPosition3, 6000);
  const tween4 = new TWEEN.Tween(bucket.position).to(targetPosition4, 7000);
  const tween5 = new TWEEN.Tween(bucket.position).to(targetPosition5, 6000);
  const tween6 = new TWEEN.Tween(bucket.position).to(targetPosition6, 6000);
  const tween7 = new TWEEN.Tween(bucket.position).to(targetPosition7, 6000);
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
  }, 90000);
};
