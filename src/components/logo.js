import React, { Component } from 'react';
import styled from 'styled-components';
import * as THREE from 'three';

const Canvas = styled.canvas`
  width: 100%;
  height: 100%;
  background-color: orangered;
`;

class Logo extends Component {
  constructor(props) {
    super(props);

    this.canvas = React.createRef();
  }

  componentDidMount() {
    this.setupScene();

    window.addEventListener('resize', this.onResize.bind(this));
  }

  componentWillUnmount() {
    window.removeEventListener('resize', this.onResize.bind(this));
  }

  onResize() {
    console.log('Resize', !!this);
  }

  setupScene() {
    const canvas = this.canvas.current;
    const width = canvas.clientWidth;
    const height = canvas.clientHeight;

    const scene = new THREE.Scene();
    scene.background = new THREE.Color(0xFFFF00);

    const camera = new THREE.PerspectiveCamera(50, width / height, 0.1, 1000);
    camera.position.x = 7;
    camera.position.y = 13;
    camera.position.z = 14;
    camera.lookAt(scene.position); // 0,0,0

    const directionalLight = new THREE.DirectionalLight(0xFFFFFF, 1);
    directionalLight.position.set(100, 350, 250);
    directionalLight.castShadow = true;
    scene.add(directionalLight);

    const renderer = new THREE.WebGLRenderer({ canvas: this.canvas.current });
    renderer.setSize(width, height);

    // Add cubes
    const cubes = {};
    for (let x = -4; x < 6; x++) {
      cubes[x] = {};
      for (let z = -4; z < 6; z++) {
        const cubeHeight = (Math.random() * 4) + 0.2;

        const geometry = new THREE.BoxGeometry(1, cubeHeight, 1);
        geometry.translate(0, cubeHeight / 2, 0);

        const material = new THREE.MeshLambertMaterial({
          color: 0xFF1493,
          opacity: 0.9,
          transparent: true,
        });

        const cube = new THREE.Mesh(geometry, material);
        scene.add(cube);

        cube.position.x = x;
        cube.position.z = z;
        cube.scale.y = 0.5;

        cubes[x][z] = cube;
      }
    }

    renderer.render(scene, camera);
  }

  render() {
    return (
      <Canvas ref={this.canvas} />
    );
  }
}

export default Logo;
