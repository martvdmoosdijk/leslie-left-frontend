import React, { Component } from 'react';
import styled from 'styled-components';
import * as THREE from 'three';
import OrbitControls from 'three-orbitcontrols';
import TWEEN from '@tweenjs/tween.js';

const Container = styled.div`
  width: 100%;
  height: 100%;
  overflow: hidden;
`;

class Logo extends Component {
  constructor(props) {
    super(props);

    this.container = React.createRef();
  }

  componentDidMount() {
    this.setupScene(this.container.current);
    this.updateSceneSize();
    this.sceneFramePassed();

    Object.keys(this.cubes).forEach((x) => {
      Object.keys(this.cubes[x]).forEach((z) => {
        this.scaleCube(this.cubes[x][z].el, 2000 + Math.random() * 1000);
      });
    });

    window.addEventListener('resize', this.updateSceneSize.bind(this));
  }

  componentWillUnmount() {
    window.removeEventListener('resize', this.updateSceneSize.bind(this));
  }

  setupScene(container) {
    const width = container.offsetWidth;
    const height = container.offsetHeight;

    const scene = new THREE.Scene();
    scene.background = new THREE.Color(0xFFFF00);

    const camera = new THREE.PerspectiveCamera(50, width / height, 0.1, 1000);
    camera.position.x = 7;
    camera.position.y = 13;
    camera.position.z = 14;
    camera.lookAt(scene.position);

    const directionalLight = new THREE.DirectionalLight(0xFFFFFF, 1);
    directionalLight.position.set(100, 350, 250);
    directionalLight.castShadow = true;
    scene.add(directionalLight);

    const renderer = new THREE.WebGLRenderer();
    renderer.setSize(width, height);
    renderer.setPixelRatio(window.devicePixelRatio);
    container.appendChild(renderer.domElement);

    const controls = new OrbitControls(camera, renderer.domElement);
    controls.enableZoom = false;
    controls.enablePan = false;

    const cubes = {};
    for (let x = -4; x <= 4; x++) {
      cubes[x] = {};

      for (let z = -4; z <= 4; z++) {
        const cubeHeight = (Math.random() * 3.8) + 0.2; // Min 0.2, max 4

        const geometry = new THREE.BoxGeometry(1, cubeHeight, 1);
        geometry.translate(0, cubeHeight / 2, 0); // Scale from origin

        const material = new THREE.MeshLambertMaterial({
          color: 0xFF1493,
          opacity: 0.9,
          transparent: true,
        });

        const cube = new THREE.Mesh(geometry, material);
        scene.add(cube);

        cube.position.x = x;
        cube.position.z = z;
        cube.scale.y = 0.01;
        // cube.scale.y = 1;

        // Create edges
        // const edgesGeometry = new THREE.EdgesGeometry(cube.geometry);
        // const edgesLines = new THREE.LineSegments(edgesGeometry, new THREE.LineBasicMaterial({ color: 0x000000 }));
        // cube.add(edgesLines);

        cubes[x][z] = { el: cube };
      }
    }

    this.cubes = cubes;
    this.scene = scene;
    this.camera = camera;
    this.renderer = renderer;
    this.controls = controls;
    this.initialWidth = width;

    this.renderScene();
  }

  scaleCube(cube, time) {
    new TWEEN.Tween(cube.scale)
      .to({ y: 1 }, time)
      .easing(TWEEN.Easing.Elastic.Out)
      // .onUpdate(this.renderScene)
      .start();
  }

  updateSceneSize() {
    const width = this.container.current.offsetWidth;
    const height = this.container.current.offsetHeight;

    this.camera.aspect = width / height;
    this.camera.zoom = this.camera.aspect + 0.1;
    this.camera.updateProjectionMatrix();

    this.renderer.setSize(width, height);
    this.renderer.render(this.scene, this.camera);
    this.renderer.setPixelRatio(window.devicePixelRatio);
  }

  sceneFramePassed() {
    // TODO: Only call this function when atually needed
    requestAnimationFrame(this.sceneFramePassed.bind(this));
    this.controls.update();
    TWEEN.update();
    this.renderScene();
  }

  renderScene() {
    this.renderer.render(this.scene, this.camera);
  }

  render() {
    return (
      <Container ref={this.container} />
    );
  }
}

export default Logo;
