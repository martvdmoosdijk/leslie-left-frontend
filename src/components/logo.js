import React, { Component } from 'react';
import styled from 'styled-components';
import * as THREE from 'three';
import OrbitControls from 'three-orbitcontrols';
import TWEEN from '@tweenjs/tween.js';

const Container = styled.div`
  position: relative;
  width: 100%;
  height: 100%;
  overflow: visible;
`;

const Wrapper = styled.div`
  position: absolute;

  top: -10%;
  left: -10%;
  width: 120%;
  height: 120%;

  transform: translateX(10px) translateY(10px);

  display: flex;
  justify-content: center;
  align-items: center;

  @media (orientation: landscape) {
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;

    transform: translateX(0px) translateY(10px);
  }
`;

class Logo extends Component {
  constructor(props) {
    super(props);

    this.wrapper = React.createRef();
  }

  componentDidMount() {
    this.setupScene(this.wrapper.current);
    this.renderFrame();

    Object.keys(this.cubes).forEach((x) => {
      Object.keys(this.cubes[x]).forEach((z) => {
        this.scaleCube(this.cubes[x][z].el, 2000 + Math.random() * 1000);
      });
    });

    setTimeout(() => {
      for (let i = 0; i < 20; i++) {
        this.scaleCubeInfinite();
      }
    }, 2000);

    window.addEventListener('resize', this.updateSceneSize.bind(this));
  }

  componentWillUnmount() {
    window.removeEventListener('resize', this.updateSceneSize.bind(this));
  }

  setupScene(wrapper) {
    const scene = new THREE.Scene();
    scene.background = new THREE.Color(0xFFFF00);

    const camera = new THREE.PerspectiveCamera(50, 1, 0.1, 1000);
    camera.position.x = 7;
    camera.position.y = 13;
    camera.position.z = 14;
    camera.lookAt(scene.position);

    const directionalLight = new THREE.DirectionalLight(0xFFFFFF, 1);
    directionalLight.position.set(100, 350, 250);
    directionalLight.castShadow = true;
    scene.add(directionalLight);

    const renderer = new THREE.WebGLRenderer();
    wrapper.appendChild(renderer.domElement);

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
        cube.scale.y = 0.00001;

        cubes[x][z] = { el: cube };
      }
    }

    this.cubes = cubes;
    this.scene = scene;
    this.camera = camera;
    this.renderer = renderer;
    this.controls = controls;

    this.updateSceneSize();
    this.renderScene();
  }

  scaleCube(cube, time) {
    new TWEEN.Tween(cube.scale)
      .to({ y: 1 }, time)
      .easing(TWEEN.Easing.Elastic.Out)
      // .onUpdate(this.renderScene)
      .start();
  }

  scaleCubeInfinite() {
    const x = Math.floor((Math.random() * 9) - 4);
    const y = Math.floor((Math.random() * 9) - 4);
    const randCube = this.cubes[x][y];

    if (randCube.isAnimating) {
      this.scaleCubeInfinite();
      return;
    }

    const height = (Math.random() * 0.8) + 0.4;
    const time = (2000 * Math.random()) + 1000;

    randCube.isAnimating = true;

    new TWEEN.Tween(randCube.el.scale)
      .easing(TWEEN.Easing.Elastic.Out)
      .to({ y: height }, time)
      .onComplete(() => {
        this.scaleCubeInfinite();
        randCube.isAnimating = false;
      })
      .start();
  }

  updateSceneSize() {
    const size = Math.min(
      this.wrapper.current.offsetWidth,
      this.wrapper.current.offsetHeight,
    );

    this.camera.aspect = 1;
    this.camera.zoom = 1.23;
    this.camera.updateProjectionMatrix();

    this.renderer.setSize(size, size);
    this.renderer.render(this.scene, this.camera);
    this.renderer.setPixelRatio(window.devicePixelRatio);
  }

  renderFrame() {
    // TODO: Only call this function when atually needed
    if (process.env.NODE_ENV === 'development') {
      setTimeout(() => {
        requestAnimationFrame(this.renderFrame.bind(this));
      }, 500);
    } else {
      requestAnimationFrame(this.renderFrame.bind(this));
    }
    TWEEN.update();
    this.renderScene();
  }

  renderScene() {
    this.renderer.render(this.scene, this.camera);
  }

  render() {
    return (
      <Container>
        <Wrapper ref={this.wrapper} />
      </Container>
    );
  }
}

export default Logo;
